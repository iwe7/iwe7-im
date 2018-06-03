import { Observable } from 'rxjs';
import { tap, takeWhile, map, switchMap } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { ViewContainerRef, TemplateRef, ChangeDetectionStrategy, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Iwe7CoreComponent } from 'iwe7-core';
import { BetterScrollDirective } from 'iwe7-better-scroll';
@Component({
    selector: 'im-outlet',
    templateUrl: 'im-outlet.html',
    styleUrls: ['./im-outlet.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImOutletComponent extends Iwe7CoreComponent {
    @ViewChild('imHeader', { read: ViewContainerRef }) imHeader: ViewContainerRef;
    @ViewChild('imFooter', { read: ViewContainerRef }) imFooter: ViewContainerRef;

    @ViewChild('tpl', { read: TemplateRef })
    set tpl(tpl: TemplateRef<any>) {
        this.template = tpl;
    }
    @Input() list: any[] = [];
    template: TemplateRef<any>;

    @Input() avatar: string = 'https://ustbhuangyi.github.io/better-scroll/static/img/fall.0e0be3c.jpeg';
    @Input() nickname: string = '小明';

    // 获取最新消息地址
    @Input() getMsgUrl: string;
    // 发送消息地址
    @Input() sendMsgUrl: string;

    @ViewChild(BetterScrollDirective) betterScroll: BetterScrollDirective;
    constructor(public cd: ChangeDetectorRef) {
        super();
    }

    setContent(list: any, tpl: TemplateRef<any>) {
        this.getCyc('ngAfterViewInit').subscribe(() => {
            this.list = list;
            const now = new Date();
            this.list.push({
                type: 'system',
                content: now.getMonth() + '月' + now.getDate() + '日 ' + now.getHours() + '点' + now.getMinutes() + '分'
            });
            if (tpl) {
                this.template = tpl;
            }
            this.cd.markForCheck();
        });
    }

    attachImHeader(tpl: TemplateRef<any>) {
        this.getCyc('ngAfterViewInit').subscribe(res => {
            this.imHeader.createEmbeddedView(tpl);
        });
    }

    attachImFooter(tpl: TemplateRef<any>) {
        this.getCyc('ngAfterViewInit').subscribe(res => {
            this.imFooter.createEmbeddedView(tpl);
        });
    }

    sendMsg(msg: any): Observable<any> {
        return Observable.create((observer: any) => {
            this.list.push({
                type: 'mine',
                avatar: this.avatar,
                nickname: this.nickname,
                ...msg
            });
            this.cd.markForCheck();
            setTimeout(() => {
                observer.next();
                observer.complete();
            }, 1000);
        });
    }
}
