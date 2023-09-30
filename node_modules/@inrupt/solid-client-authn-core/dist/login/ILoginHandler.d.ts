import type IHandleable from "../util/handlerPattern/IHandleable";
import type ILoginOptions from "./ILoginOptions";
import type { IncomingRedirectResult } from "./oidc/IIncomingRedirectHandler";
export type LoginResult = IncomingRedirectResult | undefined;
type ILoginHandler = IHandleable<[ILoginOptions], LoginResult>;
export default ILoginHandler;
