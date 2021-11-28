
import {ICloseCallback} from './ICloseCallback';

export type IConnectCallback = () => void;
export type IDataCallback = (data: Buffer) => void;
export type IErrorCallback = (error: any) => void;
export type IEndCallback = () => void;
export type IWriteCallback = () => void;

export interface ISocketAPI {
    removeAllListeners(): void;
    removeListener(event: 'connect', callback: IConnectCallback): void;
    removeListener(event: 'error', callback: IErrorCallback): void;
    removeListener(event: 'close', calback: ICloseCallback): void;
    removeListener(event: 'data', callback: IDataCallback): void;

    on(event: 'data', callback: IDataCallback): void;
    on(event: 'close', callback: ICloseCallback): void;
    on(event: 'connect', callback: IConnectCallback): void;
    on(event: 'error', callback: IErrorCallback): void;

    once(event: 'data', callback: IDataCallback): void;
    once(event: 'close', callback: ICloseCallback): void;
    once(event: 'connect', callback: IConnectCallback): void;
    once(event: 'error', callback: IErrorCallback): void;

    connect(port: number, host: string): void;
    end(callback: IEndCallback): void;

    write(data: Buffer | string, callback: IWriteCallback): void;
}
