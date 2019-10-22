const express = require('express')
const app = express()
app.get('/qy/user', (req, res) => {
 console.log(req.url)
 res.json({
   name: 'qiqingfu',
   age: 21,
   job: 'web',
   city: 'QingDao'
 })
})
app.listen(3000,'localhost', () => {
 console.warn('port open success: 3000')
})

app.listen(3000,'localhost', () => {
  console.warn('port open success: 3000')
})