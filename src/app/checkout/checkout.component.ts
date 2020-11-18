import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  checkoutForm : FormGroup;

  constructor(formbuilder : FormBuilder) {
     this.checkoutForm = formbuilder.group({
      emailAdd : new FormControl(''),
      quantity : new FormControl(''),
      terms : new FormControl('')
     });
   }

  ngOnInit(): void {
  }
  postData(){
    console.log(this.checkoutForm.value.emailAdd);
  }

}
