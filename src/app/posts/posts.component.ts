import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private allPosts: any[];
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.allPosts = response.json()
      })
  }
  createPost(input: HTMLInputElement){
    let post = { title: input.value}
    input.value = '';
    this.service.createPost(post)
      .subscribe(Response => {
        post['id'] = Response.json().id;
        this.allPosts.splice(0,0,post)
        console.log(Response)
      },(error:AppError) => {
        if(error instanceof BadInput)
          console.log("error on form")
        else throw error;
      })
  }
  updatePost(post){
    this.service.updatePost(post)
      .subscribe(Response => {
        // console.log(Response.json())
        let index = this.allPosts.indexOf(post)
        this.allPosts[index].isRead = true;
      })
  }
  deletePost(post){
    this.service.deletePost(451)
      .subscribe(response => {
        let index = this.allPosts.indexOf(post)
        this.allPosts.splice(index,1)
      },(error:AppError )  => {
        if(error instanceof NotFoundError)
          alert("already deleted")
        else throw error
      })
  }

}
