let loginuser= async function(req, res){
    try{

        let data= req.body;
        let{email,password}=data

        if(!Valid(email)){
            return res.status(400).send({status:false,msg:"provide email"})
        }
        if(isValidEmail(email)){
            return res.status(400).send({status:false, msg:"provide currect email"})

        }
         if(!Valid(password)){
            return res.status(400).send({status:false,msg:"provide pasword"})
         }
         if(isValidPassword(password)){
            return res.status(400).send({status:false,msg:"provide currect password"})
         }
         let isUSer= await autherModel.findOne({email:email, password:password});
         if(!isUser){
            return res.status(404).send({status:false, msg:"provide valid user"})
         }

         let token=jwt.Sign(
            {
                userId:isUser._id.toString(),
                project: "company"

            },
            "functionup",
            {experisIn:"120000"}
         );
         res.setHeader("x-api-key",token)
         res.status(200).send({satus:true,msg:"success"})
       
    }catch(err){
        return res.send(500).send({status:true,msg:"false" })
    }
}
module.exports.loginuser=loginuser