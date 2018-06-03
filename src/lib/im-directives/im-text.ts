import { HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({ selector: '[imText]' })
export class ImTextDirective {
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) {
        this.render.addClass(this.ele.nativeElement, 'im-text');
    }
}
