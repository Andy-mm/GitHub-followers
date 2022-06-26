/** Интерфейс подписчика в ответе GitHub-а */
export interface IGithubResponseFollower {
  /** логин */
  "login": string;
  /** id */
  "id": number;
  /** url аватара пользователя */
  "avatar_url": string;
  /** url пользователя */
  "html_url": string;
}
