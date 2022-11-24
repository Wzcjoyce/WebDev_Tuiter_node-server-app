import express from 'express'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";


const app = express()

const DbUrl = 'mongodb+srv://wzcjoyce:Wzc911101joyce0915@cluster0.4xfw5pl.mongodb.net/?retryWrites=true&w=majority';
//const DbUrl = 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(DbUrl)
    .then(() => console.log('DB started'))
    .catch(() => () => console.log(error.message));


app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);
