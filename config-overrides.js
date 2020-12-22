const path = require('path');
const { override, fixBabelImports, addLessLoader, addWebpackAlias, overrideDevServer } = require('customize-cra');

// module.exports = function override(config, env) {
//   config.resolve.alias = {
//     ...config.resolve.alias,
//     '@': path.resolve(__dirname, './src')
//   };
//   return config
// }
// https://github.com/arackaf/customize-cra


const rewiredMap = () => config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};
// 添加代理
const addProxy = () => (configFunction) => {
    configFunction.proxy = {
        '/v2ex/': {
            target: 'https://www.v2ex.com',
            changeOrigin: true,
            pathRewrite: { '^/v2ex': '/' },
        },
    };

    return configFunction;
}


module.exports = {
    webpack: override(
        addWebpackAlias({
            "@": path.resolve(__dirname, "./src"),
        }),
        // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            // style: true,//自动打包相关的样式 默认为 style:'css' 采用LESS需要关闭
        }),
        addLessLoader(
            {
                javascriptEnabled: true,
                modifyVars: { "@primary-color": "#1DA57A" },
            }
        ),
        // 关闭mapSource
        rewiredMap(),
    ),
    devServer: overrideDevServer(
        // addProxy()
    )
}