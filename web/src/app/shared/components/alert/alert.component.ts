import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertType, EALERT } from 'src/app/core/enums/alert.enum';
import { Alert } from 'src/app/core/models/alert.model';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  // @Input() type: EALERT = EALERT.INFO;
  // @Input() content: string = '';
  // @Input() isAlert: boolean = false;
  // EALERT = EALERT;
  // constructor() {}

  // getClassType(): string {
  //   switch (this.type) {
  //     case EALERT.SUCCESS:
  //       return 'alert-success';
  //     case EALERT.DANGER:
  //       return 'alert-danger';
  //     case EALERT.INFO:
  //       return 'alert-info';
  //     case EALERT.WARNING:
  //       return 'alert-warning';
  //     default:
  //       return '';
  //   }
  // }

  // getIcon(): string {
  //   switch (this.type) {
  //     case EALERT.SUCCESS:
  //       return 'check-circle';
  //     case EALERT.DANGER:
  //       return 'exclamation-toggle';
  //     case EALERT.INFO:
  //       return 'info-circle';
  //     case EALERT.WARNING:
  //       return 'exclamation-triangle';
  //     default:
  //       return '';
  //   }
  // }

  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit() {
    // subscribe to new alert notifications
    this.alertSubscription = this.alertService
      .onAlert(this.id)
      .subscribe((alert) => {
        // clear alerts when an empty alert is received
        if (!alert.message) {
          // filter out alerts without 'keepAfterRouteChange' flag
          this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          this.alerts.forEach((x) => {
            if (x.keepAfterRouteChange) {
              delete x.keepAfterRouteChange;
            }
          });
          return;
        }

        // add alert to array
        this.alerts.push(alert);

        // auto close alert if required
        if (alert.autoClose) {
          setTimeout(() => this.removeAlert(alert), 3000);
        }
      });

    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      // fade out alert
      // this.alerts.find((x) => x === alert).fade = true;
      const findAlert = this.alerts.find((x) => x === alert);
      findAlert && (findAlert.fade = true);
      // remove alert after faded out
      setTimeout(() => {
        this.alerts = this.alerts.filter((x) => x !== alert);
      }, 250);
    } else {
      // remove alert
      this.alerts = this.alerts.filter((x) => x !== alert);
    }
  }

  cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert alert-app-level alert-success',
      [AlertType.Error]: 'alert alert-app-level alert-danger',
      [AlertType.Info]: 'alert alert-app-level alert-info',
      [AlertType.Warning]: 'alert alert-app-level alert-warning',
    };

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }
}
