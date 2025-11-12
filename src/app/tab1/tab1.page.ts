import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}
