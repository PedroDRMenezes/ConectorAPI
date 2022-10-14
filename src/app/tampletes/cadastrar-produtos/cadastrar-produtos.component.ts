import { Component, OnInit } from '@angular/core';
import { AppApiService } from 'src/app/core/app-api.service';
import { Products } from '.././../interfaces/products';
import { FormBuilder, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  form: FormGroup

  constructor(
    private appApiService: AppApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    })
  }

  ngOnInit(): void {
  }
  cadastrar(){

    this.appApiService.postProduct(this.form.value).subscribe(result => console.log(result))
    this.router.navigate(['/produtos'])

  }
}
