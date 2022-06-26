/** Интерфейс пользователя GitHub */
export interface IGitHubUser {
  /** id */
  id: number;
  /** Логин */
  login: string;
  /** url аватара пользователя */
  avatarUrl: string;
  /** url пользователя */
  url: string;
}
