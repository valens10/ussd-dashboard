import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PagesService } from '../service/pages.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-branch-setup',
  templateUrl: './branch-setup.component.html',
  styleUrls: ['./branch-setup.component.scss']
})
export class BranchSetupComponent implements OnInit {
  userFilter: any = ''
  profile = JSON.parse(window.sessionStorage.getItem('profile') as string);
  v_client_id: any = ''
  active = 1;
  transactions: any = []
  clients: any = []
  baseAccountObj: any = []
  branch_account: any = []
  loans: any = []
  p_product: any = [];
  s_product: any = [];
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
    this.acc_setting_list()
    this.get_transaction()
    this.get_all_loan()
    this.getSavingProduct()
    this.getLoanProduct()
  }

  acc_setting_list() {
    this.apiService.acc_setting_list().subscribe(
      (response: any) => {
        this.branch_account = response[0]
        console.log('branch_account', this.branch_account)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }



  get_transaction() {
    this.apiService.acc_transaction_list().subscribe(
      (response: any) => {
        this.transactions = response
        console.log('transactions', this.transactions)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  get_all_loan() {
    this.apiService.loan_application_list().subscribe(
      (response: any) => {
        this.loans = response
        console.log('loans================>', this.loans)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  getSavingProduct() {
    this.apiService.product_list().subscribe(
      (response: any) => {
        this.s_product = response
        console.log('ssssssssssssss', this.s_product)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  getLoanProduct() {
    this.apiService.loan_product_list().subscribe(
      (response: any) => {
        this.p_product = response
        console.log('pppppppppppp', this.p_product)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }



  searchuser(event: Event) { }
}