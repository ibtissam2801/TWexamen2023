let Imc =require('../models/imc.js');
let infolist=[];
exports.infolist=function(req,res){
    let info=new Imc("01022023","Paul","80");
    infolist.push(info);
    res.render('historique.ejs',{infos:infolist});
}