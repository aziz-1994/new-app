import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  getStudent(){
    return this.http.get<Student[]>('http://localhost/angular_crud/list.php');
  }
  deleteStudent(id:number){
    return this.http.delete<Student[]>('http://localhost/angular_crud/delete.php?id=' + id);
  }
  createStudent(student: Student){
    return this.http.post('http://localhost/angular_crud/insert.php', student);
  }
  gteById(id:number){
    return this.http.get<Student[]>('http://localhost/angular_crud/getById.php?id=' + id);
  }

  updateStudent(student: Student){

  return this.http.put('http://localhost/angular_crud/update.php' + '?id=' + student.sId, student);
  }
}
