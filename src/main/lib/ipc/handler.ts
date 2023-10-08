import { ipcMain, BrowserWindow, webContents } from "electron";
import { createUser, isUserExisted } from "../sqlite";
import { decrypt, encrypt } from "../ultils";
import crypto from "crypto";
import { IUser, IPCEvent, IPCHandlerResponse } from "../model";

const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

export const handleIpcRenderer = () => {
  ipcMain.handle(IPCEvent.LOGIN, (evt, data: any) =>
    handleLogin(data.username, data.password)
  );
  ipcMain.handle(IPCEvent.SIGNUP, (evt, data: any) =>
    handleCreateUser(data.username, data.password)
  );
  ipcMain.handle(IPCEvent.PRINTERS, (evt) => handleGetListPrinters());
};

const handleLogin = async (
  username: string,
  password: string
): Promise<IPCHandlerResponse> => {
  try {
    const user: IUser = await isUserExisted(username);

    if (!user.user_id)
      return Promise.resolve({
        statusCode: 400,
        reasonCode: "AUTH01",
        message: "User does not exist, please try again",
      });

    if (password && password === decrypt(user.password)) {
      setTimeout(() => {
        BrowserWindow.getFocusedWindow().maximize();
      });
      return Promise.resolve({
        statusCode: 200,
        message: "Login successfully",
        data: user,
      });
    } else {
      return Promise.resolve({
        statusCode: 400,
        reasonCode: "AUTH02",
        message: "Invalid password",
      });
    }
  } catch (error) {
    console.error(error);
    return Promise.resolve({
      statusCode: 500,
      message: "Server error",
    });
  }
};

const handleCreateUser = async (
  username: string,
  password: string
): Promise<IPCHandlerResponse> => {
  try {
    const isExisted = await isUserExisted(username);

    if (isExisted)
      return Promise.resolve({
        statusCode: 200,
        message: "User already existed",
      });

    const hashPassword = encrypt(password);

    const user = await createUser(
      crypto.randomBytes(16).toString("hex"),
      username,
      hashPassword,
      "doctor"
    );

    if (user) {
      return Promise.resolve({
        statusCode: 200,
        message: "Created",
        data: user,
      });
    } else {
      return Promise.resolve({ statusCode: 400, message: "Failed" });
    }
  } catch (error) {
    console.error(error);
    return Promise.resolve({ statusCode: 500, message: "Server error" });
  }
};

const handleGetListPrinters = async () => {
  const webcontent = await webContents.getFocusedWebContents();

  const pdfPath = path.join(os.homedir(), "Desktop", "temp.pdf");

  webcontent
    .printToPDF({
      pageSize: "A4",
    })
    .then((data) => {
      fs.writeFile(pdfPath, data, (error: any) => {
        if (error) throw error;
        console.log(`data`, data);
      });
    })
    .catch((error) => {
      console.log(`Failed to write PDF to ${pdfPath}: `, error);
    });

  // return Promise.resolve(webcontent);
};
