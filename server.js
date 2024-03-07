const express = require('express')
const mongoose = require('mongoose')
const server_config = require('./configs/server.config')
const db_config = require("./configs/db.config")
app= express()

app.use(express.json())

mongoose.connect(db_config.URI)//where to connect
const db = mongoose.connection//connection order

db.on('error',()=>{
    console.log("error while connecting to the database")
})
db.once('open',()=>{
    console.log("successfully connected to the database")
})

require("./routes/db.route")(app)

app.listen(server_config.PORT,()=>{
    console.log("server is listening on port ", server_config.PORT)
})