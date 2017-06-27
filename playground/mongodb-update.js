const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
   if (err) {
      return console.log("Unable to connect to MongDB server");
   }
   console.log("Connected to MongoDb server");

  //  db.collection('Todos').findOneAndUpdate({
  //    _id: new ObjectID('594dcbd03f21686d81a83fb8')
  //  }, {
  //    $set : {
  //      completed : true
  //    }
  //  }, {
  //    returnOriginal : false
  //  }).then ((result)=>{
  //    console.log(result);
   //
  //  })


   db.collection('Users').findOneAndUpdate({
     _id: new ObjectID('59506689672b896a43542521')
   }, {
     $set : {
       name : 'Rizwan'
   },
   $inc :{
     age : 1
   }
 }, {
      returnOriginal : false
   }).then ((result)=>{
     console.log(result);

   });


 // db.close();
 });
