import { Component, ViewChild } from '@angular/core';
import { FollowersService } from '../../services';
import { IGitHubUser } from '../../models/interfaces';
import { NgModel } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable, of } from "rxjs";

/** Компонент для поиска подписчиков github по наименованию пользователя */
@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.scss'],
})
export class FollowersListComponent {
  @ViewChild('loginInput', { static: false })
  public loginInput!: NgModel;

  /** Значение поля с именем пользователя для поиска */
  public userNameToSearch: string = '';

  /** Наименование пользователя, для которого был осуществлён поиск */
  public currentUserName: string = '';

  /** Подписчики */
  public followers$: Observable<IGitHubUser[]> = of([]);

  constructor(
    private readonly followersService: FollowersService,
  ) { }

  /**
   * Найти подписчиков
   * Метод отрабатывает при событии клика на кнопке "Get followers"
   */
  public onSearchFollowers(): void {
    if (this.loginInput?.invalid || !this.userNameToSearch.length) return;

    this.followers$ = this.followersService.getFollowersFor(this.userNameToSearch)
      .pipe(
        tap(() => this.currentUserName = this.userNameToSearch)
      )
  }
}
