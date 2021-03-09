import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer[] | undefined;
  customers: Customer;
  customerServiceService: any;
  
  constructor(private customerService:CustomerServiceService) {
    this.customers = new Customer();
   }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(data => {
      this.customer = data;


    });
  } 
  onDelete(id : any){
    alert(id);
this.customerServiceService.delete(id).subscribe;
 
  
  }

    
  }


