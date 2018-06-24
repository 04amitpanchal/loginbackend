var db=require('../dbconnection');
var login={

getAlldata:function(callback){
        return db.query('select * from login',callback);
},
getByid:function(id,callback){
    return db.query('select * from login where email_id=?',[id],callback);
},
addAlldata:function(item,callback){
    return db.query('insert into login values(?,?,?,?,?,?,?)',
    [item.email_id,item.password,item.user_name,item.mobileno,item.city,item.gender,item.address],
    callback);
},
deleteAlldata:function(id,callback){
    return db.query('delete from login where email_id=?',[id],callback);
},
updatedata:function(item,id,callback){
    return db.query('update login set password=?,user_name=?,mobileno=?,city=?,gender=?,address=? where email_id=?',
    [item.password,item.user_name,item.mobileno,item.city,item.gender,item.address,id],
    callback);
},
getep:function(item,callback){
    return db.query('select * from login where email_id=? And password=?',[item.email_id,item.password],callback);
},
getsignup:function(item,id,callback){
    return db.query('select * from login where email_id=?',[id],callback);
},
// getmail:function(item,callback){
//     return db.query('select email_id from login where email_id=?',[id],callback);
// }

changepassword:function(item,id,callback){
    return db.query('update login set password=? where email_id=?',[item.password,id],callback);
}
}

module.exports=login;