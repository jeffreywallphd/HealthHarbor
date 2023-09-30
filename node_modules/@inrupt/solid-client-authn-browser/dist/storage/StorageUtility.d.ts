import type { IStorage } from "@inrupt/solid-client-authn-core";
import { StorageUtility } from "@inrupt/solid-client-authn-core";
export default class StorageUtilityBrowser extends StorageUtility {
    constructor(secureStorage: IStorage, insecureStorage: IStorage);
}
