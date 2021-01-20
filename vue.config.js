const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // hack: `true; @import ${resolve(
          //   "src/assets/styles/themes/vant.theme.var.less"
          // )};`
        }
      }
    }
  }
};
