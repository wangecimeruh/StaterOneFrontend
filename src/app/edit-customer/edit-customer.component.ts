import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {


  customers!: Customer[];
  customer!: Customer;
  editForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
   private apiService: CustomerServiceService) { }

  ngOnInit(){
    this.customer = this.apiService.getUser();
    console.log('********************************** ',this.customer);
    
    this.editForm = this.formBuilder.group({
        id: [''],
        name:[''],
        phoneNumber: [''],
        email: ['']

      
    });
}

onSubmit() {
  
  console.log(this.editForm.value);
}

}
