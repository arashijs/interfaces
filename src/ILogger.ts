import { LogLevel } from './LogLevel';

export interface ILogger {
    setLogLevel(level: LogLevel): void;
    getLogLevel(): LogLevel;
    addFilter(regexp: RegExp): void;
    removeFilter(reg: RegExp): void;
    setFilters(filters: Array<RegExp>): void;
    getFilters(): Array<RegExp>;
    log(level: LogLevel, component: string, message: any, metadata?: Record<any, any>): void;
    trace(component: string, message: any, metadata?: Record<any, any>): void;
    silly(component: string, message: any, metadata?: Record<any, any>): void;
    debug(component: string, message: any, metadata?: Record<any, any>): void;
    verbose(component: string, message: any, metadata?: Record<any, any>): void;
    info(component: string, message: any, metadata?: Record<any, any>): void;
    warn(component: string, message: any, metadata?: Record<any, any>): void;
    error(component: string, message: any, metadata?: Record<any, any>): void;
    deprecate(component: string, alternative?: string, methodOverride?: string): void;
    deprecateParameterType(component: string, argumentLocation: number, deprecatedType: string, alternative?: string): void;
}
