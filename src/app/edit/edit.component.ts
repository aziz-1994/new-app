import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router,Params,ActivatedRoute } from '@angular/router';
import { Student } from '../student';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private _studentService: StudentService,
    private router: Router,
    private routes: ActivatedRoute) {
  }
  addForm: FormGroup;
  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
    //console.log(routeParams.id)
    

    this.addForm=this.formBuilder.group({
      sId: [''],
      fname: ['', Validators.required],
      lname: ['', [Validators.required, Validators.maxLength(13)]], 
      email: ['', [Validators.required, Validators.maxLength(20)]],
    });
    this._studentService.gteById(routeParams.id).subscribe((data:any) => {
      //console.log(data)
      this.addForm.patchValue(data);
    });

  }
  update(){
    //console.log(this.addForm.value);
    this._studentService.updateStudent(this.addForm.value).subscribe(() => {
    this.router.navigate(['view']);
   },
   error => {
     alert(error);
   });
   
  }
}
