const express 			= require('express');
const router 			= express.Router();
const {pageView,monitClick,existClick,getExistClick,getPageViews,notFound,promoClick}=require('../controller/dbutil')

    // getting the home route
    router.get('/', (req, res) => {
      res.send('Welcome')
    });
    router.get('/pageview', (req, res) => {
        try{
            var ip=req.ip;
            var q=req.query;
            if(q.userip==''){q.userip=ip}
        new pageView(req.query);
        }catch(err){
            console.log(err);
        }
        res.statusCode=201;
        res.send();
    });
    router.get('/monitclick', (req, res) => {
        try{
            new monitClick(ctx.query);
            }catch(err){
                console.log(err);
            }
            res.statusCode=201;
            res.send();
    });
    router.get('/existclick', (req, res) => {
        try{
            new existClick(req.query);
            }catch(err){
                console.log(err);
            }
            res.statusCode=201;
            res.send();
    });
    router.get('/promoclick', (req, res) => {
        try{
            new promoClick(req.query);
            }catch(err){
                console.log(err);
            }
            res.statusCode=201;
            res.send();
    });
    router.get('/getexistclick', async (req, res) => {
        try{            
            var data=await getExistClick(req.query);            
            res.statusCode=200;
            res.json(data);
            }catch(err){
                console.log(err);
                res.statusCode=200;
                res.send(err);
            }
            
    });
    router.get('/getpageviews', async (req, res) => {
        try{    
            console.log(req.query)        
            var data=await getPageViews(req.query);            
            res.statusCode=200;
            res.json(data);
            }catch(err){
                console.log(err);
                res.statusCode=200;
                res.send(err);
            }
            
    });
    module.exports = router;
