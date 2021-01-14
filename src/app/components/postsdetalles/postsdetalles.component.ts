import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Usuario } from 'src/app/models/usuario';
import { PostService } from 'src/app/services/post.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-postsdetalles',
  templateUrl: './postsdetalles.component.html',
  styleUrls: ['./postsdetalles.component.css']
})
export class PostsdetallesComponent implements OnInit {

  post:Post=new Post()
  usuario:Usuario=new Usuario()

  constructor(private postService:PostService, private postsService: PostsService) { }

  ngOnInit(): void {
    this.post=this.postService.post
    this.postsService.getUsuario(this.post.userId).subscribe(usuario=>{
      this.usuario=usuario
    })
  }

}
