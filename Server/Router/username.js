const router = require('express').Router();
const fs = require('fs');
var Buffer = require('buffer/').Buffer


const userItem = require('../models/Sign');
var multer = require('multer');

const storage =multer.diskStorage({
      destination:(req,file,cb)=>{
            if (file.fieldname== "Profileimg") {
                  cb(null,'./uploads/Profile');
                  
            } else if (file.fieldname == "Coverimg") {
                  cb(null,'./uploads/coverpic');                 
            }
                
      },
      filename: (req,file,cb)=>{
            if (file.fieldname== "Profileimg") {
                cb(null,file.fieldname+Date.now()+file.originalname)
            }else if(file.fieldname== "Coverimg"){
                  cb(null, file.fieldname+Date.now()+file.originalname);  
            }
            
      }
})
const upload =multer({storage:storage
  
});

var mutipleUpload = upload.fields([{name: 'Profileimg',maxCount:  1},{name:'Coverimg',maxCount:  1}])

router.post('/api/username',mutipleUpload,async( req, res )=>{
      

      console.log("post is working");
      try {
        var img = fs.readFileSync(req.files.Profileimg[0].path);
        var img2 = fs.readFileSync(req.files.Coverimg[0].path);
        var encode_PI = img.toString();
        var encode_CI = img2.toString('base64');
     
        var Profileimg ={
            data:  new Buffer(encode_PI),
            contentType:"image/png"
            }
        var CoveImg ={
            data:  new Buffer(encode_CI),
            contentType:"image/png"
            }
            console.log(typeof Profileimg);
      
        console.log(Profileimg);
        
        const newUser = new userItem({
                                Name: req.body.fullName,
                                Age: req.body.age,
                                Birth: req.body.birth,
                                Profileimg: Profileimg,                      
                                Coverimg: CoveImg,                       
                                Email: req.body.username,
                                Password: req.body.password
  
                      })
                      console.log("newuser"+newUser);
                const save = await newUser.save()
                .then((res)=>{
                    console.log('image is saved')
                })
                res.status(200).json("Added Succefully");
                              
      } catch (error) {
                res.json(error);                    
      }
})























router.post("/api/user", async (req,res)=>{
      try {
            const reqEmail = req.body.Email;
            const reqPassword = req.body.Password;
            const item = await userItem.findOne({Email: reqEmail});
            console.log(reqPassword);
            console.log("item"+item.Password);
            if (reqPassword===item.Password){
                  console.log("yes");
                  res.json("working");
                  res.json(Email);
            }else{
                  console.log("no");
            }
      } catch (error) {
          console.log(error);  
      }
})
// Get all iteam

router.get('/api/usernames' ,async(req,res)=>{
            
          try {
                const allprofileItem = await userItem.find({});
                res.status(200).json(allprofileItem);   
          } catch (error) {
                    res.json(error);
          }
})

//Specific item get
router.get('/api/usernames/:id' , async( req,res )=>{

          try {
                   const specificItem = await userItem.findById(req.params.id);
                   res.status(200).json(specificItem)
          } catch (error) {               
                    res.json(error);
          }
})

// Delete paticular item
router.delete('/api/username/:id' , async( req,res )=>{
      console.log(req.params.id);
          try {
                   const deleteItem = await userItem.findByIdAndRemove(req.params.id);
                   res.status(200).json(deleteItem);
          } catch (error) {               
                    res.json(error);
          }
})
// Delete all item 
router.delete('/api/username/e' , async( req,res )=>{
      
      if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            try {
                  const deleteAll = await userItem.deleteMany(req.params.id);
                  res.status(200).json("all item is detete");

         } catch (error) {               
                   res.json(error);
         }
          }
          
})

module.exports = router;


