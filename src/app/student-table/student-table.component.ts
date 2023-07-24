import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../students';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  students: Students[]=[]
  id: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('https://6425c05c556bad2a5b4201da.mockapi.io/students')
      .subscribe(data => {
        this.students = data;
      });
  }

  getId(id:any){
    this.id = id
  }
  }

