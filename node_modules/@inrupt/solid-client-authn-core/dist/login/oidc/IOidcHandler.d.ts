import type IHandleable from "../../util/handlerPattern/IHandleable";
import type { IncomingRedirectResult } from "./IIncomingRedirectHandler";
import type IOidcOptions from "./IOidcOptions";
export type OidcHandlerResult = IncomingRedirectResult | undefined;
type IOidcHandler = IHandleable<[IOidcOptions], OidcHandlerResult>;
export default IOidcHandler;
