/// <reference types="node" />
import type { ILoginInputOptions, ISessionInfo, IStorage, IHasSessionEventListener, ISessionEventListener, ILogoutOptions } from "@inrupt/solid-client-authn-core";
import type { fetch } from "@inrupt/universal-fetch";
import EventEmitter from "events";
import type ClientAuthentication from "./ClientAuthentication";
export interface ISessionOptions {
    secureStorage: IStorage;
    insecureStorage: IStorage;
    sessionInfo: ISessionInfo;
    clientAuthentication: ClientAuthentication;
}
export interface IHandleIncomingRedirectOptions {
    restorePreviousSession?: boolean;
    useEssSession?: boolean;
    url?: string;
}
export declare function silentlyAuthenticate(sessionId: string, clientAuthn: ClientAuthentication, session: Session): Promise<boolean>;
export declare class Session extends EventEmitter implements IHasSessionEventListener {
    readonly info: ISessionInfo;
    readonly events: ISessionEventListener;
    private clientAuthentication;
    private tokenRequestInProgress;
    constructor(sessionOptions?: Partial<ISessionOptions>, sessionId?: string | undefined);
    login: (options: ILoginInputOptions) => Promise<void>;
    fetch: typeof fetch;
    private internalLogout;
    logout: (options?: ILogoutOptions) => Promise<void>;
    handleIncomingRedirect: (inputOptions?: string | IHandleIncomingRedirectOptions) => Promise<ISessionInfo | undefined>;
    onLogin(callback: () => unknown): void;
    onLogout(callback: () => unknown): void;
    onError(callback: (error: string | null, errorDescription?: string | null) => unknown): void;
    onSessionRestore(callback: (currentUrl: string) => unknown): void;
    onSessionExpiration(callback: () => unknown): void;
    private setSessionInfo;
}
