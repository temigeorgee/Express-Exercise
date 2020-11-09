const express = require('express');
const router = express.Router();

const items = [];
var id = 1;

//get all items
router.get("/items",(req, res, next) => {
    return res.send(items)
})

//get a single item
router.get("/items/:id",(req, res, next) =>{
    const item = items.find( val => val.id === Number(req.params.id));
    return res.send(item)
})

//add items
router.post("/items",(req, res, next) =>{
    items.push({
        name: req.body.name,
        price: req.body.price,
        id: id++
    });
    return res.send("Successfully Created");
})

//patch items
router.patch("/items/:id",(req, res, next) =>{
    const item = items.find( val => val.id === Number(req.params.id))
    item.name = req.body.name;
    item.price = req.body.price;
    return res.send("Successfully Updated");
})

//Delete items
router.delete("/items/:id",(req, res, next) =>{
    const itemIndex = items.findIndex(val => val.id === Number(req.params.id))
    items.splice(itemIndex, 1);
    return res.send("Successfully Deleted");
})

module.exports = router
