import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContatoComponent } from "./nagevacao/contato/contato.component";
import { HomeComponent } from "./nagevacao/home/home.component";
import { MenuComponent } from "./nagevacao/menu/menu.component";
import { SobreComponent } from "./nagevacao/sobre/sobre.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Contato', component: ContatoComponent },
    { path: 'Menu', component: MenuComponent },
    { path: 'Sobre', component: SobreComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}