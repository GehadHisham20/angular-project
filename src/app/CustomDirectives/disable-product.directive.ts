import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
})
export class DisableProductDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set disableProduct(disabled: boolean) {
    if (disabled) {
      this.renderer.addClass(
        this.element.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
