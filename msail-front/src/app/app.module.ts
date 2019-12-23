import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoureurListComponent } from './component/coureur-list/coureur-list.component';
import { CoureurServiceService } from './services/coureur-service.service';
import { RegateService } from './services/regate.service';
import { RegateListComponent } from './component/regate-list/regate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoureurListComponent,
    RegateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CoureurServiceService,RegateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
