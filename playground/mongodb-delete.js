const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
   if (err) {
      return console.log("Unable to connect to MongDB server");
   }
   console.log("Connected to MongoDb server");

   //deleteMany
   db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
     console.log(result);

   });
   //deleteOne
   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
     console.log(result);

   });

   //findOneAndDelete
   db.collection('Todos').findOneAndDelete({completed: false).then((result)=>{
     console.log(result);

   });


   db.collection('Users').deleteMany({name: 'Andrew').then((result)=>{
     console.log(result);

   });


   db.collection('Users').findOneAndDelete({id: new ObjectID('594dd829546eb56ff2a5d9a7')}
 ).then((result)=>{
     console.log(JSON.stringify(result, undefined,2));

   });
 // db.close();
 });
