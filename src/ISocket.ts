
import {IPacket} from './IPacket';
import {ISocketAPI} from './ISocketAPI';

export interface ISocket<TSocketAPI extends ISocketAPI> {
    isConnected(): boolean;
    getID(): string;
    setSocket(socket: TSocketAPI): void;
    connect(host: string, port: number): Promise<void>;
    resendPackets(): Promise<void>;
    disconnect(): Promise<void>;
    send<TPacketResponse extends IPacket<any, any>>(packet: IPacket<any, any>): Promise<TPacketResponse>;
}
