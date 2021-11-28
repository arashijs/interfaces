
// import 

import { ISocketAPI } from "./ISocketAPI";
import {ICloseCallback} from './ICloseCallback';

export type IListenCallack = () => void;
export type IConnectionCallback<TSocketAPI extends ISocketAPI> = (socket: TSocketAPI) => void;

export interface IAddressInfoData {
    address: string;
    family: string;
    port: number;
}

export type IAddressInfo = IAddressInfoData | string;

export interface IServerAPI<TSocketAPI extends ISocketAPI> {
    listen(port: number, host: string, callback: IListenCallack): void;
    address(): IAddressInfo | string;
    close(callback: ICloseCallback): void;

    on(event: 'connection', callback: IConnectionCallback<TSocketAPI>): void;
    once(event: 'connection', callback: IConnectionCallback<TSocketAPI>): void;
}
