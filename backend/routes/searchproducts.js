const express = require("express");
// const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Products = require("../models/Products");

//ROUTE:1 Fetch all categories: GET "/api/categories/list". Login NOT required
router.get("/:searchtext/:page", async (req, res) => {
    const searchtext=req.params.searchtext
    const findsubcategory=req.params.searchtext.slice(0,1).toUpperCase()+req.params.searchtext.slice(1)

    let pageNumber=req.params.page
    let nPerPage=20
    try {
      // const products_total = await Products.find({}) 
      const products = await Products.find({ $or: [ { name: { $regex: '.*' + searchtext + '.*' } }, { subcategory: { $regex: '.*' + findsubcategory + '.*' } } ] })
                                     .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
                                     .limit( nPerPage );
      const docCount=await Products.find({ $or: [ { name: { $regex: '.*' + searchtext + '.*' } }, { subcategory: { $regex: '.*' + findsubcategory + '.*' } } ] }).countDocuments({})
      res.json(  {"page":pageNumber,
      results:products,
      "total_results": docCount,
      "total_pages": Math.round(docCount/20)
    })
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
});


  
///////////////////////////////////////////////searchproducts ends here/////////////////////////////

module.exports = router;
