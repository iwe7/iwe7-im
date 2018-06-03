import { TemplateRef } from '@angular/core';
import { ImOutletComponent } from './../im-outlet/im-outlet';
import { Directive, Optional, AfterViewInit } from '@angular/core';

@Directive({ selector: '[imFooter]' })
export class ImFooterDirective {
    constructor(
        @Optional()
        public outlet: ImOutletComponent
    ) {
    }
}
