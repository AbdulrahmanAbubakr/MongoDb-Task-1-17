const User = require("../models/User");

const Register = async (_name, _email, _password, _firstName) => {
  try {
    let data = await User.create({
      name: _name,
      email: _email,
      password: _password,
      firstName: _firstName,
    });
    if (data) {
      console.log("Welcome");
    } else {
      console.log("error");
    }
  } catch (e) {
    console.log(e);
  }
};
const Login = async (_name, _email) => {
  try {
    let data = await User.findOne({ name: _name, email: _email });
    if (data) {
      // console.log("user is registered");
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

const getAllUsers = async () => {
  try {
    let data = await User.find();
    if (data.length != 0) {
      return data;
    }
  } catch (e) {
    return "error";
  }
};

const deleteUser = async (_name, _email) => {
  try {
    let data = await User.deleteOne({
      name: _name,
      email: _email,
    });
    if (data) {
      return data;
    }
  } catch (e) {
    return "error";
  }
};
const updateUser = async (_name, _newName, _email) => {
  try {
    let data = await User.updateOne(
      {
        name: _name,
      },
      {
        email: _email,
        name: _newName,
      }
    );
    if (data) {
      console.log("user is updated");
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { Register, Login, getAllUsers, deleteUser, updateUser };
