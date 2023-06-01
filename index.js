const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))


app.get('/' , (req, res) => {
    const dir = path.join(__dirname, 'public/index.html')
    res.sendFile(dir)
})


app.listen(process.env.PORT, () => {
    console.log('listening')
})