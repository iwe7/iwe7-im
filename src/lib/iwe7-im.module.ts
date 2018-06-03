import { ImFormComponent } from './im-form/im-form';
import { ImNicknameDirective } from './im-directives/im-nickname';
import { ImMineDirective } from './im-directives/im-mine';
import { ImSystemDirective } from './im-directives/im-system';
import { ImContentDirective } from './im-layout/im-content';
import { ImHeaderDirective } from './im-layout/im-header';
import { CommonModule } from '@angular/common';
import { ImOutletComponent } from './im-outlet/im-outlet';
import { NgModule } from '@angular/core';
import { Iwe7BetterScrollModule } from 'iwe7-better-scroll';
import { ImFooterDirective } from './im-layout/im-footer';
import { ImAvatarDirective } from './im-directives/im-avatar';
import { ImMessageDirective } from './im-directives/im-message';
import { ImTextDirective } from './im-directives/im-text';
import { ImSendDirective } from './im-directives/im-send';
import { ReactiveFormsModule } from '@angular/forms';

export const ImComponents = [
  ImOutletComponent,
  ImFormComponent
];
export const ImDirectives = [
  ImHeaderDirective,
  ImFooterDirective,
  ImContentDirective,
  ImSystemDirective,
  ImMineDirective,
  ImAvatarDirective,
  ImMessageDirective,
  ImTextDirective,
  ImNicknameDirective,
  ImSendDirective
];

@NgModule({
  imports: [
    CommonModule,
    Iwe7BetterScrollModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...ImComponents,
    ...ImDirectives
  ],
  exports: [
    ...ImComponents,
    ...ImDirectives
  ]
})
export class Iwe7ImModule { }
