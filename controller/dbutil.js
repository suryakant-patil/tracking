
var {pools,sql}=require('./db.js')
async function insertPageView({tid=0,siteid,sessionid,trackid='',userid=0,userip=null,srid=0,referrer=null,os=null,country=null,countryid=0,state=null,city=null,browser=null,entrytime=new Date(),existtime,lang=0,pageid=0,pagetype=0,pageurl=null}){
    
    var pool1=await pools;
    
    try {
        const request = await new sql.Request(pool1);
        request.input('tid', sql.Int, tid);
        request.input('siteid', sql.Int, siteid);
        request.input('sessionid', sql.VarChar, sessionid);
        request.input('trackid', sql.VarChar, trackid);
        request.input('userid', sql.Int, userid);
        request.input('userip', sql.VarChar, userip);
        request.input('srid', sql.Int, srid);
        request.input('rurl', sql.VarChar, referrer);
        request.input('os', sql.VarChar, os);
        request.input('countrycode', sql.VarChar, country);
        request.input('countryid', sql.Int, countryid);
        request.input('state', sql.VarChar, state);
        request.input('city', sql.VarChar, city);
        request.input('browser', sql.VarChar, browser);
        request.input('entrytime', sql.DateTime, entrytime);
        request.input('existtime', sql.DateTime, existtime);
        request.input('lang', sql.Int, lang);
        request.input('pageurl', sql.VarChar, pageurl);        
        request.input('pageid', sql.Int, pageid);
        request.input('pagetype', sql.Int, pagetype);

        request.output('output',sql.Int);
     
        var result =await request.execute('trackingInsertPageView');
        console.log(result)
        
    	
    	
    } catch (err) {
        console.error('SQL error', err);
    }
}
const sectionEnum={left:1,content:2,right:3}
async function insertMonitClick({tid=0,sessionid,trackid=null,activeurl=null,clickedurl=null,compid=null,section=0,linkid=null,pageid=0,pagetype=0,siteid}){
    
    var pool1=await pools;
    if(typeof section=='string'){
        section=sectionEnum[section]
    }
    
    try {
        const request = await new sql.Request(pool1);
        request.input('tid', sql.Int, tid);        
        request.input('sessionid', sql.VarChar, sessionid);
        request.input('trackid', sql.VarChar, trackid);
        request.input('activeurl', sql.VarChar, activeurl);
        request.input('clickedurl', sql.VarChar, clickedurl);
        request.input('compid', sql.VarChar, compid);
        request.input('section', sql.Int, section);
        request.input('linkid', sql.VarChar, linkid);                
        request.input('pageid', sql.Int, pageid);
        request.input('pagetype', sql.Int, pagetype);
        //request.input('siteid', sql.Int, siteid);

     
        var result =await request.execute('trackingInsertComponentClick');
   
        
    	
    	
    } catch (err) {
        console.error('SQL error', err);
    }
}

async function insertExistClick({tid=0,sessionid,trackid=null,activeurl=null,clickedurl=null,compid=null,section=0,linkid=null,pageid=0,pagetype=0,country=null,siteid,os=0,userip='',campaignid=0,adgroupid=0,matchtype='',keyword='',adposition='',source='',creative='',placement='',device='',devicemodel='',loc_interest_ms='',loc_physical_ms='',state='',city=null}){    
    var pool1=await pools;
    if(typeof section=='string'){
        section=sectionEnum[section]
    }
    try {
        const request = await new sql.Request(pool1);
        request.input('tid', sql.Int, tid);        
        request.input('sessionid', sql.VarChar, sessionid);
        request.input('trackid', sql.VarChar, trackid);
        request.input('activeurl', sql.VarChar, activeurl);
        request.input('countryid', sql.VarChar, country);
        request.input('clickedurl', sql.VarChar, clickedurl);
        request.input('compid', sql.VarChar, compid);
        request.input('section', sql.Int, section);
        request.input('linkid', sql.VarChar, linkid);                
        request.input('pageid', sql.Int, pageid);
        request.input('pagetype', sql.Int, pagetype);
        request.input('siteid', sql.Int, siteid);
        request.input('ostype', sql.Int, os);
        request.input('userip', sql.VarChar, userip);
        request.input('campaignId', sql.BigInt, Array.isArray(campaignid)?campaignid[0]:campaignid);
        request.input('adgroupId', sql.BigInt, Array.isArray(adgroupid)?adgroupid[0]:adgroupid);
        request.input('matchType', sql.VarChar, Array.isArray(matchtype)?matchtype[0]:matchtype);
        request.input('keyword', sql.VarChar, Array.isArray(keyword)?keyword[0]:keyword);
        request.input('adposition', sql.VarChar, Array.isArray(adposition)?adposition[0]:adposition);
        request.input('source', sql.VarChar, Array.isArray(source)?source[0]:source);
        request.input('creative', sql.VarChar, Array.isArray(creative)?creative[0]:creative);
        request.input('placement', sql.VarChar, Array.isArray(placement)?placement[0]:placement);
        request.input('device', sql.VarChar, Array.isArray(device)?device[0]:device);
        request.input('devicemodel', sql.VarChar, Array.isArray(devicemodel)?devicemodel[0]:devicemodel);
        request.input('loc_interest_ms', sql.VarChar, Array.isArray(loc_interest_ms)?loc_interest_ms[0]:loc_interest_ms);
        request.input('loc_physical_ms', sql.VarChar, Array.isArray(loc_physical_ms)?loc_physical_ms[0]:loc_physical_ms);
        request.input('state', sql.VarChar, state);
        request.input('city', sql.VarChar, city);



     
        var result =await request.execute('trackingInsertExistClick');
   
        
    	
    	
    } catch (err) {
        console.error('SQL error', err);
    }
}

