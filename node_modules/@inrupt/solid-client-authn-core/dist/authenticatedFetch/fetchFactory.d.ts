/// <reference types="node" />
import type { fetch } from "@inrupt/universal-fetch";
import type { EventEmitter } from "events";
import type { ITokenRefresher } from "../login/oidc/refresh/ITokenRefresher";
import type { KeyPair } from "./dpopUtils";
export type RefreshOptions = {
    sessionId: string;
    refreshToken: string;
    tokenRefresher: ITokenRefresher;
};
export declare const DEFAULT_EXPIRATION_TIME_SECONDS = 600;
export type DpopHeaderPayload = {
    htu: string;
    htm: string;
    jti: string;
};
export declare function buildAuthenticatedFetch(unauthFetch: typeof fetch, accessToken: string, options?: {
    dpopKey?: KeyPair;
    refreshOptions?: RefreshOptions;
    expiresIn?: number;
    eventEmitter?: EventEmitter;
}): Promise<typeof fetch>;
