import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';
import { Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicle!: Vehicle[];
  customer!: Customer[];

 constructor(private customerService:CustomerServiceService,private route : Router) { }

  ngOnInit(): void {
    
    this.customerService.findAllVehicles().subscribe(data => {
      this.vehicle = data;
      console.log("*********************data "+ this.vehicle);

    });
  }

  onDelete(id : any){
    alert(id);
   this.customerService.deletevehicle(id).subscribe();
 
  
  }

}
