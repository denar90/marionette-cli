module.exports = {
  moduleTypes: [
    "rjs",
    "cjs",
    "es6"
  ],
  apps: {
    es6: {
      brunch: "https://github.com/denar90/brunch-with-marionettejs",
      browserify: "https://github.com/denar90/browserify-with-marionettejs",
      webpack: "https://github.com/denar90/webpack-with-marionettejs"
    }
  },
  aliases: {
    n: "new",
    s: "set",
    g: "generate",
    a: "apply"
  },
  generateOptions: [
    "layout",
    "collection",
    "model",
    "router",
    "object",
    "itemView",
    "behavior",
    "compositeView",
    "collectionView"
  ]
};