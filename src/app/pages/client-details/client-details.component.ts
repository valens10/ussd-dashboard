import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../service/pages.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  userFilter: any = ''
  profile = JSON.parse(window.sessionStorage.getItem('profile') as string);
  v_client_id: any = ''
  active = 1;
  transactions: any = []
  clients: any = []
  baseAccountObj: any = []
  clientObj: any = []
  loans: any = []
  constructor(
    private apiService: PagesService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
  ) {
    if (!this.profile.is_staff) { this._location.back() }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.v_client_id = params['client_id'];
    });
    this.getSingleClient()
    this.get_clients()
    this.get_client_base_account()
    this.get_client_loan(this.v_client_id)
  }

  getSingleClient() {
    this.apiService.get_single_client(this.v_client_id).subscribe(
      (response: any) => {
        this.clientObj = response
        console.log(this.clientObj)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  get_client_base_account() {
    const param = {
      client_id: this.v_client_id
    }
    this.apiService.get_client_base_account(param).subscribe(
      (response: any) => {
        this.baseAccountObj = response.res
        console.log('base_account', this.baseAccountObj)
        this.get_client_transaction(this.baseAccountObj?.account_number)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  get_client_transaction(account_number: any) {
    const param = {
      account_number: account_number
    }
    this.apiService.get_client_transaction(param).subscribe(
      (response: any) => {
        this.transactions = response.res
        console.log('transactions', this.transactions)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  get_client_loan(client_id: any) {
    const param = {
      client_id: client_id
    }
    this.apiService.get_client_loan(param).subscribe(
      (response: any) => {
        this.loans = response.res
        console.log('loans================>', this.loans)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  get_clients() {
    this.apiService.get_clients().subscribe(
      (response: any) => {
        this.clients = response
        console.log(this.clients)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  deleteClient(user_id: any) {
    const param = this.profile.id
    this.apiService.deleteUser(param).subscribe(
      (response: any) => {
        console.log('response', response)
        this.get_clients()
      },
      (error: any) => {
        console.log(error)
      }
    );
  }



  searchuser(event: Event) { }
}