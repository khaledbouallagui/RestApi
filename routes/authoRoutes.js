const express =require('express');
const router=express.Router();
const {register,login,getAuthUser}=require ('../controllers/autoControllers');
const {registerRules,validator}=require('../middlewars/bodyValidator')
const isAuth=require('../middlewars/IsAuth')
  //post
   //registre un user
  // access public 
router.post ('/register',registerRules(),validator,register) 
  //post
   //log un user
  // access public 
  router.post('/login',login)
   //get
   //get auto user
  // access private : client login
  router.get('/me',isAuth,getAuthUser)
   


module.exports=router