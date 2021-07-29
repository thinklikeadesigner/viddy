import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable()
// export class HttpHeadersInterceptor implements HttpInterceptor {
//   constructor() {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     req = req.clone({
//       setHeaders: {
//         'x-rapidapi-key': '6df9882ad5msh57783a8506f68c4p1a8a98jsn39883793655c',
//         'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
//       },
//       setParams: {
//         key: '207edfe650d54783b683c1bcd207a928',
//       },
//     });
//     return next.handle(req);
//   }
// }

// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': '6df9882ad5msh57783a8506f68c4p1a8a98jsn39883793655c',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: 'a0869b38532c454a8c70e606e4d92b7a',
      },
    });
    return next.handle(req);
  }
}
