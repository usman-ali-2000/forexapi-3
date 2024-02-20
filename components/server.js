require('./conn');
const express = require('express');
const app = express();
const cors = require("cors");
const uploadRegister = require('./register');
const uploadTopic = require('./topic');
const uploadSubTopic = require('./subtopic')
const uploadDetail = require('./detail');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API...' })
  })

  
 app.post("/register", async (req,res)=>{
    console.log(req.body);
    const user = new uploadRegister(req.body);
  await  user.save().then(()=>{
      res.status(201).send(user);
    }).catch((e)=>{
      res.status(400).send(e);
    })
  
  })

  app.get("/register", async (req,res)=>{
   
    try{ const user1 = await uploadRegister.find().sort({_id:-1});
     
       res.status(201).send(user1);
   }catch(e){
       res.status(400).send(e);
     }
   
   });

  
app.delete("/register/:id", async (req, res)=>{
  try{

    const user = await uploadRegister.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send("Data not found");
    }

if(!req.params.id){
      res.status(201).send();
    }
  }catch(e){
     res.status(400).send(e);
  }
})


app.patch("/register/:id", async (req, res)=>{
    try{
      const _id = req.params.id;
      const updateCategory = await uploadRegister.findByIdAndUpdate(_id, req.body,{
      new: true
      });
      res.send(updateCategory);
    }
    catch(e)
    {
      res.status(400).send(e);  
    }
  });

  
 app.post("/topic", async (req,res)=>{
    console.log(req.body);
    const user = new uploadTopic(req.body);
  await  user.save().then(()=>{
      res.status(201).send(user);
    }).catch((e)=>{
      res.status(400).send(e);
    })
  
  })

  app.get("/topic", async (req,res)=>{
   
    try{ const user1 = await uploadTopic.find().sort({_id:-1});
     
       res.status(201).send(user1);
   }catch(e){
       res.status(400).send(e);
     }
   
   });

  
app.delete("/topic/:id", async (req, res)=>{
  try{

    const user = await uploadTopic.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send("Data not found");
    }

if(!req.params.id){
      res.status(201).send();
    }
  }catch(e){
     res.status(400).send(e);
  }
})

app.post("/subtopic", async (req,res)=>{
    console.log(req.body);
    const user = new uploadSubTopic(req.body);
       await  user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
      res.status(400).send(e);
    })
  
  })

  app.get("/subtopic", async (req,res)=>{
   
    try{ const user1 = await uploadSubTopic.find().sort({_id:-1});
     
       res.status(201).send(user1);
   }catch(e){
       res.status(400).send(e);
     }
   
   });

  
app.delete("/subtopic/:id", async (req, res)=>{
  try{

    const user = await uploadSubTopic.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send("Data not found");
    }

if(!req.params.id){
      res.status(201).send();
    }
  }catch(e){
     res.status(400).send(e);
  }
})

app.delete("/subtopicdel/:tid", async (req, res)=>{
    try{
  
      const user = await uploadSubTopic.deleteMany({tid: req.params.tid});
  
      if (!user) {
        return res.status(404).send("Data not found");
      }
  
  if(!req.params.id){
        res.status(201).send();
      }
    }catch(e){
       res.status(400).send(e);
    }
  })

app.post("/detail", async (req,res)=>{
    console.log(req.body);
    const user = new uploadDetail(req.body);
  await  user.save().then(()=>{
      res.status(201).send(user);
    }).catch((e)=>{
      res.status(400).send(e);
    })
  
  })

  app.get("/detail", async (req,res)=>{
   
    try{ const user1 = await uploadDetail.find().sort({_id:-1});
     
       res.status(201).send(user1);
   }catch(e){
       res.status(400).send(e);
     }
   });

  
app.delete("/detail/:subid", async (req, res)=>{
  try{

    const user = await uploadDetail.deleteMany({subid: req.params.subid});

    if (!user) {
      return res.status(404).send("Data not found");
    }
if(!req.params.id){
      res.status(201).send();
    }
  }catch(e){
     res.status(400).send(e);
  }
})


app.delete("/detail2/:tid", async (req, res)=>{
    try{
  
      const user = await uploadDetail.deleteMany({tid: req.params.tid});
  
      if (!user) {
        return res.status(404).send("Data not found");
      }
  
  if(!req.params.id){
        res.status(201).send();
      }
    }catch(e){
       res.status(400).send(e);
    }
  })
  

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });