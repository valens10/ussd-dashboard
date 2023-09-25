import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile: any = JSON.parse(window.sessionStorage.getItem('profile') as any)

  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    console.log('profile', this.profile)
  }

}
