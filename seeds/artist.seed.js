const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Artist } = require("../models/Artist.js");

let artistList = [
  {
    name: "Taylor Swift",
    gender: "Pop",
    activeYear: "2006",
    country: "USA",
  },
  {
    name: "Ed Sheeran",
    gender: "Pop",
    activeYear: "2005",
    country: "UK",
  },
  {
    name: "Shakira",
    gender: "Latin Pop",
    activeYear: "1990",
    country: "Colombia",
  },
  {
    name: "Beyoncé",
    gender: "R&B",
    activeYear: "1997",
    country: "USA",
  },
  {
    name: "Juanes",
    gender: "Latin Pop",
    activeYear: "1992",
    country: "Colombia",
  },
  {
    name: "Adele",
    gender: "Pop",
    activeYear: "2006",
    country: "UK",
  },
  {
    name: "Bad Bunny",
    gender: "Reggaeton",
    activeYear: "2015",
    country: "Puerto Rico",
  },
  {
    name: "Coldplay",
    gender: "Rock",
    activeYear: "1996",
    country: "UK",
  },
  {
    name: "Rosalia",
    gender: "Flamenco",
    activeYear: "2015",
    country: "Spain",
  },
  {
    name: "Post Malone",
    gender: "Hip Hop",
    activeYear: "2013",
    country: "USA",
  },
];

const artistSeed = async () => {
  try {
    // CONEXION
    const database = await connect();

    // BORRADO
    await Artist.collection.drop();
    console.log("Borrados artists");

    // CREACION DOCUMENTOS
    artistList = artistList.map((elem) => new Artist(elem));

    // RELACIONES
    // artistList[0].child = artistList[0]._id;
    // artistList[1].child = artistList[1]._id;
    await Artist.insertMany(artistList);
    console.log("Creados artists correctamente");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

artistSeed();
