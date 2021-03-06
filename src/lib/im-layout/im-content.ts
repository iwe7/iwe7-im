import { Injector } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { TemplateRef } from '@angular/core';
import { ImOutletComponent } from './../im-outlet/im-outlet';
import { Directive, Optional, AfterViewInit, Input } from '@angular/core';
import { Iwe7CoreComponent } from 'iwe7-core';

@Directive({
    selector: '[imContent],[imContentOf]'
})
export class ImContentDirective extends Iwe7CoreComponent {
    @Input() imContentOf: any[] = [];
    @Input() imContentTemplate: TemplateRef<any>;
    constructor(
        @Optional()
        public outlet: ImOutletComponent,
        @Optional()
        public template: TemplateRef<any>,
        injector: Injector
    ) {
        super(injector);
        if (this.outlet) {
            this.getCyc('ngOnChanges').subscribe(res => {
                this.outlet.setContent(this.imContentOf, this.imContentTemplate || this.template);
            });
        }
    }
}
