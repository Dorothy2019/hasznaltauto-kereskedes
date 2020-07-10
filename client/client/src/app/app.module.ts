import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatiereApiService } from './services/matieres-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatieresComponent } from './components/matieres/matieres.component';
import { ToastrModule } from 'ngx-toastr';
import { AddMatiereComponent } from './components/add-matiere/add-matiere.component';

@NgModule({
  declarations: [
    AppComponent,
    MatieresComponent,
    AddMatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [MatiereApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
