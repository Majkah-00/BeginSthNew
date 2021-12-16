import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {

  form = this.fb.group({
    email: [''],
    name: [''],
    surname: [''],
    phone: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form.disable();
  }

}
