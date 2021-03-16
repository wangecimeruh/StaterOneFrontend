import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerServiceService } from './customer-service.service';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    VehiclesComponent,
    VehicleCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
