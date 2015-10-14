var exec=require('promised-exec');
var Promise=require('promise');

module.exports=function(){
  return new Promise(function (resolve, reject) {

    exec(__dirname+'/list.sh').then(function(dataraw){
      var data=JSON.parse(dataraw);
      resolve(data);
    }).catch(function(err){
      reject(err);
    })

  })
}
