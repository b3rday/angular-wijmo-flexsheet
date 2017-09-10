import { Injectable } from '@angular/core';

export abstract class Logger {

  info: any;
  warn: any;
  error: any;
}

const noop = (): any => undefined;

@Injectable()
export class NoOpLogger implements Logger {

  get info() {
    return noop;
  }

  get warn() {
    return noop;
  }

  get error() {
    return noop;
  }
}

@Injectable()
export class LoggerService implements Logger {

  info: any;
  warn: any;
  error: any;
}

// The set of built-in Log4j levels includes TRACE, DEBUG, INFO, WARN, ERROR, and FATAL.

