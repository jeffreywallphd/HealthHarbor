import type { IRpLogoutOptions } from "./ILogoutHandler";
export interface IEndSessionOptions {
    endSessionEndpoint: string;
    idTokenHint?: string;
    postLogoutRedirectUri?: string;
    state?: string;
}
export declare function getEndSessionUrl({ endSessionEndpoint, idTokenHint, postLogoutRedirectUri, state, }: IEndSessionOptions): string;
export declare function maybeBuildRpInitiatedLogout({ endSessionEndpoint, idTokenHint, }: Partial<Omit<IEndSessionOptions, keyof IRpLogoutOptions>>): (({ state, postLogoutUrl }: IRpLogoutOptions) => string) | undefined;
