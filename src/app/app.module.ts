import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importamos las clases para trabajar con firestore
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

//Importamos la configuración de firebase
// import { environment } from 'src/environments/environment';

//Componentes
import { SwowComponent } from './components/swow/swow.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SwowComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
