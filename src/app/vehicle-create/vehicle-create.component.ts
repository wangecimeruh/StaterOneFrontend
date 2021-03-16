import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';
import { Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.scss']
})
export class VehicleCreateComponent implements OnInit {

  vehicle: Vehicle;
  customer!: Customer;

  constructor( private customerServiceService: CustomerServiceService) {

  this.vehicle = new Vehicle();
   }

   onSubmit() {
    this.customerServiceService.saveVehicle(this.vehicle);
    
  }

  ngOnInit(): void {
  }

}
