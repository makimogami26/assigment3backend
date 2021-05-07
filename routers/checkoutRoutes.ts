import IRoutes from '../routers/IRoutes'
import userController from '../controllers/shopcartController'
import authJwt from '../middlewares/AuthJwt'
import { Router } from 'express'
import checkoutController from '../controllers/checkoutController'

class checkoutRoute {
    router: Router
    constructor() {
       this.router = Router()
       this.Createorder()

    }

    public Createorder(): void{
       this.router.post('/:userId',authJwt.authentication,
        checkoutController.createOrder)
    }
 
     }
 
 export default new checkoutRoute().router