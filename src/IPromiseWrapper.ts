
export type IResolveFunction<T> = (v: T) => void;
export type IRejectFunction = (e: any) => void;

export interface IPromiseWrapper<T> {
    resolve(v: T): Promise<T>;
    reject(e: any): Promise<void>;
}
