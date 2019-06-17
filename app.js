const express=require('express');
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
const fileUpload=require('express-fileupload')
app.use(fileUpload())
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/file.html')

})
app.post('/',(req,res)=>{
req.files.file.mv("./uploads/"+req.files.file.name,(err)=>{
    if(err)
    console.log(err);
  })
})
app.listen(3000,()=>{
  console.log("server started!");
})
