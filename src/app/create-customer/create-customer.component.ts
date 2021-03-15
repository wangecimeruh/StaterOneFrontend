import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

 customer: Customer;

  constructor(
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

