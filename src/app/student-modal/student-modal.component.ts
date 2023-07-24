import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../students';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent {
  student: any
  @Input() id: any;


  constructor(private http: HttpClient) { }

  ngOnChanges() {
    console.log(this.id)
    this.http.get<Students[]>(`https://6425c05c556bad2a5b4201da.mockapi.io/students/${this.id}`)
      .subscribe(data => {
      this.student = data;
      });
  }

  resetState() {
    this.id = "";
    this.student = null;
    }

    ngOnDestroy() {
      this.resetState();
      }
}
