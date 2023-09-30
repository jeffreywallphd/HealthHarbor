import type { IOidcHandler, IOidcOptions, LoginResult } from "@inrupt/solid-client-authn-core";
import { AggregateHandler } from "@inrupt/solid-client-authn-core";
export default class AggregateOidcHandler extends AggregateHandler<[IOidcOptions], LoginResult> implements IOidcHandler {
    constructor(oidcLoginHandlers: IOidcHandler[]);
}
