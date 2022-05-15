import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundBlock]'
})
export class RoundBlockDirective {

  constructor(renderer : Renderer2, elRef: ElementRef) {
    renderer.setStyle(elRef.nativeElement, 'border-radius', '100px')
   }
  

}
