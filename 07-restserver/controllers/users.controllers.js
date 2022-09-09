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
    // when is a json format it send an object
    res.json({ 
        msg: 'post API - controller'
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