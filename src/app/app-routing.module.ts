import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutosComponent } from './tampletes/cadastrar-produtos/cadastrar-produtos.component';
import { EmailsComponent } from './tampletes/emails/emails.component';
import { ProdutosComponent } from './tampletes/produtos/produtos.component';

const routes: Routes = [
  { path: '', redirectTo: 'emails', pathMatch: 'full' },
  { path: 'emails', component: EmailsComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'cadastrar-produtos', component: CadastrarProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
