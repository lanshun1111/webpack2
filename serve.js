let express = require('express')

let app = express()

app.get('/api/user',(req,res)=>{
 console.log(res)
 res.json({
   name:'lanlide41'
 })
})

app.listen('3000')