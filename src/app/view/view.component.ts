import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  student: Student[];
  _id: any;
  
  
  constructor(private _StudentService:StudentService ,
    private router:Router
    ) { }

  ngOnInit() {
    this._StudentService.getStudent()
    .subscribe((data:Student[]) => {
      this.student=data;
      console.log(this.student);
    });
  }
   delete(student: Student): void{
     this._StudentService.deleteStudent(student.sId)
         .subscribe(data => {
       this.student = this.student.filter(u => u !== student);
     });
    
   }
   edit(student: Student){
     this._id = student.sId;
     this.router.navigate(['edit/'+this._id]);
   }

}
