import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import {finalize} from 'rxjs/operators'
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private spinner:PostsService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.abrirSpinner()
    return next.handle(req).pipe(
      finalize(()=>{
        this.spinner.cerrarSpinner()
      })
    )
  }
}
