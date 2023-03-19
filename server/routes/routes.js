const express = require("express");
const router = express.Router();

const {
  getCharacters,
  createCharacter,
  getCharacterById,
  deleteCharacterById,
  updateCharacter,
} = require("../controllers/index");

// home

router.get("/characters", getCharacters);
router.get("/characters/:id", getCharacterById);

router.post("/characters", createCharacter);
router.delete('/characters/:id', deleteCharacterById);
router.put('/characters/:id', updateCharacter)
module.exports = router;
