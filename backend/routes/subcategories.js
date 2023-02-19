const express = require("express");
// const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Subcategory = require("../models/Subcategories");

//ROUTE:1 Fetch all categories: GET "/api/categories/list". Login NOT required
router.get("/list", async (req, res) => {
  try {
    const subcategories = await Subcategory.find({});
    res.json(subcategories);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


//ROUTE:2 Set Subcategory: POST "/api/subcategories/setcategory". Login required 
// router.post('/admsetcategory',fetchuser, async(req,res)=>{
router.post('/add', async(req,res)=>{
  try{

      // if("6265107b17c6a25656bd3e3b"!==req.user.id)
      // return res.status(401).send({Error:"Not Allowed"});

      let subcategory = await Subcategory.findOne({ name: req.body.name });
      if (subcategory) {
        return res.status(400).json({ error: "Sorry a subcategory with this name already exists" })
      }
      const {name,category,image}=req.body
      const newSubcategory=new Subcategory({name,category,image})
      const saveSubcategory=await newSubcategory.save();
      res.send(saveSubcategory);

  }
  catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
  
  })

  //ROUTE:3 Edit Subcategory: PUT "/api/category/editcategory". Login required 
// router.put('/admeditcategory/:id',fetchuser, async(req,res)=>{
  router.put('/edit/:id', async(req,res)=>{
  try{
      // if("6265107b17c6a25656bd3e3b"!==req.user.id)
      // return res.status(401).send({Error:"Not Allowed"});

      const {name,category,image}=req.body
      //create a new category
      const newSubcategory={};
      if(name)newSubcategory.name=name;
      if(category)newSubcategory.category=category;
      if(image)newSubcategory.image=image;


      //find the category to  edit and update it 
      let subcategory =await Subcategory.findById(req.params.id);
      if(!subcategory)return res.status(404).send("Not Found")

      subcategory= await Subcategory.findByIdAndUpdate(req.params.id,{$set: newSubcategory},{new:true})
      res.json({subcategory});
  
  }
  catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
  
  })

  //ROUTE:4 Delete Subcategory: DELETE "/api/category/deletecategory". Login required 
// router.delete('/admdeletecategory/:id',fetchuser, async(req,res)=>{
  router.delete('/delete/:id', async(req,res)=>{
  try{
      // if("6265107b17c6a25656bd3e3b"!==req.user.id)
      // return res.status(401).send({Error:"Not Allowed"});
      
       //find the note to delete it 
       let subcategory =await Subcategory.findById(req.params.id);
       if(!subcategory)return res.status(404).send("Not Found")

       subcategory = await Subcategory.findByIdAndDelete(req.params.id)
     res.json({ "Success": "Subcategory has been deleted", subcategory: subcategory });
  
  }
  catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
  
  })

  //ROUTE:5 Set Bulk Subcategory: POST "/api/category/setbulkcategory". Login required 
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
          const {name,category,image}=data[i];
          const newSubcategory=new Subcategory({name,category,image})
          await newSubcategory.save();
      }
      res.send({success:"success"})
  }
  catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
  
  })

  
//ROUTE:1 Fetch all categories: GET "/api/categories/list". Login NOT required
router.get("/list/category/:id", async (req, res) => {
    try {
        const categoryid=req.params.id;

      const subcategories = await Subcategory.find({category:categoryid});
      res.json(subcategories);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
///////////////////////////////////////////////category ends here/////////////////////////////

module.exports = router;
