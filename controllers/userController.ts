import { User } from "../models/User";
import { Request, Response } from "express";

class userController {
  static getAll(req: Request, res: Response) {
    User.find()
      .then((result) => {
        res.status(201).json({ msg: `Success get all users`, data: result });
      })
      .catch((err) => {
        res.status(500).json({ msg: `Failed get all users`, data: err });
      });
  }

  static detailUser(req: Request, res: Response) {
    const idUser: any = (<any>req).userId;
    User.findById(idUser)
      .then((result) => {
        res.status(201).json({ msg: `Detail User`, data: result });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ msg: `Cannot see data user`, data: err });
      });
  }

  static updateUser(req: Request, res: Response) {
    const idUser: any = (<any>req).userId;
    const { nama, email, password } = req.body;

    const updateData: any = { nama, email, password };

    for (const item in updateData) {
      //   if (updateData[item] === updateData['password']) {
      //      updateData[item] = bcrypt.hashSync(updateData[item], 8);
      //   }
      if (!updateData[item]) {
        delete updateData[item];
      }
    }

    User.findByIdAndUpdate(idUser, updateData, { new: true })
      .then((result) => {
        res.status(200).json({ msg: "Success update the user", data: result });
      })
      .catch((err) => {
        res.status(500).json({ msg: "Failed update the user" });
      });
  }

  static deleteUser(req: Request, res: Response) {
    const idUser: any = (<any>req).userId;
    User.findByIdAndDelete(idUser)
      .then((result) => {
        res.status(201).json({ msg: `Success delete your user` });
      })
      .catch((err) => {
        res.status(500).json({ msg: "Failed delete your user" });
      });
  }
}

export default userController;
