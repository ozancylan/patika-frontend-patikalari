
import axios from "axios";


async function getData(Number) {
    const { data : user } = await axios (`https://jsonplaceholder.typicode.com/users/${Number}`)
    const { data : posts } = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${Number}`)
    const userPosts = [];
    userPosts.push("user: ", user);
    userPosts.push("posts: ", posts);
    return userPosts;
    
}
getData(1);
export default await getData(1);
console.log(await getData(1));

