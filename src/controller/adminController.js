import StatusCodes from "http-status-codes";
import { AdminModel } from "../model/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function SaveAdmin(req, res) {
  try {
    let password = req.body.password;
    const encrypass = bcrypt.hashSync(password, 12);
    req.body.password = encrypass;
    const admin = new AdminModel(req.body);
    const saveAdmin = await admin.save();
    res.status(StatusCodes.CREATED).json(saveAdmin);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massage: "kuch to locha hai daya , data save hua nahi" });
  }
}

export async function Adminlogin(req, res) {
  try {
    filter = { phone: req.body.phone };
    const admin = await AdminModel.findOne(filter);
    if (admin) {
      let password = req.body.password;

      if (bcrypt.compareSync(password, admin.password)) {
        const token = jwt.sign({ adminId: admin._id }, "ilove123");
        res.status(StatusCodes.OK).json({ Token: token });
      } else {
        res.status(StatusCodes.BAD_REQUEST).json({
          massage: "apka password incorect hai ,sahi password dal ",
        });
      }
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({
        massage: "apne phone galat enter kiya  hai , sahi phone number dal ",
      });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massage: "andar ki chize wrong hai " });
  }
}
