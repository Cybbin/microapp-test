const { defineConfig } = require("@vue/cli-service");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8080/",

  configureWebpack: {
    devServer: {
      port: 8080,
    },
    plugins: [
      new ModuleFederation({
        name: "vue1Module",
        filename: "remoteEntry.js",
        remotes: {
          vue2Module: "vue2Module@//localhost:8081/remoteEntry.js",
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
