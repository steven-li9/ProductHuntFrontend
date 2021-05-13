import { Component} from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { MY_FORMATS} from 'src/app/model/date-format.constant';
import { Post } from 'src/app/model/posts.interface';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-hunt-date',
  templateUrl: './product-hunt-date.component.html',
  styleUrls: ['./product-hunt-date.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ProductHuntDateComponent {

  posts : Array<Post> = new Array()
  date : Moment;
  constructor(private apiService : ApiService) { 
    this.date = moment()
  }

  fetchAPI(){
    this.apiService.getProductsByDate(this.DateToString()).then((res)=>{
      if(res.status == 200){
        this.posts = res.response.results
      }
    })
  }

  DateToString(){
    return this.date.year()+'-'+this.date.month()+'-'+this.date.date()
  }
}

