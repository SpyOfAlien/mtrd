import { IUser } from "src/main/lib/model";
import { _db } from "./connection";

const isUserExisted = (username: string): Promise<IUser> => {
  const query = `
        SELECT * from User
        WHERE username = '${username}'
    `;

  return new Promise((resolve, reject) => {
    _db.all(query, (err: any, data: any[]) => {
      {
        if (err) {
          console.error("error: ", err);
          reject("Fail to connect to database");
        } else {
          if (data.length) resolve(data[0]);
          resolve({} as IUser);
        }
      }
    });
  });
};

const createUser = (
  userId: string,
  username: string,
  password: string,
  role: string
) => {
  const query = `
        INSERT INTO User (user_id, username, password, role)
        VALUES ('${userId}', '${username}', '${password}', 'supper-admin');
    `;

  return new Promise((resolve, reject) => {
    _db.all(query, (err: any, data: any[]) => {
      {
        if (err) {
          console.error("err: ", err);
          reject("Fail to connect to database");
        } else {
          if (data.length) resolve(data);
          resolve(false);
        }
      }
    });
  });
};

const getUserPassword = (
  userId: string,
  username: string,
  password: string,
  role: string
) => {
  const query = `
        INSERT INTO User (user_id, username, password, role)
        VALUES ('${userId}', '${username}', '${password}', 'supper-admin');
    `;

  console.log("query", query);
  return new Promise((resolve, reject) => {
    _db.all(query, (err: any, data: any[]) => {
      {
        if (err) {
          console.error("err: ", err);
          reject("Fail to connect to database");
        } else {
          if (data.length) resolve(data);
          resolve(false);
        }
      }
    });
  });
};

export { isUserExisted, createUser };
