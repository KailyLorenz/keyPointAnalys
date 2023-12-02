import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Subscription} from "rxjs";

@Component({
  selector: 'kpd-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm!: FormGroup;
  subscription: Subscription | undefined

  constructor(private userService: UserService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup( {
      'name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null, Validators.required),
      'message': new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(): void {
    this.contactForm.disable();
    console.log(this.contactForm.value)
    this.subscription = this.userService.sendContactMe(this.contactForm.value).subscribe(
      (res: any) => {
        console.log('res', res)
        this.contactForm.reset()
      },
      (error: Error) => console.log(error)
    )
    this.contactForm.reset()
  }
}
