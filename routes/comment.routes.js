// const express = require('express');
// const router = express.Router();
// const Recipe =  require('../models/Recipe.model');
// const Comment = require('../models/Comment.model')
// const {isLoggedIn} = require("../middleware/index")
// const { isOwner } = require('../middleware/index');
// const { isNotOwner } = require('../middleware/index');

// router.get('/:id/comment', isLoggedIn, isNotOwner, (req, res, next) => {

//   const {id} = req.params

// Recipe.findById(id)

//   .then(foundRecipe => res.render('recipes/comment', foundRecipe))
//   .catch(err => console.log(err))

// });

// router.post('/:recipeId/comment', (req, res, next) => {

//   const {comment} = req.body
//   console.log(comment)
//   const userId = req.session.currentUser._id
//   const {recipeId} = req.params
//   console.log("USER ID", userId)

//   if (!comment) {
//       res.render('/:id/comment', { errorMessage: 'Please write a comment before sending the form.' });
//       return;
//     }

//     Comment.create({user: userId, comment})
//       .then((newComment) => {
//         console.log(recipeId)
//           Recipe.findById(recipeId)
          
//               .then((commentedRecipe) => {
//                   commentedRecipe.comments.push(newComment._id) 
//                   commentedRecipe.save()
//               })
//               .catch(err => console.log(err))
//       })
//       .then(() => res.redirect('/recipes'))
//       .catch(err => console.log(err))

// });



//   module.exports = router;
  


































// const { isOwnComment } = require('../middlewares/js');
// const Comment = require('../models/Comment.model');
// const Recipe = require('../models/Recipe.model');

// const router = require('express').Router();

// router.get('/:id/comment/add', (req, res, next) => {

//     let userLoggedIn;
//     req.session.loggedinUser ? userLoggedIn = true : userLoggedIn = false;

//     const { recipeId } = req.params;

//     res.render('comment/create', { userLoggedIn, recipeId } );
// });

// router.post('/recipes/:recipeId/comment/add', (req, res, next) => {
    // const { recipeId } = req.params;
    // const { comment } = req.body;
    // const { userId } = req.session.loggedinUser;
    // console.log(userId)

//     Comment.create({ user: userId, comment })
//         .then(comment => {
//             Recipe.findById(recipeId )
//                 .then(recipe => {
//                     recipe.comment.push(comment._id);
//                     recipe.save();
//                 })
//                 .catch(err => console.log(err))
//         })
//         .then(() => res.redirect(`/recipe/${recipeId}/view`))
//         .catch(err => console.log(err));
// });








// ce potribno
// router.get('/:recipeId/comment/:commentId/edit', isOwner, (req, res, next) => {

//     let userLoggedIn;
//     req.session.loggedinUser ? userLoggedIn = true : userLoggedIn = false;

//     const { recipeId, commentId } = req.params;

//     Comments.findById( commentId )
//         .then(comment => res.render('comment/edit', { userLoggedIn, recipeId, comment }))
//         .catch(err => console.log(err));

// });

// router.post('/recipes/:recipeId/comment/:commentId/edit', isOwnComment, (req, res, next) => {
//     const { recipeId, commentId } = req.params;
//     const { comment } = req.body;

//     Comment.findById( commentId )
//         .then(comment => {
//             comment.comment = comment;
//             comment.save();
//         })
//         .then(() => res.redirect(`/recipes/${ recipeId }/view`))
//         .catch(err => console.log(err));

// });

// router.post('//:recipeId/comment/:commentId/delete', isOwnComment, (req, res, next) => {
//     const { recipeId, commentId } = req.params;

//     Comment.findByIdAndDelete( commentId )
//         .then(() => {
//             Recipe.findByIdAndUpdate( recipeId, { $pull: { comment: commentId }} )
//                 .catch(err => console.log(err));
//         })
//         .then(() => res.redirect(`/recipes/${ recipeId }/view`))
//         .catch(err => console.log(err));
// });


// module.exports = router;
