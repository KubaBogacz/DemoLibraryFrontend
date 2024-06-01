import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { LoginDTO, LoginResponseDTO } from './dto/login-dto';
import { BookDTO } from './dto/book-dto';

export type ClientResponse<T> = {
  success: boolean;
  data: T;
  statusCode: number;
};

export class LibraryClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://192.168.1.14:8080/api',
    });
  }

  public async login(
    data: LoginDTO,
  ): Promise<ClientResponse<LoginResponseDTO | null>> {
    try {
      const response: AxiosResponse<LoginResponseDTO> = await this.client.post(
        '/auth/login',
        data,
      );

      this.client.defaults.headers.common['Authorization'] =
        `Bearer ${response.data.token}`;

      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 500,
      };
    }
  }

  public async getBooks(): Promise<ClientResponse<BookDTO | null>> {
    try {
      const response = await this.client.get('/books');

      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 500,
      };
    }
  }
}
