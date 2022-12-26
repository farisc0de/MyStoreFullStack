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
  cardName: any;
  cardNumber: any;
  cardExpDate: any;
  cvv: any;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cardExpDate: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.createForm.invalid) {
      let form = {
        firstName: this.createForm.get('firstName')?.value,
        lastName: this.createForm.get('lastName')?.value,
      };
      this.userInfo.emit(form);
    }
  }
}
