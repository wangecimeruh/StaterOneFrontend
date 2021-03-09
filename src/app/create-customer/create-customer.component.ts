import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomerComponent } from '../customer/customer.component';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

 customer: Customer;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private customerServiceService: CustomerServiceService 
    ) {
  this.customer = new Customer();
   }
  
  onSubmit() {
    this.customerServiceService.save(this.customer);
  }

  ngOnInit(): void {
  
  }

}

