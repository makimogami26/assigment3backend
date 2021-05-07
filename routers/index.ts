import { Router, Request, Response } from "express";
import authRoutes from "./auth.routes";
import IRoutes from "./IRoutes";
import userRoute from "./userRoutes";
import productRoute from "./productRoute";
import ShopcartRoute from "./ShopcartRoute";
import checkoutRoutes from "./checkoutRoutes";

class Routes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
    this.auth();
    this.user();
    this.product();
    this.Shopcart();
    this.Checkout();
  }

  public routes(): void {
    this.router.get("/", (req: Request, res: Response) => {
      res.status(200).json({ msg: "Welcome.. login to Wanhenda Pecah Belah" });
    });
  }

  public auth(): void {
    this.router.use("", authRoutes);
  }

  public user(): void {
    this.router.use("/user", userRoute);
  }
  public product(): void {
    this.router.use("/product", productRoute);
  }
  public Shopcart(): void {
    this.router.use("/Shopcart", ShopcartRoute);
  }
  public Checkout(): void {
    this.router.use("/checkout", checkoutRoutes);
  }
}

export default new Routes().router;
