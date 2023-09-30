/// <reference types="node" />
import type { EventEmitter } from "events";
import type { IIssuerConfig } from "./IIssuerConfig";
import type { IClient } from "./IClient";
export interface IOidcOptions {
    issuer: string;
    issuerConfiguration: IIssuerConfig;
    client: IClient;
    sessionId: string;
    refreshToken?: string;
    prompt?: string;
    dpop: boolean;
    redirectUrl: string;
    handleRedirect?: (url: string) => unknown;
    eventEmitter?: EventEmitter;
}
export default IOidcOptions;
