const { body, validationResult } = require('express-validator');
const registerRules=()=>[
    body("name","name is required").isEmpty(),
    body("lastname","lastname is required").isEmpty(),
  body("mail","mail is required").isEmail(),
    body("password","password is required").isLength({
     min:6,max:20,
    }),]
    const loginRules=()=>[
        body("mail","mail is required").isEmpty(),
        body("password","password must be 6 caracters").isLength({
         min:6,max:20,
        }),
    ];

    const customErrors=(errorArray)=>(errorArray.map(

        (err)=>({"msg":err.msg}) )
         );


const validator=(req,res,next)=>{
    const errors=validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json(customErrors(errors.array()));
}
 else  next();

    };

    module.exports={validator,registerRules,loginRules}