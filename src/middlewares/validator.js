'use strict';

// to check query as a string:

function validator(req,res,next){

    
    if (req.query.name){
        next();
    }
   else{
      next('the name is not vaild');
   }
    
};

module.exports=validator;