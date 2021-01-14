import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioActivo:boolean=false
  usuarios: Array<Usuario> = new Array<Usuario>()
  

  formPost:FormGroup;

  constructor(private _FormPost:FormBuilder, private postsService: PostsService) { }

  ngOnInit(): void {
    this.formPost=this._FormPost.group({
      title:['',Validators.required],
      body:['',Validators.required],
      userId:['Seleccione un cliente',],
      id:['101']
    })

    this.postsService.getUsuarios().subscribe(res=>{
      this.usuarios=res
      console.log(this.usuarios)
    })

  }

  enviarPost(){
    this.postsService.guardarPost(this.formPost.value).subscribe(res=>{
      console.log(res)
    })
  }

}
