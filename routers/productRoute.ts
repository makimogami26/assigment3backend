import IRoutes from '../routers/IRoutes'
import productController from '../controllers/productController'

import { Router } from 'express'

class productRoute {
   router: Router
   constructor() {
      this.router = Router()
      
      this.addproduct()
      this.getproduct()
   }

   public getproduct(): void{
      this.router.get('/', productController.getproduct)
   }

   public addproduct(): void{
      this.router.post('/add', productController.addproduct)
   }


}

export default new productRoute().router