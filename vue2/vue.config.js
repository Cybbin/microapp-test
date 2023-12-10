const { defineConfig } = require("@vue/cli-service");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const defineOptionsPlugin = require("unplugin-vue-define-options/webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8081/",

  configureWebpack: {
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
  },
});
