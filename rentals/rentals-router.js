const router = require('express').Router()
const express = require('express')
const model = require('./rentals-model')

//GET all posts 
router.get('/', (req,res) =>{
    model.find()
    .then(posts=>{
        res.status(200).json({notification:'Information of posts are successfully retrieved', postsdata: posts})
    })
    .catch(err=>{
        res.status(500).json({notification:'Failed to retrieve information of posts', error: err.message})
    })
})

//GET posts by id
router.get('/:id', (req,res) =>{
    const id = req.params.id;
    model
      .findById(id, "posts")
      .then((post) =>
        res.status(200).json({
          message: "This is information of post with specific ID",
          post,
        })
      )
      .catch((err) => res.status(500).json({ status: 'Failed to retrieve information of post BY ID', errorMess: err.message }));
})

//GET posts by users id
// router.get('/users/:id/posts', (req,res)=>{

// })

// //POST a new post
router.post('/', (req,res)=>{
    let newPost = req.body;
  model.insert(newPost).then(newPost=>{
      res.status(200).json({notification :"New Post is updated", newPost: newPost})
  })
  .catch(err=>{
      res.status(500).json({notification: 'Failed To Add New Post', postSent: newPost, errorMess:err.message})
  })
})


//UPDATE a post by id
router.put('/:id', (req,res)=>{
    const { id } = req.params;
    const changes = req.body;
  
    model
      .findById(id, "posts")
      .then((post) => {
        if (post) {
          model.update(changes, id).then((updated) => {
            res
              .status(201)
              .json({
                success: "Post information is updated",
                ...changes,
                id: post.id,
                UpdatingInformation: updated,
              });
          });
        } else {
          res
            .status(401)
            .json({
              message: `Could Not Find Object With ID: ${id}`,
              errorMess: err.message,
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ message: "Failed To Update Project", errormessage: err });
      });
})

//DELETE a post by id
router.delete('/:id', (req,res)=>{
    model.remove(req.params.id)
    .then((num) => {
      if (num === 1) {
        res.status(200).json({ succesmessage: "This post is successfully deleted"}).end();
      } else {
        res.status(404).json({ message: "Failed to delete the post" }).end();
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error in delete post", error: err.message });
    });
})



module.exports = router;