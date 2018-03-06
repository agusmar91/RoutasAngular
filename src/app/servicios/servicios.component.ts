import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  countries;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
      
      data => { this.countries = data},
      
      err => console.error(err),
      
      () => console.log('Cargados los paises')
    );
  }
}
