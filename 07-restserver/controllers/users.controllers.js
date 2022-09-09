const { response } = require('express')



const userGet = (req, res = response) => { 
    // when is a json format it send an object
    res.json({ 
        msg: 'get API - controller'
    });
}


const userPut = (req, res = response) => {
    // when is a json format it send an object
    res.json({ 
        msg: 'put API - controller'
    });
}


const userPost = (req, res = response) => { // create new resources
    // Recive the body in formart json of server
    const { name, age, id, lastName } = req.body;
    
    // when is a json format it send an object
    res.json({ 
        msg: 'post API - controller',
        name, 
        age,
        id,
        lastName
    });
}


const userPatch = (req, res = response) => {
    // when is a json format it send an object
    res.json({ 
        msg: 'patch API - controller'
    });
}

const userDelete = (req, res = response) => {
    // when is a json format it send an object
    res.json({ 
        msg: 'delete API - controller'
    });
}



module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
}