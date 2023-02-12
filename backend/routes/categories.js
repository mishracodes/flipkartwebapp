const express = require("express");
// const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Category = require("../models/Categories");

//ROUTE:1 Fetch all categories: GET "/api/categories/list". Login NOT required
router.get("/list", async (req, res) => {
  try {
    const categoryies = await Category.find({});
    res.json(categoryies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


//ROUTE:2 Set Category: POST "/api/category/setcategory". Login required 
// router.post('/admsetcategory',fetchuser, async(req,res)=>{
router.post('/add', async(req,res)=>{
  try{

      // if("6265107b17c6a25656bd3e3b"!==req.user.id)
      // return res.status(401).send({Error:"Not Allowed"});

      let catgerory = await Category.findOne({ name: req.body.name });
      if (catgerory) {
        return res.status(400).json({ error: "Sorry a category with this name already exists" })
      }
      const {name,image}=req.body
      const newCategory=new Category({name,image})
      const saveCategory=await newCategory.save();
      res.send(saveCategory);

  }
  catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
  
  })

  //ROUTE:3 Edit Category: PUT "/api/category/editcategory". Login required 
// router.put('/admeditcategory/:id',fetchuser, async(req,res)=>{
  router.put('/edit/:id', async(req,res)=>{
  try{
      // if("6265107b17c6a25656bd3e3b"!==req.user.id)
      // return res.status(401).send({Error:"Not Allowed"});

      const {name,image}=req.body
      //create a new category
      const newCategory={};
      if(name)newCategory.name=name;
      if(image)newCategory.image=image;


      //find the category to  edit and update it 
      let category =await Category.findById(req.params.id);
      if(!category)return res.status(404).send("Not Found")

      category= await Category.findByIdAndUpdate(req.params.id,{$set: newCategory},{new:true})
      res.json({category});
  
  }
  catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
  
  })

  //ROUTE:4 Delete Category: DELETE "/api/category/deletecategory". Login required 
// router.delete('/admdeletecategory/:id',fetchuser, async(req,res)=>{
  router.delete('/delete/:id', async(req,res)=>{
  try{
      // if("6265107b17c6a25656bd3e3b"!==req.user.id)
      // return res.status(401).send({Error:"Not Allowed"});
      
       //find the note to delete it 
       let category =await Category.findById(req.params.id);
       if(!category)return res.status(404).send("Not Found")

       category = await Category.findByIdAndDelete(req.params.id)
     res.json({ "Success": "Category has been deleted", category: category });
  
  }
  catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
  
  })

  //ROUTE:5 Set Bulk Category: POST "/api/category/setbulkcategory". Login required 
  // router.post('/admsetbulkcategory',fetchuser, async(req,res)=>{
router.post('/addbulk', async(req,res)=>{
  try{
      // if("6265107b17c6a25656bd3e3b"!==req.user.id)
      // return res.status(401).send({Error:"Not Allowed"});
      //check if category already exist TODO
      // {
      //     "data":[
      //         {},{},{}
      //     ]
      // }
       let  data= await req.body.data;
      for(let i in data){
          const {name,image}=data[i];
          const newCategory=new Category({name,image})
          await newCategory.save();
      }
      res.send({success:"success"})
  }
  catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
  
  })
///////////////////////////////////////////////category ends here/////////////////////////////

module.exports = router;
