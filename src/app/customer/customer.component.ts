import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerId } from '../customer-id';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer[] | undefined;
  customerId!: CustomerId;
  @Input() customers: Customer;
  customerServiceService: any;
  
  constructor(private customerService:CustomerServiceService,private route : Router) {
    this.customers = new Customer();
   }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(data => {
      this.customer = data;
    });
  } 
  onDelete(id : any){
   alert(id);
  this.customerService.delete(id).subscribe();
 
  
  }
  edit(customer: Customer) {
    this.customerService.setUser(customer);
    this.route.navigate(['editcustomer']);
  }

    
  }


