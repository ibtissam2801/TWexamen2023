let express=require('express');
let app =express();
let router=require('./routes');
app.use('/',router);
app.get('/',(request,response)=>{
   response.send("hello ");
});
app.listen(80,function(){
    console.log('server is running on port 80');
})