async function insertPromoClick({tid=0,sessionid,trackid=null,activeurl=null,clickedurl=null,compid=null,section=0,linkid=null,pageid=0,pagetype=0,country=null,siteid,os=0,userip='',campaignid=0,adgroupid=0,matchtype='',keyword='',adposition='',source='',creative='',placement='',device='',devicemodel='',loc_interest_ms='',loc_physical_ms='',state=null,city=null}){    
  var pool1=await pools;
  if(typeof section=='string'){
      section=sectionEnum[section]
  }
  try {
      const request = await new sql.Request(pool1);
      request.input('tid', sql.Int, tid);        
      request.input('sessionid', sql.VarChar, sessionid);
      request.input('trackid', sql.VarChar, trackid);
      request.input('activeurl', sql.VarChar, activeurl);
      request.input('countryid', sql.VarChar, country);
      request.input('clickedurl', sql.VarChar, clickedurl);
      request.input('compid', sql.VarChar, compid);
      request.input('section', sql.Int, section);
      request.input('linkid', sql.VarChar, linkid);                
      request.input('pageid', sql.Int, pageid);
      request.input('pagetype', sql.Int, pagetype);
      request.input('siteid', sql.Int, siteid);
      request.input('ostype', sql.Int, os);
      request.input('userip', sql.VarChar, userip);
      request.input('campaignId', sql.BigInt, Array.isArray(campaignid)?campaignid[0]:campaignid);
      request.input('adgroupId', sql.BigInt, Array.isArray(adgroupid)?adgroupid[0]:adgroupid);
      request.input('matchType', sql.VarChar, Array.isArray(matchtype)?matchtype[0]:matchtype);
      request.input('keyword', sql.VarChar, Array.isArray(keyword)?keyword[0]:keyword);
      request.input('adposition', sql.VarChar, Array.isArray(adposition)?adposition[0]:adposition);
      request.input('source', sql.VarChar, Array.isArray(source)?source[0]:source);
      request.input('creative', sql.VarChar, Array.isArray(creative)?creative[0]:creative);
      request.input('placement', sql.VarChar, Array.isArray(placement)?placement[0]:placement);
      request.input('device', sql.VarChar, Array.isArray(device)?device[0]:device);
      request.input('devicemodel', sql.VarChar, Array.isArray(devicemodel)?devicemodel[0]:devicemodel);
      request.input('loc_interest_ms', sql.VarChar, Array.isArray(loc_interest_ms)?loc_interest_ms[0]:loc_interest_ms);
      request.input('loc_physical_ms', sql.VarChar, Array.isArray(loc_physical_ms)?loc_physical_ms[0]:loc_physical_ms);
      request.input('state', sql.VarChar, state);
      request.input('city', sql.VarChar, city);



   
      var result =await request.execute('trackingInsertPromoClick');
 
      
    
    
  } catch (err) {
      console.error('SQL error', err);
  }
}

