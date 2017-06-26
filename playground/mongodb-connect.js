const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
   if (err) {
      return console.log("Unable to connect to MongDB server");
   }
   console.log("Connected to MongoDb server");

  //  db.collection('Todos').insertOne({
  //    text : 'Something to do',
  //    completed: false
  //  }, (err, result)=>{
  //    if (err){
  //      return console.log("Unable to insert todos", err);
  //    }
  //    console.log(JSON.stringify(result.ops, undefined, 2));
  //  });

   db.collection('Users').insertOne({
     name : 'Rizwan',
     age: 27,
     location: 'Gulshan'
   }, (err, result)=>{
     if (err){
       return console.log("Unable to insert todos", err);
     }
     console.log(JSON.stringify(result.ops, undefined, 2));
   });
 db.close();
 });
