const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { User } = require("../models/User.js");

let userList = [
  {
    firstName: "Alex",
    lastName: "Brasoveanu",
    email: "abj@terra.es",
  },
  {
    firstName: "Emma",
    lastName: "García",
    email: "emma.garcia@gmail.com",
  },
  {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@yahoo.com",
  },
  {
    firstName: "Lucas",
    lastName: "Lee",
    email: "lucas.lee@hotmail.com",
  },
  {
    firstName: "Miguel",
    lastName: "González",
    email: "miguel.gonzalez@gmail.com",
  },
  {
    firstName: "Sofía",
    lastName: "Martínez",
    email: "sofia.martinez@gmail.com",
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@yahoo.com",
  },
  {
    firstName: "David",
    lastName: "Chen",
    email: "david.chen@gmail.com",
  },
  {
    firstName: "Ava",
    lastName: "Jones",
    email: "ava.jones@hotmail.com",
  },
  {
    firstName: "Ethan",
    lastName: "Brown",
    email: "ethan.brown@yahoo.com",
  },
];

const userSeed = async () => {
  try {
    // CONEXION
    const database = await connect();

    // BORRADO
    await User.collection.drop();
    console.log("Borrados users");

    // CREACION DOCUMENTOS
    userList = userList.map((elem) => new User(elem));

    // RELACIONES
    // userList[0].child = userList[0]._id;
    // userList[1].child = userList[1]._id;
    await User.insertMany(userList);
    console.log("Creados users correctamente");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

userSeed();
