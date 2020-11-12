var mysql=require('mysql');
                    var conexion=mysql.createConnection({
                    host:'bprbeudfwg7eeipqbp9t-mysql.services.clever-cloud.com',
                    user:'urappmxol0gahuzf',
                    password:'piXeRzrY5CoTJ351xaU4',
                    database:'bprbeudfwg7eeipqbp9t'
                     });
                    conexion.connect(function (error){
                   if (error)
                   console.log('Problemas de conexion con mysql');
                   else
                      console.log('se inicio conexion');
                   });
                   module.exports=conexion;
                   