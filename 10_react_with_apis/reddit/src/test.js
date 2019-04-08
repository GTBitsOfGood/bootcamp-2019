const axios = require("axios");
axios.get("https://bog-reddit.herokuapp.com/api/v1/posts")
    .then(res => console.log(res.data))
    .then(console.log("jere"));