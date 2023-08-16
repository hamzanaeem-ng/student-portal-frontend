import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRoutingModule } from './student.routing.module';
import { StudentListService } from './student-list/student-list.service';
import { StudentInfoModalComponent } from './student-info-modal/student-info-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenderDescriptionPipeModule } from '../core/pipes/gender-description.pipe';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentInfoModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    GenderDescriptionPipeModule
  ],
  providers: [
    StudentListService
  ]
})
export class StudentModule { }
