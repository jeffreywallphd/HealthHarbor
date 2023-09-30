/// <reference types="node" />
import type { IClientRegistrar, IIssuerConfigFetcher, IStorageUtility, KeyPair, ITokenRefresher, TokenEndpointResponse } from "@inrupt/solid-client-authn-core";
import type { EventEmitter } from "events";
export default class TokenRefresher implements ITokenRefresher {
    private storageUtility;
    private issuerConfigFetcher;
    private clientRegistrar;
    constructor(storageUtility: IStorageUtility, issuerConfigFetcher: IIssuerConfigFetcher, clientRegistrar: IClientRegistrar);
    refresh(sessionId: string, refreshToken?: string, dpopKey?: KeyPair, eventEmitter?: EventEmitter): Promise<TokenEndpointResponse>;
}
