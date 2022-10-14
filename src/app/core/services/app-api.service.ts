import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable, take } from 'rxjs';
import { Emails } from 'src/app/interfaces/emails';
import { HeaderList } from 'src/app/interfaces/header-list.interface';
import { Products } from 'src/app/interfaces/products';
import { environment } from 'src/environments/environment';
import { ConectorApiService } from './conector-api/conector-api.service';

@Injectable({
  providedIn: 'root',
})
export class AppApiService {
  constructor(private conectorApi: ConectorApiService) {}

  getAllProducts(): Observable<Products[]> {
    
  }
  
  postProduct(product: Products) {

  }

  getAllEmails(): Observable<Emails[]> {
    let header = new Array<HeaderList>();
    let username: HeaderList = {
      value: 'aluno',
      label: 'username',
    };
    let password: HeaderList = {
      value: 'fiapsecurity',
      label: 'password',
    };
    header.push(username, password);
    return this.conectorApi.getApiByHttpClient(
      'http://localhost:8080/api/produto',
      header
    );
  }

  logar(username: string, password: string) {

  }
}
