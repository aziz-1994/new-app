import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private _studentService: StudentService,
    private router: Router) {
  }
  
  addForm: FormGroup;
  ngOnInit() {
    this.addForm=this.formBuilder.group({
      
      fname: ['', Validators.required],
      lname: ['', [Validators.required, Validators.maxLength(13)]], 
      email: ['', [Validators.required, Validators.maxLength(20)]],
    });
  } 
  
    onSubmit() {
      //console.log(this.addForm.value);
      this._studentService.createStudent(this.addForm.value)
      .subscribe (data => {
        this.router.navigate(['view']);
      });
    }
     
}
