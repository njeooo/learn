import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat';
import { Publication } from './publication.model';

@Injectable()
export class PublicationService {

  constructor(private http:HttpClient) {}
  private posts = 'api/publication';
  getPosts(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.posts); 
  }

}
