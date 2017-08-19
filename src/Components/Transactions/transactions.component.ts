import { Component } from '@angular/core';

@Component({
  selector: 'transactionsC',
  templateUrl: './Components/Transactions/transactions.html'
})
export class TransactionsComponent {
  title : string;
  pageStatus : string;

  constructor() {
    this.title = "Sample...";
  }



}
