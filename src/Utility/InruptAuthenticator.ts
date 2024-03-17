import {
    login,
    handleIncomingRedirect,
    getDefaultSession,
    fetch,
  } from "@inrupt/solid-client-authn-browser";

import { IAuthenticator } from "./IAuthenticator";

class InruptAuthenticator implements IAuthenticator {
  session: any | null = null;
  options: any = {};

  constructor(options: any = {}) {
    this.session = getDefaultSession();
    this.options.oidcIssuer = options.oidcIssuer || 'https://login.inrupt.com';
    this.options.redirectUrl = options.redirectUrl || window.location.href;
  }

  getSession() {
    return this.session;
  }

  async login(): Promise<void> {
    try {
      if (this.isLoggedIn()) {
        return;
      }

      await login({
        oidcIssuer: this.options.oidcIssuer,
        redirectUrl: new URL("/", this.options.redirectUrl).toString(),
        clientName: "HealthHarbor"
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  async logout(logoutType: string): Promise<void> {
    try {
        if (this.isLoggedIn()) {
            if(logoutType === "app") {
                await this.session.logout({ logoutType: "app" });
            } else {
                await this.session.logout({ 
                    logoutType: "idp",
                    postLogoutUrl: new URL("/", this.options.redirectUrl).toString() 
                });
            }
        }
    } catch (error) {
        console.error("Logout error: ", error);
    }
  }

  async handleLoginRedirect() {
    await handleIncomingRedirect();
  }

  isLoggedIn(): boolean {
    if (this.session && this.session.info.isLoggedIn) {
        return true;
    } else {
        return false;
    }    
  }

}

export default InruptAuthenticator;