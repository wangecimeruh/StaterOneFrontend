import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Customer } from './customer';
import { Vehicle } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private customersUrl: string;
  private customerUrl: string;
  private deleteCustomerUrl: string;
  private vehicleUrl:string;
  private customer!: Customer;
  private deleteVehicleUrl:string;
  private vehicleUrls: string;

  constructor(private http: HttpClient) { 
  this.customersUrl = 'http://localhost:8080/app/rest/v2/services/starterone_CustomerService/save'
  this.customerUrl = 'http://localhost:8080/app/rest/v2/entities/starterone_Customer'
  this.deleteCustomerUrl ='http://localhost:8080/app/rest/v2/entities/starterone_Customer/'
  this.vehicleUrl ='http://localhost:8080/app/rest/v2/entities/starterone_Vehicle/'
  this.vehicleUrls = 'http://localhost:8080/app/rest/v2/services/starterone_CustomerService/addVehicle'
  this.deleteVehicleUrl ='http://localhost:8080/app/rest/v2/entities/starterone_Vehicle/'

  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.customersUrl, customer);
  }
  public saveVehicle(vehicle: Vehicle) {
    return this.http.post<Vehicle>(this.vehicleUrls, vehicle);
  }
  

  public delete(id:any) {
      return this.http.delete<Customer>(this.deleteCustomerUrl+`${id}`); 
  }

  public deletevehicle(id:any) {
    return this.http.delete<Vehicle>(this.deleteVehicleUrl+`${id}`); 
}

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  public findAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehicleUrl);
  }

  getUserById(id: any): Observable<Customer> {
    return this.http.get<Customer>(this.customerUrl + `${id}`);
  }

  updateUser(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.customerUrl + customer, customer);
  }

  getUser() {
    return this.customer;
  }

  setUser(customer: Customer) {
    this.customer = customer;
  }
}
