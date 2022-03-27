const axios = require('axios');

async function getData(UserID) {
    let {data:user} = await axios("https://jsonplaceholder.typicode.com/users/" + UserID);
    let {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + UserID);

    user.posts = [...post];
    console.log(user);
};

module.exports = getData;