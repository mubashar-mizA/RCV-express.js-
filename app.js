import express from "express";
const app = express()
import myWebRoutes from './routes/web.route.js'

// serving static files
app.use(express.static('public'))

// defining port 
const port = 1112

app.set('view engine', 'ejs')

// app.use('/student', studentRoutes)

app.use('/', myWebRoutes)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
