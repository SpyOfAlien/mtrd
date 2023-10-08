import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("mtmApi", {
  signIn: (username: string, password: unknown) =>
    ipcRenderer.invoke("auth:signin", { username, password }),

  signUp: (username: string, password: unknown) =>
    ipcRenderer.invoke("auth:signup", { username, password }),

  getPrinters: () => ipcRenderer.invoke("print:list"),
});
