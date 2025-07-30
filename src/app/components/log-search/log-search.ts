import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-search',
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './log-search.html',
  styleUrl: './log-search.scss',
})
export class LogSearch {
  searchForm: FormGroup;
  logs: any[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.searchForm = this.fb.group({
      vehicleId: [''],
      errorCode: [''],
      from: [''],
      to: [''],
    });
  }

  search() {
    const { vehicleId, errorCode, from, to } = this.searchForm.value;
    console.log('Search parameters:', { vehicleId, errorCode, from, to });
    // let params = new HttpParams();
    // if (vehicleId) {
    //   params = params.set('vehicleId', vehicleId);
    // }
    // if (errorCode) {
    //   params = params.set('errorCode', errorCode);
    // }
    // if (from) {
    //   params = params.set('from', from);
    // }
    // if (to) {
    //   params = params.set('to', to);
    // }
    // this.logs = []; // Clear previous logs
    // this.http
    //   .get<any[]>('http://localhost:3000/logs', { params })
    //   .subscribe((res) => {
    //     this.logs = res;
    //   });
  }
}
