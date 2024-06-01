export interface LoginDTO {
  username: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
  expiresAt?: Date;
  userId?: string;
}
