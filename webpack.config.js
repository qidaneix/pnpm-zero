module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [/node_modules/, /src/],
        use: ["babel-loader"],
      },
    ],
  },
};
