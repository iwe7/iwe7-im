import { HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({ selector: '[imAvatar]' })
export class ImAvatarDirective {
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) {
        this.render.addClass(this.ele.nativeElement, 'im-avatar');
    }
}
