import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
})
export class UserinfoComponent implements OnInit {
  @Output() userInfo = new EventEmitter();
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  firstName: any;
  lastName: any;
  emailAddress: any;
  cardNumber: any;
  cvv: any;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstName: '',
      lastName: '',
      emailAddress: '',
      cardNumber: '',
      cvv: '',
    });
  }

  onSubmit() {
    let form = {
      firstName: this.createForm.get('firstName')?.value,
      lastName: this.createForm.get('lastName')?.value,
    };
    this.userInfo.emit(form);
  }
}
