import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './nagevacao/home/home.component';
import { SobreComponent } from './nagevacao/sobre/sobre.component';
import { ContatoComponent } from './nagevacao/contato/contato.component';
import { MenuComponent } from './nagevacao/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    MenuComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
