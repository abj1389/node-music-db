const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Playlist } = require("../models/Playlist.js");
const { Song } = require("../models/Song.js");
const { User } = require("../models/User.js");

const playlistSeed = async () => {
  try {
    // CONEXION
    const database = await connect();

    // BORRADO
    await Playlist.collection.drop();
    console.log("Borrados playlists");

    const songList = await Song.find();
    const userList = await User.find();

    // CREACION DOCUMENTOS

    let playlistList = [
      {
        title: "Taylor Swift's playlist",
        songs: songList.map((song) => (song.artist?.toString() === "64562e1f4a64020bfaa612ee" ? song : null)).filter((song) => song !== null),
        // songs: [songList[0], songList[1], songList[2], songList[3], songList[4]],
        user: userList[0],
      },
      // {
      //   title: "Ed Sheeran's playlist",
      //   songs: songList.map((song) => song.title === "Ed Sheeran" && song),
      //   user: userList[1],
      // },
    ];

    playlistList = playlistList.map((elem) => new Playlist(elem));

    // RELACIONES
    // playlistList[0].child = playlistList[0]._id;
    // playlistList[1].child = playlistList[1]._id;

    await Playlist.insertMany(playlistList);
    console.log("Creados playlists correctamente");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

playlistSeed();
