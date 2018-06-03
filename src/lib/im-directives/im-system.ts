import { HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector: '[imSystem]',
})
export class ImSystemDirective {
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) {
        this.render.addClass(this.ele.nativeElement, 'im-system');
    }
}
