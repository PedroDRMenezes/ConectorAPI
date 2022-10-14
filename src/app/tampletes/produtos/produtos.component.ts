import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppApiService } from 'src/app/core/app-api.service';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  products:any;
 


  constructor(
    private appApiService: AppApiService,
  ) { }

  ngOnInit(): void {
    this.appApiService.getAllProducts().subscribe(
      (data) => {
        console.log(data)
        this.products = data
      },
      (error) => {
        console.log(error)
      })
  }



}
