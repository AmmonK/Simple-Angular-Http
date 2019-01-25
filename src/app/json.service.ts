import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Post } from "./post";

@Injectable({
  providedIn: "root"
})
export class JsonService {
  // url for json placeholder api
  private url: string = "http://jsonplaceholder.typicode.com/posts";

  // inject httpclient
  constructor(private http: HttpClient) {}

  // get a list of posts from the api, consumer needs to call .subscribe()
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  // send a post to the api, consumer needs to call .subscribe()
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  }
}
