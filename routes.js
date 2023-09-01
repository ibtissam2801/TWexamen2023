let express=require('express');
let router=express.Router();
let acceuilcontroller=require('./controllers/acceuilcontroller');
router.get('/',acceuilcontroller.infolist);
module.exports=router;