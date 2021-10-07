import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle( //not a good method
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }

  @HostListener("mouseenter") mouseover(eventdata: Event) {
    // this.renderer.setStyle(     //not needed in case of hostBinding
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = "blue";
  }

  @HostListener("mouseleave") mouseleave(eventdata: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = "transparent";
  }
}
