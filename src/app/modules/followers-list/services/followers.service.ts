import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IGithubResponseFollower, IGitHubUser } from '../models/interfaces';
import { catchError, map } from 'rxjs/operators';

/** Сервис для работы с подписчиками GitHub */
@Injectable({
  providedIn: 'root',
})
export class FollowersService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  /**
   * Получить подписчиков пользователя
   * @param userName имя пользователя
   * @returns массив подписчиков
   */
  public getFollowersFor(userName: string): Observable<IGitHubUser[]> {
    return this.httpClient.get<IGithubResponseFollower[]>(`http://api.github.com/users/${userName}/followers`)
      .pipe(
        map((response: IGithubResponseFollower[]) => this.parseGitHubFollowers(response)),
        catchError(() => of([])),
      );
  }

  /**
   * Парсинг ответа от GitHub (json с подписчиками)
   * @param gitHubResponseFollowers массив необработанных данных
   * @returns массив пользователей
   */
  private parseGitHubFollowers(gitHubResponseFollowers: IGithubResponseFollower[]): IGitHubUser[] {
    return gitHubResponseFollowers.map((follower: IGithubResponseFollower) => ({
      id: follower.id,
      login: follower.login,
      avatarUrl: follower.avatar_url,
      url: follower.html_url,
    }))
  }
}
