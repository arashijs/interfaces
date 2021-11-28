
import {ISocket} from './ISocket';

export interface IPacket<TData, TResponsePacket extends IPacket<any, any> | null> {
    getType(): number;
    setID(id: string): void;
    getID(): string;
    getName(): string;
    setNodeID(nodeID: string): void;
    send(socket: ISocket<any>): Promise<TResponsePacket>;
    isResponseRequired(): boolean;
    getNodeID(): string;
    setResponesID(repsonseID: string): void;
    getResponseID(): string;
    getRawData(): Buffer;
    getData(): TData;
    serialize(): Buffer;
}
