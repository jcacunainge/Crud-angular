import { Injectable } from '@angular/core';

// Importamos los módulos para DB con firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Importamos nuestro modelo

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private angularFirestore: AngularFirestore) { }
  //Metodos para el CRUD

  //Traer todos los documentos
  getPost(){
    return this.angularFirestore
            .collection("posts")
            .snapshotChanges()
  }
  //Metodo para traer un solo documento
  getPostById(id){
      return this.angularFirestore
        .collection("posts")
        .doc(id)
        .valueChanges()
  }
  //Metodo para crear 
  createPost(post: Post){
          return new Promise<any> ((resolve, reject) =>{
            this.angularFirestore
            .collection("posts")
            .add(post)
            .then((response)=>{
              console.log(response) 
            },
            (error)=>{
              reject(error)
            })
          })
  }

  //Metodo para actualizar
  updatedPost(post: Post, id) {
    return this.angularFirestore
      .collection("posts")
      .doc(id)
      .update({
        title: post.Titulo,
        contenido: post.Contenido,
        autor: post.Autor
      });
  }
  //Metodo para eliminar
  deletePost(post){
    return this.angularFirestore
    .collection("posts")
    .doc(post.id)
    .delete()
  }
}
