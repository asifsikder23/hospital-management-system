import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { MaterialModule } from './material/material/material.module';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddDoctorComponent } from './component/dashboard/doctor/add-doctor/add-doctor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    SidebarComponent,
    DoctorComponent,
    AddDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDqS1NBxyb5NQ462FnAWdgUfLRKpMHIQU4',
      authDomain: 'hospital-management-system23.firebaseapp.com',
      projectId: 'hospital-management-system23',
      storageBucket: 'hospital-management-system23.appspot.com',
      messagingSenderId: '585382712676',
      appId: '1:585382712676:web:0b96bfa7d5cc5c4c0d9671',
    }),
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
