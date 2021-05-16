import IRoutes from "../routers/IRoutes";
import userController from "../controllers/shopcartController";
import authJwt from "../middlewares/AuthJwt";
import { Router } from "express";
import ShopcartController from "../controllers/shopcartController";

class ShopCartRoute {
  router: Router;
  constructor() {
    this.router = Router();
    this.addToCart();
    this.updateCart();
    this.getAllCart();
    this.deleteCart();
  }

  public addToCart(): void {
    this.router.post("/add/:product_id", ShopcartController.addToCart);
  }

  public updateCart(): void {
    this.router.post("/update", ShopcartController.updateCart);
  }
  public getAllCart(): void {
    this.router.get("/", ShopcartController.getAllCart);
  }
  public deleteCart(): void {
    this.router.delete("/delete", ShopcartController.deleteCart);
  }
}

export default new ShopCartRoute().router;
