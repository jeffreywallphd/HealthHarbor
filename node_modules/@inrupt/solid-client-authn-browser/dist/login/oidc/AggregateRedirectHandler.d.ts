import type { IIncomingRedirectHandler, IncomingRedirectInput, IncomingRedirectResult } from "@inrupt/solid-client-authn-core";
import { AggregateHandler } from "@inrupt/solid-client-authn-core";
export default class AggregateRedirectHandler extends AggregateHandler<IncomingRedirectInput, IncomingRedirectResult> implements IIncomingRedirectHandler {
    constructor(redirectHandlers: IIncomingRedirectHandler[]);
}
