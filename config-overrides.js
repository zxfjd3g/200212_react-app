 // 定义了很多修改webpack配置的函数
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports = override(
  fixBabelImports('import', { // babel-plugin-import 根据import引入来打包
    libraryName: 'antd', // 针对antd
    libraryDirectory: 'es', // es文件夹下找对应的模块
    // style: 'css', // 自动打包对应的css
    style: true, // 自动打包对应的less
  }),

  addLessLoader({
    lessOptions:{
      javascriptEnabled: true,
      // 将primary的颜色从默认的蓝色 ==> 绿色
      modifyVars: { '@primary-color': '#1DA57A' },  
    }
  }),
  // 指定路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, "src")
  }),
);