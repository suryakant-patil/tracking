const {pageView,monitClick,existClick,getExistClick,getPageViews,getBrandExistClick,getPageMatix,notFound,promoClick}=require('../controller/dbutil')
require('dotenv').config();
let routePreFix=process.env.LOCAL=='true'?'/':'/tracking/';
module.exports = ({ router }) => {
    // getting the home route
    router.get(routePreFix, (ctx, next) => {
      ctx.body = 'Hello World!';
    });
    router.get(`${routePreFix}pageview`, (ctx, next) => {
        try{
            var ip=ctx.ip;
            var q=ctx.query;
            if(q.userip==''){q.userip=ip}
        new pageView(q);
        }catch(err){
            console.log(err);
        }
        ctx.status=201;
        ctx.body = '';
    });
    router.get(`${routePreFix}monitclick`, (ctx, next) => {
        try{
            new monitClick(ctx.query);
            }catch(err){
                console.log(err);
            }
            ctx.status=201;
            ctx.body = '';
    });
    router.get(`${routePreFix}existclick`, (ctx, next) => {
        try{
            new existClick(ctx.query);
            }catch(err){
                console.log(err);
            }
            ctx.status=201;
            ctx.body = '';
    });
    router.get(`${routePreFix}getexistclick`, async (ctx, next) => {
        try{            
            var data=await getExistClick(ctx.query);
            ctx.set('Content-Type', 'application/json')
            ctx.status=200;
            ctx.body = data;
            }catch(err){
                console.log(err);
                ctx.status=200;
                ctx.body = err;
            }
            
    });
    router.get(`${routePreFix}getbrandexistclick`, async (ctx, next) => {
        try{            
            var data=await getBrandExistClick(ctx.query);
            ctx.set('Content-Type', 'application/json')
            ctx.status=200;
            ctx.body = data;
            }catch(err){
                console.log(err);
                ctx.status=200;
                ctx.body = err;
            }
            
    });
    router.get(`${routePreFix}getpagematrix`, async (ctx, next) => {
        try{            
            var data=await getPageMatix(ctx.query);
            ctx.set('Content-Type', 'application/json')
            ctx.status=200;
            ctx.body = data;
            }catch(err){
                console.log(err);
                ctx.status=200;
                ctx.body = err;
            }
            
    });
    router.get(`${routePreFix}getpageviewdata`, async (ctx, next) => {
        try{  
            console.log('inside')          
            var data=await getPageViews(ctx.query);
            ctx.set('Content-Type', 'application/json')
            ctx.status=200;
            ctx.body = data;
            }catch(err){   
                console.log('in error')               
                ctx.status=200;
                ctx.body = err;
            }
            
    });
    router.get(`${routePreFix}promoclick`, (ctx, next) => {
      try{
          new promoClick(ctx.query);
          }catch(err){
              console.log(err);
          }
          ctx.status=201;
          ctx.body = '';
  });
  };