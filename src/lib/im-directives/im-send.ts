import { onTap } from 'iwe7-util';
import { HostBinding, ElementRef, Renderer2, Optional } from '@angular/core';
import { Directive } from '@angular/core';
import { ImFormComponent } from '../im-form/im-form';

@Directive({
    selector: '[imSend]',
})
export class ImSendDirective {
    constructor(
        public ele: ElementRef,
        public render: Renderer2,
        @Optional()
        public form: ImFormComponent
    ) {
        this.render.addClass(this.ele.nativeElement, 'im-send');
        onTap(this.ele.nativeElement).subscribe(res => {
            this.form.send(res);
        });
    }
}
