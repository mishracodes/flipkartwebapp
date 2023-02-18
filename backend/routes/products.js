const express = require('express');
const router = express.Router();
const Products = require('../models/Products')


// function printStudents(pageNumber, nPerPage) {
//   print( "Page: " + pageNumber );
//   db.students.find()
//              .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
//              .limit( nPerPage )
//              .forEach( student => {
//                print( student.name );
//              } );
// }


//ROUTE:1 Fetch all Products: GET "/api/products/list". Login NOT required
router.get("/list/:page", async (req, res) => {
  let pageNumber=req.params.page
  let nPerPage=20
  try {
    // const products_total = await Products.find({})
    const products = await Products.find({})
                                   .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
                                   .limit( nPerPage );


    res.json(
        {"page":pageNumber,
          results:products,
          "total_results": 19996,
          "total_pages": Math.round(19996/20)
        });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


//ROUTE:2 Set Product: POST "/api/product/setproduct". Login required 
// router.post('/admsetproduct',fetchuser, async(req,res)=>{
router.post('/add', async (req, res) => {
  try {

    // if("6265107b17c6a25656bd3e3b"!==req.user.id)
    // return res.status(401).send({Error:"Not Allowed"});

    let product = await Products.findOne({ name: req.body.name });
    if (product) {
      return res.status(400).json({ error: "Sorry a product with this name already exists" })
    }



    const { name, subcategory, price, discountPrice, image, fAssured, rate, count, brand, specifications, description } = req.body
    const newProduct = new Products({ name, subcategory, price, discountPrice, image, fAssured, rate, count, brand, specifications, description })
    const saveProduct = await newProduct.save();
    res.send(saveProduct);

  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

//ROUTE:3 Edit Product: PUT "/api/product/editproduct". Login required 
// router.put('/admeditproduct/:id',fetchuser, async(req,res)=>{
router.put('/edit/:id', async (req, res) => {
  try {
    // if("6265107b17c6a25656bd3e3b"!==req.user.id)
    // return res.status(401).send({Error:"Not Allowed"});

    const { name, subcategory, price, discountPrice, image, fAssured, rate, count, brand, specifications, description } = req.body
    //create a new product
    const newProduct = {};
    if (name) newProduct.name = name;
    if (subcategory) newProduct.subcategory = subcategory;
    if (price) newProduct.price = price;
    if (discountPrice) newProduct.discountPrice = discountPrice;
    if (image) newProduct.image = image;
    if (fAssured) newProduct.fAssured = fAssured;
    if (rate) newProduct.rate = rate;
    if (count) newProduct.count = count;
    if (brand) newProduct.brand = brand;
    if (specifications) newProduct.specifications = specifications;
    if (description) newProduct.description = description;


    //find the product to  edit and update it 
    let product = await Products.findById(req.params.id);
    if (!product) return res.status(404).send("Not Found")

    product = await Products.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
    res.json({ product });

  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

//ROUTE:4 Delete Product: DELETE "/api/product/deleteproduct". Login required 
// router.delete('/admdeleteproduct/:id',fetchuser, async(req,res)=>{
router.delete('/delete/:id', async (req, res) => {
  try {
    // if("6265107b17c6a25656bd3e3b"!==req.user.id)
    // return res.status(401).send({Error:"Not Allowed"});

    //find the note to delete it 
    let product = await Products.findById(req.params.id);
    if (!product) return res.status(404).send("Not Found")

    product = await Products.findByIdAndDelete(req.params.id)
    res.json({ "Success": "Product has been deleted", product: product });

  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

//ROUTE:5 Set Bulk Products: POST "/api/products/setbulkproduct". Login required 
// router.post('/admsetbulkproduct',fetchuser, async(req,res)=>{
router.post('/addbulk', async (req, res) => {
  // console.log(req);

  try {
    // if("6265107b17c6a25656bd3e3b"!==req.user.id)
    // return res.status(401).send({Error:"Not Allowed"});
    //check if product already exist TODO
    // {
    //     "data":[
    //         {},{},{}
    //     ]
    // }
    let data = await req.body.data;
    for (let i in data) {
      console.log(data[i]);
      
      const {  name, subcategory, price, discountPrice, image, fAssured, rate, count, brand, specifications, description   } = data[i];
      const newProduct = new Products({  name, subcategory, price, discountPrice, image, fAssured, rate, count, brand, specifications, description   })
      await newProduct.save();
    }
    res.send({ success: "success" })
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})
///////////////////////////////////////////////Products ends here/////////////////////////////


module.exports = router