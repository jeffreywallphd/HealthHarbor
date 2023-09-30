import type { IOidcHandler, IOidcOptions, LoginResult } from "@inrupt/solid-client-authn-core";
import { AuthorizationCodeWithPkceOidcHandlerBase } from "@inrupt/solid-client-authn-core";
export default class AuthorizationCodeWithPkceOidcHandler extends AuthorizationCodeWithPkceOidcHandlerBase implements IOidcHandler {
    handle(oidcLoginOptions: IOidcOptions): Promise<LoginResult>;
}
