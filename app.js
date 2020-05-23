const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('',(req, res) => {
    res.send('<h1>success</h1>')
    console.log('success')
})

app.listen(port,()=> {
    console.log('port ' + port)
})