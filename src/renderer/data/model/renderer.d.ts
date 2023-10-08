export interface MTMApi {
  signIn: (username: string, password: string) => Promise<unknown>;
  signUp: (username: string, password: string) => Promise<unknown>;
  getPrinters: () => Promise<unknown>;
}

declare global {
  interface Window {
    mtmApi: MTMApi;
  }
}
