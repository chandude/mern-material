const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/item');

// @route GET api/items
// @desc Gets all items
// @access Public
router.get('/', (req,res)=>{
    Item.find()
        .sort({date:-1})
        .then(items=>res.json(items))
});

// @route POST api/items
// @desc Create a post
// @access Public
router.post('/', (req,res)=>{
    const newItem = new Item({
        name:req.body.name
    });
    newItem.save().then(item=>res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete a item
// @access Public
router.delete('/:id', (req,res)=>{
    Item.findByIdAndRemove(req.params.id)
        .then(()=>res.json({success:true}))
        .catch(err=>res.status(404).json({success:false}));
});

module.exports = router;
