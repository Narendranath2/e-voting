const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy("/addVote",{
            target:"https://nameless-castle-69274.herokuapp.com",
            changeOrigin:true,
            secure:false
        })
    );
};