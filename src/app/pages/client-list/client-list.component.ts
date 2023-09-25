import { Component, OnInit } from '@angular/core';
import { PagesService } from '../service/pages.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  userFilter: any = ''
  profile = JSON.parse(window.sessionStorage.getItem('profile') as string);

  clients: any = []

  constructor(
    private apiService: PagesService,
    private router: Router,
    private _location: Location,
  ) {
    if (!this.profile.is_staff) { this._location.back() }
  }

  ngOnInit(): void {
    this.get_clients()

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
