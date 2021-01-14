import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { PostComponent } from './components/posts/post.component';
import { PostsdetallesComponent } from './components/postsdetalles/postsdetalles.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './appRouting.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormularioComponent } from './components/formulario/formulario.component'
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsdetallesComponent,
    HeaderComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
