export interface LoginResponse {
  id: string;
  type: string;
  attributes: LoginResponseAttributes;
}

export interface LoginResponseAttributes {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  refreshToken: string;
  createdAt: number;
}
