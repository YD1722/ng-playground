import { InjectionToken } from '@angular/core';

export interface AppConfig {
  newLoggerEnabled: boolean;
}

/**
 * Because curly braces are used to denote the function’s body,
 * an arrow function that wants to return an object literal outside
 * of a function body must wrap the literal in parentheses.
 * Wrapping the object literal in parentheses signals that the braces are an object literal instead of the function body.
 */
// TODO: [YD] Check circular DI with factory method
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => ({ newLoggerEnabled: true }),
});
