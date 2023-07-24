import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student: any = {};

  constructor(private http: HttpClient) { }

  addStudent() {
    this.http.post('https://6425c05c556bad2a5b4201da.mockapi.io/students', this.student)
      .subscribe(() => {
        // Clear form fields
        this.student = {};
        // Display success message or perform any other action
      });
  }
}

