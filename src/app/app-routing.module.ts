import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [{ path: 'customer', component: CustomerComponent },
             { path: 'createcustomer', component: CreateCustomerComponent },
             { path: 'editcustomer', component: EditCustomerComponent },
             { path: 'vehicle', component: VehiclesComponent },
             { path: 'vehicleCreate', component: VehicleCreateComponent }

             
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
