import type IHandleable from "../util/handlerPattern/IHandleable";
export interface IRpLogoutOptions {
    logoutType: "idp";
    postLogoutUrl?: string | undefined;
    state?: string | undefined;
    handleRedirect?: ((redirectUrl: string) => void) | undefined;
}
export interface IAppLogoutOptions {
    logoutType: "app";
    postLogoutUrl?: undefined;
    state?: undefined;
    handleRedirect?: undefined;
}
export type ILogoutOptions = IRpLogoutOptions | IAppLogoutOptions;
export type ILogoutHandlerOptions = ILogoutOptions & {
    toLogoutUrl?: ({ state, postLogoutUrl }: IRpLogoutOptions) => string;
};
type ILogoutHandler = IHandleable<[
    string
] | [string, ILogoutHandlerOptions | undefined], void>;
export default ILogoutHandler;
