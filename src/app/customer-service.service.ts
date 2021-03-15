import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private customersUrl: string;
  private customerUrl: string;
  private deleteCustomerUrl: string;
  private customer!: Customer;

  constructor(private http: HttpClient) { 
    this.customersUrl = 'http://localhost:8080/app/rest/v2/services/starterone_CustomerService/save'
  this.customerUrl = 'http://localhost:8080/app/rest/v2/entities/starterone_Customer'
  this.deleteCustomerUrl ='http://localhost:8080/app/rest/v2/entities/starterone_Customer/'

  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.customersUrl, customer);
  }

  public delete(id:any) {
      return this.http.delete<Customer>(this.deleteCustomerUrl+`${id}`); 

  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  getUserById(id: any): Observable<Customer> {
    return this.http.get<Customer>(this.customerUrl + `${id}`);
  }

  updateUser(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.customerUrl + customer.id, customer);
  }

  getUser() {
    return this.customer;
  }

  setUser(customer: Customer) {
    this.customer = customer;
  }
}
