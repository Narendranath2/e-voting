const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy("/addVote", {
            target: "https://nameless-castle-69274.herokuapp.com/",
            secure: false,
            changeOrigin: true
        })
    );
    app.use(
        proxy("/", {
            target: "https://nameless-castle-69274.herokuapp.com/",
            secure: false,
            changeOrigin: true
        })
    );
}