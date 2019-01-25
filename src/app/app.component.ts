import { Component, OnInit } from "@angular/core";
// import the json service
import { JsonService } from "./json.service";
// import the post model
import { Post } from "./post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // inject the json service
  constructor(private jsonService: JsonService) {}

  // data holder for the array of posts
  posts: Post[];
  // data holder for the post to be created
  post: Post = new Post();

  // method that subscribes to the service getPosts
  // adds the response to the local posts array
  getPosts(): void {
    this.jsonService.getPosts().subscribe(posts => (this.posts = posts));
  }

  // metho that sends the post model to the service and gets a response
  // adds to the end of the posts array
  addPost(): void {
    this.jsonService
      .addPost(this.post)
      .subscribe(post => (this.posts = [...this.posts, post]));
    this.post = new Post();
  }

  ngOnInit(): void {
    // get the list of posts when the component loads
    this.getPosts();
  }
}
