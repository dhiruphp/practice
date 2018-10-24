import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMessage]'
})
export class ErrorMessageDirective implements OnInit {
  private element:any;
  constructor(private el:ElementRef) {
   
      this.element = el.nativeElement;
   }
   @Input('appErrorMessage') highlightColor: string;
   @Input('submit') sub:boolean;
   ngOnInit() {
    console.log(this.sub);
   }
}
