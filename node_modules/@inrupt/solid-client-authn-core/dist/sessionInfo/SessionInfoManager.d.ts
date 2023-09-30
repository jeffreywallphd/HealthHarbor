import { fetch as uniFetch } from "@inrupt/universal-fetch";
import type { ISessionInfo, ISessionInfoManager, ISessionInternalInfo, ISessionInfoManagerOptions, IStorageUtility } from "..";
export declare function getUnauthenticatedSession(): ISessionInfo & {
    fetch: typeof uniFetch;
};
export declare function clear(sessionId: string, storage: IStorageUtility): Promise<void>;
export declare abstract class SessionInfoManagerBase implements ISessionInfoManager {
    protected storageUtility: IStorageUtility;
    constructor(storageUtility: IStorageUtility);
    update(_sessionId: string, _options: ISessionInfoManagerOptions): Promise<void>;
    get(_: string): Promise<(ISessionInfo & ISessionInternalInfo) | undefined>;
    getAll(): Promise<(ISessionInfo & ISessionInternalInfo)[]>;
    clear(sessionId: string): Promise<void>;
    register(_sessionId: string): Promise<void>;
    getRegisteredSessionIdAll(): Promise<string[]>;
    clearAll(): Promise<void>;
}
