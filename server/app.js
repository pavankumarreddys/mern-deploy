const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
require('dotenv').config();

const corsOptions = {
    origin:"http://localhost:3000"
}

// middleware
app.use(express.json())
app.use(cors(corsOptions))


// connect mongoDb

mongoose.connect(process.env.MONGODB_URI).then(()=>{
const PORT = process.env.PORT || 8000
app.listen(PORT, () =>{
    console.log(`PORT running ${PORT}`)
})
}).catch(err =>{
    console.log(err)
})


//route

app.get('/', (req,res)=>{
    res.status(201).json({message:"Connected to backend Store"})
})