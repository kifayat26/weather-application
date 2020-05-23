const express = require('express')

const app = express()

app.get('',(req, res) => {
    res.send('<h1>success</h1>')
    console.log('success')
})

app.listen(3000,()=> {
    console.log('port ' + 3000)
})