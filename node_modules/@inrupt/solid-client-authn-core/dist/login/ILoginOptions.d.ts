/// <reference types="node" />
import type { EventEmitter } from "events";
import type ILoginInputOptions from "../ILoginInputOptions";
export default interface ILoginOptions extends ILoginInputOptions {
    sessionId: string;
    prompt?: string;
    tokenType: "DPoP" | "Bearer";
    eventEmitter?: EventEmitter;
}
