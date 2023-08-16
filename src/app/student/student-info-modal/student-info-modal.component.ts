import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student, StudentForm } from 'src/app/core/models/student.model';

@Component({
  selector: 'student-info-modal',
  templateUrl: './student-info-modal.component.html',
  styleUrls: ['./student-info-modal.component.scss'],
})
export class StudentInfoModalComponent {
  studentForm: FormGroup = new FormGroup<StudentForm>({
    name: new FormControl(null, Validators.required, ),
    age: new FormControl(null, Validators.required),
    sex: new FormControl(null, Validators.required),
  });
  showError = false;
  @Output() studentInfoEmittter = new EventEmitter<Student>();
  constructor() {}

  submit() {
    if (this.studentForm.valid) {
      this.showError = false;
      this.studentInfoEmittter.emit(this.studentForm.value);
    } else {
      this.showError = true;
    }
  }
}
