import IRoutes from '../routers/IRoutes'
import userController from '../controllers/userController'
import authJwt from '../middlewares/AuthJwt'
import { Router } from 'express'

class userRoute {
   router: Router
   constructor() {
      this.router = Router()
      this.auth()
      this.getAll()
      this.detailUser()
      this.updateUser()
      this.deleteUser()
   }

   public auth(): void {
      this.router.use(authJwt.authentication)
   }

   public getAll(): void{
      this.router.get('/', userController.getAll)
   }

   public detailUser(): void{
      this.router.get('/detail', userController.detailUser)
   }

   public updateUser(): void{
      this.router.put('/', userController.updateUser)
   }

   public deleteUser(): void {
      this.router.delete('/', userController.deleteUser)
   }

}

export default new userRoute().router