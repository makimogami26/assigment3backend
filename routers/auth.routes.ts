import { Router, Request, Response } from 'express'
import IRoutes from './IRoutes'
import authController from '../controllers/auth.controllers'
import authJwt from '../middlewares/AuthJwt'

class Auth {
   router: Router
   constructor() {
      this.router = Router()
      this.register()
      this.login()
   }
   public register(): void{
      this.router.post('/register', authController.register)
   }

   public login(): void{
      this.router.post('/login', authController.login)
   }
}

export default new Auth().router