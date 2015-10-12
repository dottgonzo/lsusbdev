var exec=require('promised-exec');
var Promise=require('promise');


function Usb(ports){
  this.deviceports=ports;

}

// USB.prototype.port=function(port){
//   return new Promise(function (resolve, reject) {
//
//   exec('list.sh').then(function(dataraw){
//     var data=JSON.parse(dataraw);
//     for(var i=0;i<data.length;i++){
//     if(data[i].path.split(port).length>1){
//       resolve(data[i]);
//     }
//     }
//   })
//
//     })
//
// };
Usb.prototype.busy=function(){
  var ports=this.deviceports;


};

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
