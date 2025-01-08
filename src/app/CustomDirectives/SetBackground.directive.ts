import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  //   private element: ElementRef;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    //     this.element = element;
  }

  // aliasing
  @Input('setBackground') background_textColor: {
    backgroundColor: string;
    color?: string;
  } = { backgroundColor: '#36454F', color: '#fff' };
  ngOnInit() {
    //     this.element.nativeElement.style.backgroundColor = '#36454F';
    //     this.element.nativeElement.style.color = '#fff';
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.background_textColor.backgroundColor
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      this.background_textColor.color
    );
  }
}
