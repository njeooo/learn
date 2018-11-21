import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Publication } from './publication.model';
import { PublicationService } from './publication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Publication Posts";
  ngOnInit(){

  }
    // MatPaginator Inputs
    length = 10;
    pageSize = 2;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    pageEvent: PageEvent;
    datasource = [];
    posts:Publication[] = [];
    postsdata = [];

    constructor(private  service: PublicationService) {
      this.getPost(); 
    }

    getPost() {
      this.service.getPosts().subscribe(
      res => {
        this.posts = res; 
        console.log('res is ', res);
        this.datasource.push(this.posts);
        this.postsdata = this.datasource.slice(0,this.pageSize);
        console.log(this.postsdata);
      }); 
   } 

    setPageSizeOptions(setPageSizeOptionsInput: string) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  
    onPageChanged(e) {
      let firstCut = e.pageIndex * e.pageSize;
      let secondCut = firstCut + e.pageSize;
      this.postsdata = this.datasource.slice(firstCut, secondCut);
    }
}
