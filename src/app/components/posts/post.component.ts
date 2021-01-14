import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:Array<Post>=new Array<Post>()

  constructor(private postsService: PostsService, private postService: PostService, private ruta:Router) { }

  ngOnInit(){
   
    // this.postsService.abrirSpinner()
    this.obtenerPost()
    // this.postsService.cerrarSpinner()
      // this.spinner.hide();
  }

  async obtenerPost(){
      //   setTimeout(() => {
      // /** spinner ends after 5 seconds */
      this.postsService.getPosts().then(p=>{
        this.posts=p
      })
    // }, 5000);
  }


  irPostsDetalles(post){
    this.postService.post=post
    this.ruta.navigateByUrl('postsdetalles')
  }

  // newPost:Post={
  //   title:'Mi nuevo post',
  //   body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cupiditate corporis tenetur dol',
  //   userId: 1,
  //   id: 100
  // }

  editPost:Post={
    title:'Post editado',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cupiditate corporis tenetur dol',
    userId: 1,
    id: 50
  }

  // guardarPost(){
  //   this.postsService.guardarPost(this.newPost).subscribe(post=>{
  //     console.log(post)
  //   })
  // }

  editarPost(id:number){
    this.postsService.editarPost(id,this.editPost).subscribe(post=>{
      console.log(post)
    })
  }
  eliminarPost(id:number){
    this.postsService.eliminarPost(id).subscribe(res=>{
      console.log(res)
    })
  }


}
