import {Injectable} from '@angular/core';

declare const alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  success(message: string): void { alertify.success(message); }

  error(message: string): void { alertify.error(message); }
}
