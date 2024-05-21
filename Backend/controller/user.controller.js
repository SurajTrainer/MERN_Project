import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) => {
    try {
        const {fullname , email , password} = req.body;
        const user =await User.findOne({email})
        if (user) {
            return res.status(400).json({message : "User already exists"})
        }

        // Storing password on simple way 
        // const createdUser =  new User({
            //     fullname,
            //     email,
            //     password
            // })

                // now with securing password using bcryptjs
            const hashpassword = await bcryptjs.hash(password, 10)
            const createdUser =  new User({
                fullname,
                email,
                password : hashpassword
            })

        await  createdUser.save();
        res.status(200).json({message : "user created successfully..."})
    } catch (error) {
        console.log("Erorr" + error.message);
        res.status(500).json({message : " internal server errror.."})
    }
}


export const login = async(req , res) => {
  try {
      const {  email , password} = req.body;
      const user = await User.findOne({email})
      const isMatch =await bcryptjs.compare(password , user.password)
      if (!user || !isMatch) {
          return res.status(400).json({message : " invalid username and password.."})
      }else{
          res.status(200).json({message : "Login successfully..." , 
              user : {
                  _id : user._id,
                  fullname : user.fullname,
                  email : user.email
              }
          })
      }
  } catch (error) {
        console.log("error is :" , error);
        res.status(500).json({message : "Server error from internal..."})
  }
}