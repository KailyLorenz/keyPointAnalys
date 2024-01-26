import {Directive, ElementRef, HostListener, Input} from "@angular/core";
import {UtilsService} from "../services/utils.service";

@Directive({
  selector: '[kpdNavbar]'
})
export class DropdownDirective {
  @Input() kpdNavbarCollapsed!: boolean;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if ((event.target as HTMLElement).closest('#navbarButton')) {
      return
    }
    if (!this.elRef.nativeElement.contains(event.target) && this.kpdNavbarCollapsed) {
      this.utilsService.setNavbarCollapsed(false)
    }
  }
  constructor(private elRef: ElementRef,
              private utilsService: UtilsService) {}

}
