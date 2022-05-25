import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Support {
  url: string;
  text: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ListUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  static API_URL = 'https://reqres.in/api/users';

  public listUsersResponse: ListUsersResponse;

  constructor(private http: HttpClient) {}

  listUsersByPage(page: number) {
    return this.http.get<ListUsersResponse>(UsersService.API_URL, {
      params: { page },
    });
  }
}
