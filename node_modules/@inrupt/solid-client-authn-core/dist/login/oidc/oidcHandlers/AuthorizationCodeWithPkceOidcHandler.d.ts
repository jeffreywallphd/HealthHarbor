import type IStorageUtility from "../../../storage/IStorageUtility";
import type IOidcOptions from "../IOidcOptions";
import type { IRedirector } from "../IRedirector";
export default abstract class AuthorizationCodeWithPkceOidcHandlerBase {
    protected storageUtility: IStorageUtility;
    protected redirector: IRedirector;
    constructor(storageUtility: IStorageUtility, redirector: IRedirector);
    canHandle(oidcLoginOptions: IOidcOptions): Promise<boolean>;
    handleRedirect({ oidcLoginOptions, state, codeVerifier, targetUrl, }: {
        oidcLoginOptions: IOidcOptions;
        state: string;
        codeVerifier: string;
        targetUrl: string;
    }): Promise<undefined>;
}
