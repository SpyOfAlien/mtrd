export interface ApiResponse {
  statusCode: number;
  reasonCode?: string;
  message: string;
  data?: unknown;
}

export const ErrorCode = {
  InvalidUser: "AUTH01",
  InvalidPass: "AUTH02",
};
