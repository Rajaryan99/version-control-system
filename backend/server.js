import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})