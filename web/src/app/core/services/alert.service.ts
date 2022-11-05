import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AlertType } from '../enums/alert.enum';
import { Alert } from '../models/alert.model';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';
  options = {
    // alway show when param is false
    autoClose: true,
    keepAfterRouteChange: false,
  };
  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  }

  // convenience methods
  success(message: string, title = 'SUCCESS', options = this.options) {
    const alertSuccess = new Alert({
      ...options,
      type: AlertType.Success,
      message,
      title,
    });
    this.alert(alertSuccess);
  }

  error(message: string, title = 'ERROR', options = this.options) {
    const alertError = new Alert({
      ...options,
      type: AlertType.Error,
      message,
      title,
    });
    this.alert(alertError);
  }

  info(message: string, title = 'NOTICE', options = this.options) {
    const alertInfo = new Alert({
      ...options,
      type: AlertType.Info,
      message,
      title,
    });
    this.alert(alertInfo);
  }

  warn(message: string, title = 'WARNING', options = this.options) {
    const alertWarn = new Alert({
      ...options,
      type: AlertType.Warning,
      message,
      title,
    });
    this.alert(alertWarn);
  }

  // main alert method
  alert(alert: Alert) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId) {
    this.subject.next(new Alert({ id }));
  }
}
