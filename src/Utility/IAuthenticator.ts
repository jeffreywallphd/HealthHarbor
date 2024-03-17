export interface IAuthenticator {
  session: any | null;
  options: any;

  login(): Promise<void>;
  logout(logoutType: string): Promise<void>;
  handleLoginRedirect();
  isLoggedIn(): boolean;
  getSession(): any;
}