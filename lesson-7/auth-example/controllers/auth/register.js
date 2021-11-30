const {Conflict} = require("http-errors");
// const bcrypt = require("bcryptjs");

const {User} = require("../../models");

const register = async(req, res)=> {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Conflict(`User with ${email} already exist`)
    }
    const newUser = new User({name, email});
    /*
    newUser = {
        name, 
        email,
        setPassword(password){
            this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        }
    }
    */
    newUser.setPassword(password);
    /*
    newUser = {
        name, 
        email,
        password,
        setPassword(password){
            this.passord = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        }
    }
    */
    newUser.save();
    // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // const result = await User.create({name, email, password: hashPassword});
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                email,
                name
            }
        }
    });
}

module.exports = register;