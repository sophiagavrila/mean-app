import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{

  enteredValue = ''
  newPost = '';

  onAddPost() { // this allows us to use the # in Angular
    this.newPost = this.enteredValue;
  }

}
