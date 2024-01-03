const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Aller récuperer les différenets artists
    const artists = await tables.artist.readAll();

    res.status(200).json(artists);
  } catch (e) {
    next(e);
  }
};

module.exports = { browse };
