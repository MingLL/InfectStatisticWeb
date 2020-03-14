module.exports = {
    devServer: {
        disableHostCheck: true,
        https: false, // https:{type:Boolean}
        // open: true, // 配置自动启动浏览器
        proxy: 'http://localhost:3000' // 配置跨域处理,只有一个代理
    }
}