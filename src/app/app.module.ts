import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardSymbolComponent } from './components/card-symbol/card-symbol.component';
import { MenuComponent } from './components/menu/menu.component';
import { SymbolPickerComponent } from './components/symbol-picker/symbol-picker.component';
import { HomeComponent } from './pages/home/home.component';
import { TotemComponent } from './pages/totem/totem.component';


@NgModule({
  declarations: [
    AppComponent,
    CardSymbolComponent,
    TotemComponent,
    HomeComponent,
    MenuComponent,
    SymbolPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
