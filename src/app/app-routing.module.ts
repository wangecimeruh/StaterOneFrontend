import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [{ path: 'customer', component: CustomerComponent },
             { path: 'createcustomer', component: CreateCustomerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
