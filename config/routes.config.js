// Our routes go here:
const express = require("express")

const router = express.Router()

const controller = require("../controllers/spotify.controller")

router.get('/', controller.home)
router.get("/artist-search", controller.search)
router.get("/albums/:artistId", controller.albums)
router.get("/tracks/:albumId", controller.tracks)


module.exports = router