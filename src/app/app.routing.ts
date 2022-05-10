import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

// Component
import { DigmonDetalhesComponent } from './digmon-detalhes/digmon-detalhes.component'
// import { ConsultaContatosComponent } from './components/consulta-contatos/consulta-contatos.component';
// import { EdicaoContatosComponent } from './components/edicao-contatos/edicao-contatos.component';


//mapeamento rota do projeto
const routes : Routes = [
    {path: ' ', pathMatch: 'full', redirectTo: 'consulta-contatos'},
    // {path: 'cadastro-contatos', component: CadastroContatosComponent},
    {path: 'consulta-contatos', component: DigmonDetalhesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
    })

export class AppRountingModule{}