const { Pool } = require("pg");
require('dotenv').config();

console.log(process.env.POSTGRES_USER || 'postgres')
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DATABASE || 'reactpostgresql',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  port: process.env.POSTGRES_PORT || '5432',
});

const getCharacters = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM characters");

    res.status(200).json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCharacterById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      "SELECT * FROM characters WHERE id = $1",
      [id]
    );
    res.json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createCharacter = async (req, res) => {
  try {
    //get image and id from the front!!!
    const { id, name, lastname, age, favoritecolor, country, hobbie, image } =
      req.body;

    // const image = "https://linkstilldoenstexist.com";
    console.log(req.body);
    const response = await pool.query(
      'INSERT INTO characters (id, name, "lastname", age, "favoritecolor", country, hobbie, image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
      [id, name, lastname, age, favoritecolor, country, hobbie, image]
    );

    res.json({
      message: "Character added successfully",
      body: {
        character: {
          id: id,
          name,
          lastname,
          age,
          favoritecolor,
          country,
          hobbie,
          image,
        },
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteCharacterById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query("DELETE FROM characters WHERE id = $1", [
      id,
    ]);
    res.json(`Character ${id} deleted succesfully`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateCharacter = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, lastname, age, favoritecolor, country, hobbie } = req.body;
    const response = await pool.query(
      'UPDATE characters SET name = $1, "lastname" = $2, age = $3, "favoritecolor" = $4, country = $5, hobbie = $6 WHERE id = $7',
      [name, lastname, age, favoritecolor, country, hobbie, id]
    );
    console.log(response);
    res.send(`Character with the ${id} updated succesfully`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getCharacters,
  createCharacter,
  getCharacterById,
  deleteCharacterById,
  updateCharacter,
};
