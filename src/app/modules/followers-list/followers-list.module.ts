import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FollowersListComponent } from './components';
import { LoginValidatorDirective } from './directives';

/** Модуль списка подписчиков */
@NgModule({
  declarations: [
    FollowersListComponent,
    LoginValidatorDirective
  ],
  exports: [
    FollowersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FollowersListModule { }
