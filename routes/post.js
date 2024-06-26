const express =require('express');
const router=express.Router();
const Post=require('../model/post');
///get posts
router.get('/', async (req,res)=>{
    try{
        const posts= await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});

///submit a post
router.post('/', async (req,res)=>{
    const post=new Post({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            tel: req.body.tel,
            ville: req.body.ville,
            Type_de_sang: req.body.Type_de_sang,
            temps_dappel: req.body.temps_dappel
    });
    try{
        const savedPost= await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }
});
///specific post
router.get('/:postId', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

///delete

router.delete('/:postId', async (req,res)=>{
    try{
        const removePost = await Post.remove({_id:req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message:err});
    }
});

///Update post

router.patch('/:postId', async (req,res)=>{
    try{
        const updatePost = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{nom:req.body.nom}});
        res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }
});



module.exports=router;