import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup

  constructor(private _builder: FormBuilder){
    this.formGroup = this._builder.group({
      user: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

  onSubmit(form: any){
    alert(`User: ${form.user}\nPassword: ${form.password}`)
  }
}
