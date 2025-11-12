import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'John Rico S. Avila',
      course: 'BSIT',
      year: 3,
      age: 21,
      email: 'ricusempai@gmail.com',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Thomas Emmanuel R. Pajarillaga',
      course: 'BSIT',
      year: 3,
      age: 19,
      email: 'technowiz.thomas.iii.pajarillaga@gmail.com',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Mark Reyes',
      course: 'BSBA',
      year: 3,
      age: 20,
      email: 'mark.reyes@gmail.com',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Anna Cruz',
      course: 'BSEd',
      year: 1,
      age: 18,
      email: 'anna.cruz@gmail.com',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Paul Santos',
      course: 'BSIT',
      year: 4,
      age: 21,
      email: 'paul.santos@gmail.com',
      status: 'Inactive',
    },
    {
      id: 6,
      name: 'Lisa Tan',
      course: 'BSCS',
      year: 2,
      age: 19,
      email: 'lisa.tan@gmail.com',
      status: 'Active',
    },
    {
      id: 7,
      name: 'Carlos Lim',
      course: 'BSBA',
      year: 3,
      age: 20,
      email: 'carlos.lim@gmail.com',
      status: 'Active',
    },
    {
      id: 8,
      name: 'Maria Lopez',
      course: 'BSEd',
      year: 1,
      age: 18,
      email: 'maria.lopez@gmail.com',
      status: 'Inactive',
    },
    {
      id: 9,
      name: 'James Ong',
      course: 'BSIT',
      year: 4,
      age: 22,
      email: 'james.ong@gmail.com',
      status: 'Active',
    },
    {
      id: 10,
      name: 'Ella Ramos',
      course: 'BSCS',
      year: 3,
      age: 20,
      email: 'ella.ramos@gmail.com',
      status: 'Active',
    },
  ];

  constructor() {}

  getStudents() {
    return this.students;
  }
}
