import { Component, ViewChild } from '@angular/core';
import { FollowersService } from '../../services';
import { IGitHubUser } from '../../models/interfaces';
import { take } from 'rxjs';
import { NgModel } from '@angular/forms';

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
  public followers: IGitHubUser[] = [];

  constructor(
    private readonly followersService: FollowersService,
  ) { }

  /**
   * Найти подписчиков
   * Метод отрабатывает при событии клика на кнопке "Get followers"
   */
  public onSearchFollowers(): void {
    if (this.loginInput?.invalid || !this.userNameToSearch.length) return;

    this.followersService.getFollowersFor(this.userNameToSearch)
      .pipe(take(1))
      .subscribe((followers: IGitHubUser[]) => {
        this.followers = followers;
        this.currentUserName = this.userNameToSearch;
      })
  }

}
