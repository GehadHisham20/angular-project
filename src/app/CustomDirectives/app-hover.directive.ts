import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282B';
  @HostBinding('style.color') color: string = '#fff';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor = '#fff';
    this.color = '#28282B';
    this.border = 'solid 3px #28282B';
  }

  @HostListener('mouseout') OnMouseOut() {
    this.backgroundColor = '#28282B';
    this.color = '#fff';
    this.border = 'none';
  }
}
