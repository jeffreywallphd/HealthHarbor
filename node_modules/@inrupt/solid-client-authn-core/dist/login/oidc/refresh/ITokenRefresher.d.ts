/// <reference types="node" />
import type { EventEmitter } from "events";
import type { KeyPair } from "../../../authenticatedFetch/dpopUtils";
export type TokenEndpointResponse = {
    accessToken: string;
    tokenType?: "Bearer" | "DPoP";
    idToken?: string;
    webId?: string;
    refreshToken?: string;
    expiresAt?: number;
    expiresIn?: number;
    dpopKey?: KeyPair;
};
export interface ITokenRefresher {
    refresh(localUserId: string, refreshToken?: string, dpopKey?: KeyPair, eventEmitter?: EventEmitter): Promise<TokenEndpointResponse>;
}
