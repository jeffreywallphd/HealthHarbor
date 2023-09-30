import type { IEndSessionOptions, IRpLogoutOptions } from "@inrupt/solid-client-authn-core";
export declare function buildRpInitiatedLogout({ endSessionEndpoint, idTokenHint, }: Omit<IEndSessionOptions, keyof IRpLogoutOptions>): ({ state, postLogoutUrl }: IRpLogoutOptions) => void;
