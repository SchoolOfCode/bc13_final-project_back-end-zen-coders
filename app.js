import express from "express"
import morgan from "morgan"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3002

app.use(cors("*"))
app.use(morgan("dev"))

app.use(express.json())

app.listen( PORT, ()=>{console.log(`Server is running on ${PORT}`)})