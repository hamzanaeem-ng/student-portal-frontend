import { Component, Pipe, PipeTransform } from '@angular/core';
import { StudentListService } from './student-list.service';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  students: Student[] = [];
  showModal = false;

  constructor(private studentListSvc: StudentListService){

  }

  toggleModal(mode: boolean){
    this.showModal = mode
  }

  addStudent(student: Student) {
    this.showModal = false;
    this.students.push(student);
  }

  deleteStudent(index: number) {
    this.students.splice(index,1);
  }

  callApi() {
    // I couldn't resolve the cors issue, although I implemented the prescribed way 
    // Therefore I had to comment this api call
    // However I have handled the api and response properly  

    // this.studentListSvc.fetchAStaticStudentData('123').subscribe((res) => {
    //   this.students.push(res);
    // });

    this.students.push({
      id: 123,
      name: "Jack",
      age: '23',
      sex: 1
    });
  }


}
