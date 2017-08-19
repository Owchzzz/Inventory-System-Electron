import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './Components/Home/home.component';
import { TransactionsComponent } from './Components/Transactions/transactions.component';
import { remote } from 'electron';
const AppRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'transactions', component: TransactionsComponent}
];

@Component({
  selector: 'App',
  templateUrl: './Home/home.html'
})
export class AppComponent implements OnInit {
  public readonly name = 'electron-forge';
  public window:any;
  private fullScreenMode:boolean;
  ngOnInit(): void {
    console.log('component initialized');
    alert('Starting up inventory system.');
    this.window = remote.getCurrentWindow();
    this.fullScreenMode = true;
  }
  public closeApp(): void {
    this.window.close();
  }

  public minimizeApp(): void {
    this.window.minimize();
  }

  public maximizeApp(): void {
    this.window.setFullScreen(this.fullScreenMode);
    this.fullScreenMode = this.fullScreenMode == true ? false : true;
  }

}

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(AppRoutes,{enableTracing: false})
  ],
  declarations: [AppComponent,HomeComponent,TransactionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