const pageView=function(params,req,res){    
    insertPageView(params);
}
const monitClick=function(params,req,res){    
    insertMonitClick(params);  
}
const existClick=function(params,req,res){
    insertExistClick(params);   
}
const promoClick=function(params,req,res){
  insertPromoClick(params);   
}
async function getExistClick({startdate=null,enddate=null,siteid=1}){
    var pool1=await pools;
    startdate&&(startdate=new Date(startdate));
    enddate&&(enddate=new Date(enddate));
    try {
        const request = await new sql.Request(pool1);
        request.input('startdate', sql.DateTime, startdate);        
        request.input('enddate', sql.DateTime, enddate);
        request.input('siteid', sql.Int, siteid);
        
     
        var {recordsets} =await request.execute('trackingGetTopExistClicks');
        var bclicks=recordsets[0]; 
        var countryWise=[] 
        if(bclicks.length){
            
            countryWise=recordsets[1];
        }  
        return {brandClicks:bclicks,countryWise:countryWise};
        
    	
    	
    } catch (err) {
        console.error('SQL error', err);
        return err;
        
    }
}
async function getBrandExistClick({startdate=null,enddate=null,siteid=1,brandid=0}){
    var pool1=await pools;
    startdate&&(startdate=new Date(startdate));
    enddate&&(enddate=new Date(enddate));
    try {
        const request = await new sql.Request(pool1);
        request.input('startdate', sql.DateTime, startdate);        
        request.input('enddate', sql.DateTime, enddate);
        request.input('siteid', sql.Int, siteid);
        request.input('brandid', sql.Int, brandid);
        
     
        var {recordsets} =await request.execute('trackingGetBrandCountryExistClicks');
        var bclicks=recordsets[0];        
        var linkWise=[] 
        var brandCountryClicks=[]
        if(bclicks.length){ 
            brandCountryClicks=bclicks.reduce((acc,item)=>{
                var exist=acc.findIndex(aitem=>aitem.country==item.country);                
                if(exist>-1){acc[exist].clicks=acc[exist].clicks+item.clicks}
                else{acc.push({clicks:item.clicks,country:item.country,CountryName:item.countryname})}                
                return acc;
            },[]);            
            linkWise=bclicks.reduce((acc,item)=>{
                var exist=acc.findIndex(aitem=>aitem.linkid==item.linkid);
                if(exist>-1){acc[exist].clicks=acc[exist].clicks+item.clicks}
                else{acc.push({clicks:item.clicks,linkid:item.linkid,LinkName:item.LinkName})}
                return acc;
            },[]);
        }  
        return {brandClicks:brandCountryClicks,linkWise:linkWise};
        
    	
    	
    } catch (err) {
        console.error('SQL error', err);
        return err;
        
    }
}
async function getPageMatix({startdate=null,enddate=null,siteid=1}){
    var pool1=await pools;
    startdate&&(startdate=new Date(startdate));
    enddate&&(enddate=new Date(enddate));
    try {
        const request = await new sql.Request(pool1);
        request.input('startdate', sql.DateTime, startdate);        
        request.input('enddate', sql.DateTime, enddate);
        request.input('siteid', sql.Int, siteid);
       
        
     
        var {recordsets} =await request.execute('trackingGetPageMatrix');
        var bclicks=recordsets[0];        
        
        return bclicks;
        
    	
    	
    } catch (err) {
        console.error('SQL error', err);
        return err;
        
    }
}
async function getPageViews({startdate=null,enddate=null,siteid=1}){
    var pool1=await pools;
    console.log('in')
    startdate&&(startdate=new Date(startdate));
    enddate&&(enddate=new Date(enddate));
    console.log(startdate,enddate)

    try {
        const request = await new sql.Request(pool1);
        request.input('startdate', sql.DateTime, startdate);        
        request.input('enddate', sql.DateTime, enddate);
        request.input('siteid', sql.Int, siteid);
        
     
        var {recordsets} =await request.execute('trackingGetPagewiseViews');  
        console.log(recordsets)  
        return recordsets[0];
        
    	
    	
    } catch (err) {
        console.error('SQL error', err);
        return err;
        
    }
}
const notFound=function(req,res){    
    res.statusCode = 402;
    res.setHeader('Content-Type', 'application/json');    
}

module.exports={pageView:pageView,monitClick:monitClick,existClick:existClick,getExistClick:getExistClick,getPageMatix:getPageMatix,getPageViews:getPageViews,getBrandExistClick:getBrandExistClick,notFound:notFound,promoClick:promoClick}