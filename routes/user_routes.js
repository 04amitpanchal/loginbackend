var login=require('../model/login');
var express=require('express');
var route=express.Router();


route.post('',function(req,res,next){
    login.getep(req.body,function(err,rows){
        if (err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

route.put('/:id',function(req,res,next){
    login.changepassword(req.body,req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=route;