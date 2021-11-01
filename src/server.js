'use strict';

// basic Requirements:
const express=require('express');
const app=express();
const PORT= process.env.PORT;
const logger=require('./middlewares/logger');
const validator=require('./middlewares/validator');
const errorServerHandler=require('./error-handlers/404');
const generalErrors=require('./error-handlers/500');



app.use(logger);// to console log outputs

//Create endpoints:
app.get('/person',validator,(req,res)=>{
    
    // const name=req.query;
    const outPut= req.query

    res.status(200).json(outPut)

}) 


// start Function :
function start(){
    app.listen(PORT,()=>{
        console.log(`The server is working on port ${PORT}`)
    });
        
    
};



// Global middleWares:
 app.use('*',errorServerHandler);// to check the errors with server
 app.use(generalErrors) ;










// make them visible:
module.exports={
    app,
    start
}