const User = require("../models/register")

// const PrivUser = require("./models/PrivateUser");
// const { validationResult } = require("express-validator")
const { encrypt, compare } = require("../helpers/bcrypt")


const newAccount = async(req, res) => {

    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {



    //     req.flash("mensajes", errors.array())



    //     return res.redirect("register")
    // }




    const { email, name, userName, password } = req.body;

    console.log(req.body)

    try {

        let user = await User.findOne({ email: email })
        if (user) throw new Error('ya existe el ususario');


        const passWordawait = await encrypt(password);


        user = await new User({ email: email, name: name, userName: userName, password: passWordawait, tokenconfirm: "tretre" });


        await user.save();


        // req.flash("mensajes", [{ msg: "Revisa tu correo electronico y valida cuenta" }])


        res.redirect("/")



    } catch (error) {



        // req.flash("mensajes", [{ msg: error.message }])
        console.log(error)

        console.log("paso algo malo ")

        return res.redirect("/register")



    }


}




const confirmAcc = async(req, res) => {

    const { token } = req.params

    try {

        const user = await User.findOne({ tokenconfirm: token });
        if (!user) throw new Error("no existe ese Usuario")

        user.confirm = true
        user.tokenconfirm = null

        await user.save()


        res.redirect("/")

    } catch (error) {


        console.log(error)
            // req.flash("mensajes", [{ msg: error.message }])
        return res.render("/")

    }


}

const loginAccount = async(req, res) => {

    // const errors = validationResult(req);


    // if(!errors.isEmpty()) {

    //     req.flash("mensajes", errors.array())

    //     return res.redirect("/login")
    // }



    const { email, password } = req.body

    try {

        const user = await User.findOne({ email: email });
        if (!user) throw new Error("El correo electronico que has introducido no esta conectado a una cuenta")

        if (!user.confirm) throw new Error("falta confirmar cuenta")

        await new User({ email: email, password: password });

        // const passWordawait = await encrypt(password); 


        if ((!await compare(password, user.password))) throw new Error("contrasena incorrecta");





        //me esta creando la sesion de usuario atraves de passport
        // req.login(user, function(err){

        //     if(err) throw new Error("error al crear la sesion")
        // })

        res.redirect("/profile")



    } catch (error) {

        console.log(error)

        // req.flash("mensajes", [{ msg: error.message }])
        return res.redirect("login")


    }




}





module.exports = {

    newAccount,
    confirmAcc,
    loginAccount


}