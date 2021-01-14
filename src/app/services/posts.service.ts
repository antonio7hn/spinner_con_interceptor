import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { promise } from 'protractor';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public posts:Array<Post>=new Array<Post>()

  constructor(private spinner: NgxSpinnerService,private http:HttpClient) { }

  abrirSpinner(){
    this.spinner.show()
  }

  cerrarSpinner(){
    this.spinner.hide();
  }



  async getPosts()
  {
    console.log("Valor de post antes de la peticion",this.posts)
    if(this.posts.length>0) return this.posts
    this.posts= await this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts").toPromise()
    console.log("Valor de post despues de la peticion",this.posts)
    return this.posts
  }

  // getPosts(): Observable<Post[]>
  // {
  //   return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  // }

  getUsuario(id:number): Observable<Usuario>
  {
    return this.http.get<Usuario>("https://jsonplaceholder.typicode.com/users/"+id)
  }

  getUsuarios():Observable<Usuario[]>
  {
    return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users/')
  }

  guardarPost(post:Post):Observable<Post>
  {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts',post)
  }

  editarPost(id:number,post:Post): Observable<Post>
  {
    return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/'+id, post)
  }

  eliminarPost(id:number):Observable<any>
  {
    return this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/'+id)
  }

}
