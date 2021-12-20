module.exports = {
    baseUrl:'./',
    assertsDir : 'static',
    productionSourceMap:false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}
