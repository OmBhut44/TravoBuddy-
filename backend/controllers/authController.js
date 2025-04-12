import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user registeration
export const register = async (req, res) => {
  try {
    // hashing password
    const salt = bcrypt.genSaltSycn(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// user login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await user.findOne({ email });

    // if user does not exist
    if (!User) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // if user is exit then check the password or compare the password
    const checkCorrectPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    // if password is not correct
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const { password, role, ...rest } = user._doc;

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookies and send the response to the client
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "Login successfully",
        data: { ...rest },
      });
  } catch (err) {
    res
        .status(500)
        .json({ success: false, message: "Failed to login" });
  }
};
