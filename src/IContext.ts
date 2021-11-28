
import {IPacket} from './IPacket';

export interface IContext {
    getID(): string;
    getPacket(): IPacket<any, any>;
    retry(): IPacket<any, any>;
    resolve(packet: IPacket<any, any>): Promise<IPacket<any, any>>;
    reject(e: any): Promise<void>;
}
