export enum IPCEvent {
  LOGIN = "auth:signin",
  SIGNUP = "auth:signup",

  PRINTERS = "print:list",
}

export interface IPCHandlerResponse {
  statusCode: number;
  reasonCode?: string;
  message: string;
  data?: unknown;
}
