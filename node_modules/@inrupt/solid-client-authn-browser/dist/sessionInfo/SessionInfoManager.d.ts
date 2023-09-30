import type { ISessionInfo, ISessionInfoManager, ISessionInternalInfo, IStorageUtility } from "@inrupt/solid-client-authn-core";
import { SessionInfoManagerBase } from "@inrupt/solid-client-authn-core";
export { getUnauthenticatedSession } from "@inrupt/solid-client-authn-core";
export declare function clear(sessionId: string, storage: IStorageUtility): Promise<void>;
export declare class SessionInfoManager extends SessionInfoManagerBase implements ISessionInfoManager {
    get(sessionId: string): Promise<(ISessionInfo & ISessionInternalInfo) | undefined>;
    clear(sessionId: string): Promise<void>;
}
