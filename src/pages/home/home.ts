import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from "../user/user";
import { QuoteService } from "../services/quotes";
import { Quote } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myString: string = "@hotmail.com";
  public data: any = {
    email: ""

  }

  constructor(public navCtrl: NavController, public quotes: QuoteService) {
    console.log("Home pages");
    this.quotes = quotes;
    this.quotes.getQuotes();
    //console.log(this.quotes.data);


  }

  Validar() {

    console.log(this.quotes.data);
    //console.log(this.quotes.data[0].email);
    //console.log(this.data.email);
    

    if (this.quotes.data[0].email == this.data.email) {
      this.navCtrl.push(UserPage, this.quotes.data[0]);
    } else {
      alert("email incorrecto");
    }

  }

}
