import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Optional } from '@angular/core';
import { ImOutletComponent } from '../im-outlet/im-outlet';

@Component({
    selector: 'im-form',
    templateUrl: 'im-form.html',
    styleUrls: ['./im-form.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ImFormComponent implements OnInit {
    form: FormGroup;
    constructor(
        public fb: FormBuilder,
        @Optional()
        public outlet: ImOutletComponent
    ) {
        this.form = this.fb.group({
            content: ['', Validators.required]
        });
    }
    ngOnInit() { }

    send(res: any) {
        this.outlet.sendMsg(this.form.value).subscribe(res => {
            console.log('发送成功');
        });
        this.reset();
    }

    reset() {
        this.form.reset({
            content: ''
        });
    }
}
