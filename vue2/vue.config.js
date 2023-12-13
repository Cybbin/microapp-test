const { defineConfig } = require("@vue/cli-service");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const defineOptionsPlugin = require("unplugin-vue-define-options/webpack");

const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8081/",

  configureWebpack: {
    // devtool: false,
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      port: 8081,
    },
    plugins: [
      defineOptionsPlugin(),
      new ModuleFederation({
        name: "vue2Module",
        filename: "remoteEntry.js",
        exposes: {
          "./ToolBox": "./src/ToolBox.vue",
        },
      }),
    ],
  },

  chainWebpack: (config) => {
    config.optimization.splitChunks({
      chunks: "async",
    });

    config.module.rule("svg").exclude.add(resolve("src/Icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/Icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
});
