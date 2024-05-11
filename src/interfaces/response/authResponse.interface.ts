export interface AuthResponse {
  id: number;
  email: string;
  role: string;
  date: Date;
  apiKey: string;
  accessToken?: string;
  refreshToken?: string;
}
