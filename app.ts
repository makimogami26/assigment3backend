import { Application, Request, Response } from 'express'
import express from 'express'
import Routes from './routers/index'
import MongoDB from './configs/db'
import dotenv from 'dotenv'


class App {
   public app: Application
   constructor() {
      this.app = express()
      this.plugin()
      this.route()
      dotenv.config()
   }

   protected plugin(): void{
      this.app.use(express.urlencoded({extended: true}))
      MongoDB()
   }

   protected route(): void{
      this.app.use(Routes)
   }
}

// const port = process.env.PORT
const app = new App().app
app.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}`))
