const express = require("express");

// Modelos
const { Song } = require("../models/Song.js");

const router = express.Router();

// CRUD: READ
router.get("/", async (req, res) => {
  try {
    // Asi leemos query params
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const songs = await Song.find()
      .limit(limit)
      .skip((page - 1) * limit)
      .populate("artist");

    // Num total de elementos
    const totalElements = await Song.countDocuments();

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: songs,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// CRUD: READ
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const song = await Song.findById(id).populate("artist");
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.get("/title/:title", async (req, res) => {
  const title = req.params.title;

  try {
    const song = await Song.find({ title: new RegExp("^" + title.toLowerCase(), "i") }).populate("artist");
    if (song?.length) {
      res.json(song);
    } else {
      res.status(404).json([]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// CRUD: CREATE
router.post("/", async (req, res) => {
  try {
    const song = new Song(req.body);

    const createdSong = await song.save();
    return res.status(201).json(createdSong);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// CRUD: DELETE
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const songDeleted = await Song.findByIdAndDelete(id);
    if (songDeleted) {
      res.json(songDeleted);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// CRUD: UPDATE
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const songUpdated = await Song.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (songUpdated) {
      res.json(songUpdated);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = { songRouter: router };
