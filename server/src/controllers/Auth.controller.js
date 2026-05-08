import prisma from "../config/prisma.config.js";
import status from "http-status";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const hashedPassord = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashedPassord,
      },
    });
    res.status(status.CREATED).json({
      status: "success",
      message: "User created successfully",
      data: user,
      status: status.CREATED,
    });
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: error.message,
      status: status.INTERNAL_SERVER_ERROR,
    });
  }
};
