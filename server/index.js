const express = require("express");
require ("dotenv").config();
const color = require("colors")
const {graphqlHTTP} = require("express-graphql");
const schema = require("./Schema/schema");
const connectDB = require("./config/db")
const cors = require('cors');

const port = process.env.PORT || 5000
const app = express()

connectDB()
app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})