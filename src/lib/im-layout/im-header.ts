import { TemplateRef } from '@angular/core';
import { ImOutletComponent } from './../im-outlet/im-outlet';
import { Directive, Optional, AfterViewInit } from '@angular/core';

@Directive({ selector: '[imHeader]' })
export class ImHeaderDirective {
    constructor(
        @Optional()
        public outlet: ImOutletComponent,
    ) {
    }
}
