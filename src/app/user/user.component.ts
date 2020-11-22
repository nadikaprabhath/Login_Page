import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../_service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  formData:any;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
  }

  userForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    address:['',Validators.required],
    birthday:['',Validators.required],
    gender:['',Validators.required],
  });

  async submit(){
    if(!this.userForm.get('firstName').valid){
      alert('First Name Required');
    }
    else if(!this.userForm.get('lastName').valid){
      alert('Last Name Required');
    }
    else if(!this.userForm.get('address').valid){
      alert('Address Required');
    }
    else if(!this.userForm.get('gender').valid){
      alert('Gender Required');
    }
    else if(!this.userForm.get('birthday').valid){
      alert('Birthday Required'); 
    }
    else {
      this.api.addUser(this.userForm.value);
    }
  }

}
