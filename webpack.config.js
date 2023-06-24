
module.exports = {
    // ...
    resolve: {
      fallback: {
        querystring: require.resolve("querystring-es3"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify")
      },
    }
  };