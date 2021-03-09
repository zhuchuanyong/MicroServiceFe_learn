
// const port = 7100; // dev port

// module.exports = {
//   // publicPath: './',
//   devServer: {
//     // host: '0.0.0.0',
//     hot: true,
//     disableHostCheck: true,
//     port,
//     overlay: {
//       warnings: false,
//       errors: true
//     },
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     }
//   },
 
// };

module.exports = {
  devServer: {
    port: 6789,
    open: true
}
};