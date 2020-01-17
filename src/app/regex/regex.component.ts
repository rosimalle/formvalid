import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-regex',
  templateUrl: './regex.component.html',
  styleUrls: ['./regex.component.css']
})
export class RegexComponent implements OnInit {
  submitted= false;

  constructor(private formbuilder:FormBuilder) { }
  myfm:FormGroup;
  

  ngOnInit() {
    this.myfm = this.formbuilder.group({
    fname: ['' , Validators.pattern('^[a-zA-Z ]*$')],
    lname:['' , Validators.required],
    email:['' , [Validators.required , Validators.email , 
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    phone:['', [Validators.required, Validators.pattern('^[7-9][0-9]{8,9}$')]]
    })
  }
  get fn() {return this.myfm.controls}
  onsubmitt(){
    this.submitted = true;
    if(this.myfm.invalid){
      return
    }
    alert('success')
  }
  mdate=new Date().toISOString().slice(0,10)
}
