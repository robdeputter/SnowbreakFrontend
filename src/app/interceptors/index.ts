import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './AuthenticationInterceptors';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }
];