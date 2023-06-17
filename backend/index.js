const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({ limit: "10mb" }))

const PORT = process.env.PORT || 8080
//mongodb connection
console.log(process.env.MONGODB_URL);
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connnect to Database"))
    .catch((err) => console.log(err))

//schema

// user section

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,
})

//
const userModel = mongoose.model("user", userSchema)

//api
app.get("/", (req, res) => {
    res.send("Sever is running")
})

//sign up
app.post("/signup", async (req, res) => {
    console.log(req.body);
    const { email } = req.body;

    try {
        const result = await userModel.findOne({ email: email });
        console.log(result);

        if (result) {
            res.send({ message: "Email id is already registered", alert: false });
        } else {
            const data = userModel(req.body);
            await data.save();
            res.send({ message: "Successfully signed up", alert: true });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "An error occurred" });
    }
});

//api login
app.post("/login", async (req, res) => {
    console.log(req.body);
    const { email } = req.body;

    try {
        const result = await userModel.findOne({ email: email })
        if (result) {
            const datasend = {
                _id: result._id,
                firstName: result.lastName,
                lastName: result.email,
                email: result.email,
                image: result.image
            }
            console.log(result);
            res.send({ message: "Login is successfully", alert: true, data: datasend })
        } else {
            res.send({ message: "Email is not available, please sign up", alert: false })
        }
    } catch (error) {
        console.log(err);
        res.status(500).send({ message: "An error occurred" });
    }
})

//product section

const schemaProduct = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String,
});
const productModel = mongoose.model("product", schemaProduct)

app.post("/uploadProduct", async (req, res) => {
    console.log(req.body);
    const data = await productModel(req.body)
    const datasave = await data.save()
    res.send({ message: "Upload successfully" })
})

app.listen(PORT, () => console.log("Sever is running at port : " + PORT))