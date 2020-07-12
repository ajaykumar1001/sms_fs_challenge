import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  startdate;
  endDate;
  sortBy;
  itemsArray= [];
  constructor(private restApiService: ApiService) { }

  ngOnInit() {
    this.restApiService.getAllSms().subscribe(data => {
      if (data.success) {
        this.itemsArray = data.data;
      } else {
        
      }
    },
      error => {       
      }
    );
  }

  onClickField(field){
    this.sortBy = field
    this.restApiService.getSmsSortBy(this.sortBy,this.startdate,this.endDate).subscribe(data => {
      if (data.success) {
        this.itemsArray = data.data;
        this.sortBy = null;
      } else {
        this.sortBy = null;
      }
    },
      error => {   
        this.sortBy = null;    
      }
    );
  }

  search(start_date,end_date){
    this.startdate = moment.utc(start_date._selected).local().format('MM/DD/YYYY');
    this.endDate = moment.utc(end_date._selected).local().format('MM/DD/YYYY');
    this.restApiService.getSmsByDateRange(this.startdate,this.endDate).subscribe(data => {
      if (data.success) {
        this.itemsArray = data.data;
      } else {
      }
    },
      error => {   
      }
    );
   }

}
