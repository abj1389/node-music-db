const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Song } = require("../models/Song.js");
const { Artist } = require("../models/Artist.js");

let songList = [
  {
    title: "Love Story",
    length: 235,
    releaseYear: "2008",
    //artist: "Taylor Swift",
  },
  {
    title: "Shake It Off",
    length: 219,
    releaseYear: "2014",
    //artist: "Taylor Swift",
  },
  {
    title: "Blank Space",
    length: 251,
    releaseYear: "2014",
    //artist: "Taylor Swift",
  },
  {
    title: "Bad Blood",
    length: 223,
    releaseYear: "2015",
    //artist: "Taylor Swift",
  },
  {
    title: "You Need To Calm Down",
    length: 171,
    releaseYear: "2019",
    //artist: "Taylor Swift",
  },
  {
    title: "Shape of You",
    length: 233,
    releaseYear: "2017",
    //artist: "Ed Sheeran",
  },
  {
    title: "Thinking Out Loud",
    length: 281,
    releaseYear: "2014",
    //artist: "Ed Sheeran",
  },
  {
    title: "Photograph",
    length: 258,
    releaseYear: "2014",
    //artist: "Ed Sheeran",
  },
  {
    title: "Perfect",
    length: 263,
    releaseYear: "2017",
    //artist: "Ed Sheeran",
  },
  {
    title: "I Don't Care",
    length: 219,
    releaseYear: "2019",
    //artist: "Ed Sheeran",
  },
  {
    title: "Hips Don't Lie",
    length: 213,
    releaseYear: "2006",
    //artist: "Shakira",
  },
  {
    title: "Whenever, Wherever",
    length: 218,
    releaseYear: "2001",
    //artist: "Shakira",
  },
  {
    title: "Waka Waka (This Time for Africa)",
    length: 205,
    releaseYear: "2010",
    //artist: "Shakira",
  },
  {
    title: "La Tortura",
    length: 213,
    releaseYear: "2005",
    //artist: "Shakira",
  },
  {
    title: "Loca",
    length: 177,
    releaseYear: "2010",
    //artist: "Shakira",
  },
  {
    title: "Crazy in Love",
    length: 235,
    releaseYear: "2003",
    //artist: "Beyoncé",
  },
  {
    title: "Single Ladies (Put a Ring on It)",
    length: 209,
    releaseYear: "2008",
    //artist: "Beyoncé",
  },
  {
    title: "Halo",
    length: 239,
    releaseYear: "2008",
    //artist: "Beyoncé",
  },
  {
    title: "Formation",
    length: 217,
    releaseYear: "2016",
    //artist: "Beyoncé",
  },
  {
    title: "Drunk in Love",
    length: 323,
    releaseYear: "2013",
    //artist: "Beyoncé",
  },
  {
    title: "La Camisa Negra",
    length: 210,
    releaseYear: "2005",
    //artist: "Juanes",
  },
  {
    title: "A Dios Le Pido",
    length: 223,
    releaseYear: "2002",
    //artist: "Juanes",
  },
  {
    title: "Es Por Ti",
    length: 250,
    releaseYear: "2002",
    //artist: "Juanes",
  },
  {
    title: "Me Enamora",
    length: 226,
    releaseYear: "2007",
    //artist: "Juanes",
  },
  {
    title: "La Luz",
    length: 221,
    releaseYear: "2014",
    //artist: "Juanes",
  },
  {
    title: "Hello",
    length: 295,
    releaseYear: "2015",
    //artist: "Adele",
  },
  {
    title: "Someone Like You",
    length: 285,
    releaseYear: "2011",
    //artist: "Adele",
  },
  {
    title: "Rolling in the Deep",
    length: 228,
    releaseYear: "2010",
    //artist: "Adele",
  },
  {
    title: "Set Fire to the Rain",
    length: 240,
    releaseYear: "2011",
    //artist: "Adele",
  },
  {
    title: "Skyfall",
    length: 286,
    releaseYear: "2012",
    //artist: "Adele",
  },
  {
    title: "Dakiti",
    length: 205,
    releaseYear: "2020",
    //artist: "Bad Bunny",
  },
  {
    title: "I Like It",
    length: 253,
    releaseYear: "2018",
    //artist: "Bad Bunny",
  },
  {
    title: "Callaíta",
    length: 243,
    releaseYear: "2019",
    //artist: "Bad Bunny",
  },
  {
    title: "Mía",
    length: 240,
    releaseYear: "2018",
    //artist: "Bad Bunny",
  },
  {
    title: "Soltera (Remix)",
    length: 269,
    releaseYear: "2019",
    //artist: "Bad Bunny",
  },
  {
    title: "Viva La Vida",
    length: 242,
    releaseYear: "2008",
    //artist: "Coldplay",
  },
  {
    title: "The Scientist",
    length: 309,
    releaseYear: "2002",
    //artist: "Coldplay",
  },
  {
    title: "Paradise",
    length: 276,
    releaseYear: "2011",
    //artist: "Coldplay",
  },
  {
    title: "Clocks",
    length: 307,
    releaseYear: "2002",
    //artist: "Coldplay",
  },
  {
    title: "Fix You",
    length: 295,
    releaseYear: "2005",
    //artist: "Coldplay",
  },
  {
    title: "Malamente",
    length: 173,
    releaseYear: "2018",
    //artist: "Rosalía",
  },
  {
    title: "A Palé",
    length: 158,
    releaseYear: "2019",
    //artist: "Rosalía",
  },
  {
    title: "Con Altura",
    length: 162,
    releaseYear: "2019",
    //artist: "Rosalía",
  },
  {
    title: "Juro Que",
    length: 168,
    releaseYear: "2019",
    //artist: "Rosalía",
  },
  {
    title: "Millonària",
    length: 152,
    releaseYear: "2019",
    //artist: "Rosalía",
  },
  {
    title: "Congratulations",
    length: 220,
    releaseYear: "2016",
    //artist: "Post Malone",
  },
  {
    title: "Circles",
    length: 223,
    releaseYear: "2019",
    //artist: "Post Malone",
  },
  {
    title: "Rockstar",
    length: 218,
    releaseYear: "2017",
    //artist: "Post Malone",
  },
  {
    title: "Better Now",
    length: 231,
    releaseYear: "2018",
    //artist: "Post Malone",
  },
  {
    title: "Sunflower",
    length: 157,
    releaseYear: "2018",
    //artist: "Post Malone",
  },
];

const songSeed = async () => {
  try {
    // CONEXION
    const database = await connect();

    // BORRADO
    await Song.collection.drop();
    console.log("Borrados songs");

    // TRAEMOS COLECCIÓN DE ARTISTAS
    const artistList = await Artist.find();

    // CREACION DOCUMENTOS
    songList = songList.map((elem) => new Song(elem));

    // RELACIONES
    // songList[0].child = songList[0]._id;
    // songList[1].child = songList[1]._id;
    for (let i = 0; i < songList.length; i++) {
      songList[i].artist = artistList[parseInt((i / 5).toFixed())];
    }

    await Song.insertMany(songList);
    console.log("Creados songs correctamente");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

songSeed();
