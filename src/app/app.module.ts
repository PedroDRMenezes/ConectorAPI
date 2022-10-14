import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './tampletes/navbar/navbar.component';
import { EmailsComponent } from './tampletes/emails/emails.component';
import { ProdutosComponent } from './tampletes/produtos/produtos.component';
import { CadastrarProdutosComponent } from './tampletes/cadastrar-produtos/cadastrar-produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmailsComponent,
    ProdutosComponent,
    CadastrarProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
