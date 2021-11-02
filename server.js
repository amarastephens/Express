const express = require("express")
const { dirname } = require("path")
let app = express()
const path = require("path")

app.get('/', (req, res, next) => {
    res.send("Hello from the web server side!")
})

app.listen(3000)


app.use(express.static(path.join(__dirname,"../public")))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html" ))
// })

// app.get('/css/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/css/styles.css"))
// })


app.use((req, res, next) => {
console.log(req.url)
    next()
})

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
  });