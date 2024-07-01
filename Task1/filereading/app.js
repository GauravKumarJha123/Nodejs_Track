const fs = require('fs');
const axios = require('axios');
const filePath = "C:\\Users\\Gaurav_Jha\\Documents\\Req.Json";


var fetchFileData =  (err , data) => {
    if(err){
        console.error(`There was some error ${e}`);
        return;
    }
    console.log("File Data", data.toString());
}


async function fetchApi(id){
    const url =  (id ==  null) ? `https://jsonplaceholder.typicode.com/posts` : 
    `https://jsonplaceholder.typicode.com/posts/${id}`;

    try{
    const res =  await axios.get(url);
    if(res.status !== 200){
        throw new Error('response was not ok');
    }
    return res.data;
    }catch(e){
        console.error('Error fetching posts', e);
        throw e;
    }
}

async function mainFunction(){
    var posts = await fetchApi(null);
    console.log('Posts', posts);
    var postsId1 =await fetchApi(1);
    console.log('Post of id 1', postsId1);
}

//fs.readFile(filePath, fetchFileData);
mainFunction();

