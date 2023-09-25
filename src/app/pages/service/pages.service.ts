import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  BASE_URL = 'http://localhost:8000/api/';

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  fHeaders = {
    headers: new HttpHeaders({}),
  };

  constructor(private http: HttpClient) {
    const profile = JSON.parse(
      window.sessionStorage.getItem('profile') as string
    );

    if (profile) {
      this.headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token ${profile.token}`,
        }),
      };

      this.fHeaders = {
        headers: new HttpHeaders({
          Authorization: `Token ${profile.token}`,
        }),
      };
    }
  }

  get_user_details(user_id: any) {
    const endpoint = `users/${user_id}`;
    return this.http.get(this.BASE_URL + endpoint, this.headers);
  }

  deleteUser(user_id: any) {
    const endpoint = `users/${user_id}`;
    return this.http.delete(this.BASE_URL + endpoint, this.headers);
  }

  get_users() {
    const endpoint = `users/user_list`;
    return this.http.get(this.BASE_URL + endpoint, this.headers);
  }

  get_clients() {
    const endpoint = `client_management/client_list`;
    return this.http.get(this.BASE_URL + endpoint, this.headers);
  }

  get_single_client(id_client: any) {
    const endpoint = `client_management/client_list/` + id_client;
    return this.http.get(this.BASE_URL + endpoint, this.headers);
  }

  get_client_base_account(param: any) {
    const endpoint = `accounting_management/get_base_account`;
    return this.http.post(this.BASE_URL + endpoint, param, this.headers);
  }

  get_client_transaction(param: any) {
    const endpoint = `accounting_management/get_client_transaction`;
    return this.http.post(this.BASE_URL + endpoint, param, this.headers);
  }

  loan_application_list() {
    const endpoint = `accounting_management/loan_application_list`;
    return this.http.get(this.BASE_URL + endpoint, this.headers);
  }

  product_list() {
    const endpoint = `accounting_management/product_list`;
    return this.http.get(this.BASE_URL + endpoint, this.headers);
  }

  loan_product_list() {
    const endpoint = `accounting_management/loan_product_list`;
    return this.http.get(this.BASE_URL + endpoint, this.headers);
  }

  acc_transaction_list() {
    const endpoint = `accounting_management/acc_transaction_list`;
    return this.http.get(this.BASE_URL + endpoint, this.headers);
  }

  get_client_loan(param: any) {
    const endpoint = `accounting_management/get_client_loan`;
    return this.http.post(this.BASE_URL + endpoint, param, this.headers);
  }

  acc_setting_list() {
    const endpoint = `accounting_management/acc_setting_list`;
    return this.http.get(this.BASE_URL + endpoint, this.headers);
  }


  change_password(data: any) {
    const endpoint = `auth/change-password`;
    return this.http.post(this.BASE_URL + endpoint, data, this.fHeaders);
  }

}
