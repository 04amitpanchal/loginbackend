var login=require('../model/login');
var express=require('express');
var routes=express.Router();

routes.get('/:id?',function(req,res,next){
    if (req.params.id) {
        login.getByid(req.params.id,function(err,rows){
            if (err) {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });        
    }
    else
    {
        login.getAlldata(function(err,rows){
            if (err) {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
});

routes.post('',function(req,res,next){
    login.addAlldata(req.body,function(err,rows){
        if (err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


routes.put('/:id',function(req,res,next){
    login.updatedata(req.body,req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

routes.delete('/:id',function(req,res,next){
    login.deleteAlldata(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=routes;