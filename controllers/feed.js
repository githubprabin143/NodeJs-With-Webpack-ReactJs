var {Product} = require('../models');
exports.getPosts = (req,res,next)=>{
    Product.find({})
    .then(products=>{
        res.status(200).json({
            posts:[
                {
                    title: 'First Post',
                    content: 'this is the first post!!'
                }
            ],
            products:products,
            birthdays:[
                {
                    id:1,
                    dob:"123456"
                },
                {
                    id:2,
                    dob:"qwerrr"
                },
                {
                    id:3,
                    dob:"678990"
                }
            ]
        })
    })
    .catch(err=>{
        next(err)
    })
    
};

exports.createPost = (req,res,next)=>{
    const title = req.body.title;
    const content  = req.body.content;
    //Created post in db
    res.status(201).json({
        message: 'post created successfully!',
        post: {id: new Date().toISOString(),title: title, content: content}
    });
}