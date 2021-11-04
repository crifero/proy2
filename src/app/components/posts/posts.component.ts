import { Component, OnInit } from '@angular/core';
import { PostsphService } from 'src/app/services/postsph.service';
import { Postsinterface } from './postsinterface';

@Component({
  selector: 'unimi-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:Postsinterface[];
  show:boolean =true;
  constructor(private postsService:PostsphService) { }

  ngOnInit(): void {
    this.postsService.getposts().subscribe(data =>{this.posts=data;
       console.log(this.posts)});
  }
 
  mostrarlista(){
    this.show=!this.show
  }
}
