import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
import {Subscription} from "rxjs";
import {Toast} from 'bootstrap'

@Component({
  selector: 'kpd-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  @ViewChild('myToast', {static:true}) toastEl!: ElementRef<HTMLDivElement>;
  subscriptionMessageForUser: Subscription | undefined
  toast: any
  messageForUser!: string;
  contactForm!: FormGroup;

  constructor(private userService: UserService,) { }

  ngOnInit(): void {
    this.toast = new Toast(this.toastEl.nativeElement,{})
    this.contactForm = new FormGroup( {
      'name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null, Validators.required),
      'message': new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(): void {
    this.contactForm.disable();
    this.subscriptionMessageForUser = this.userService.sendContactMe(this.contactForm.value).subscribe(
      (res: any) => {
        this.contactForm.reset()
        this.show()
        this.messageForUser = 'Прекрасное начало! Мы получили Ваше письмо'
        this.contactForm.enable()

      },
      (error: Error) => {
        this.messageForUser = 'Something went wrong'
        this.show()
        console.log(error)
      }
    )
  }
  show(){
    this.toast!.show();
  }

  ngOnDestroy(): void {
    this.subscriptionMessageForUser?.unsubscribe()
  }
}
