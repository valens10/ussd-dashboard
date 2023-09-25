import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../service/pages.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userFilter: any = ''
  modalReference!: NgbModalRef;
  profile = JSON.parse(window.sessionStorage.getItem('profile') as string);

  users: any = []

  constructor(
    private apiService: PagesService,
    private router: Router,
    private _location: Location,
    private modalService: NgbModal,
  ) {
    if (!this.profile.is_staff) { this._location.back() }
  }

  ngOnInit(): void {
    this.getUsers()

  }

  getUsers() {
    this.apiService.get_users().subscribe(
      (response: any) => {
        this.users = response
        console.log(this.users)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  deleteUser(user_id: any) {
    const param = this.profile.id
    this.apiService.deleteUser(param).subscribe(
      (response: any) => {
        console.log(response)
        this.getUsers()
      },
      (error: any) => {
        console.log(error)
      }
    );
  }



  searchuser(event: Event) { }
}


