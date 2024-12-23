const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
// 
app.use(cors())

const users = [
  {id: 1, name: 'mojahid', address: 'illishia'},
  {id: 2, name: 'abir', address: 'demoshia'},
  {id: 3, name: 'mahi', address: 'dorbeskata'},
]

app.get('/', (req, res) => {
  res.send('This is my first server')
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.post('/users', (req, res) => {
  console.log('post api hiting')
  console.log(res.body)
  
})

app.listen(port, () => {
  console.log(` server is runing on PORT  ${port}`)
})
 