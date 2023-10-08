import path from "path";
import { app } from "electron";

const sqlite3 = require("sqlite3").verbose();
let _db: any;

const DB_PATH = path.join(app.getPath("userData"), "db.sqlite");

const connect = () => {
  _db = new sqlite3.Database(
    DB_PATH,
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err: any) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
};

export { _db, connect, DB_PATH };
