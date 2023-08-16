import { Injectable } from "@angular/core";
import { HttpRequestService } from "src/app/core/services/http-request.service";
import { StudentModule } from "../student.module";
import { Student } from "src/app/core/models/student.model";
import { Observable } from "rxjs";

@Injectable()
export class StudentListService {
    constructor(private http: HttpRequestService ){
      
    }

    fetchAStaticStudentData(studentId: string): Observable<Student> {
      return this.http.getWithParams('main/getStudentById', {id: studentId});
    }
}
