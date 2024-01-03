const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    super({ table: "artist" });
  }

  async readAll() {
    const [rows] = await this.database.query("SELECT * FROM artist");

    return rows;
  }
}

module.exports = ArtistManager;
