import { AlertService } from 'src/app/core/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { EALERT } from 'src/app/core/enums/alert.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  options = {
    autoClose: false,
    keepAfterRouteChange: false,
  };
  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.loadingService.setLoading(true);
    setTimeout(() => {
      this.loadingService.setLoading(false);
    }, 3000);
    this.alertService.success('123', {
      autoClose: true,
      keepAfterRouteChange: false,
    });
    // this.alertService.show(EALERT.SUCCESS, 'test success');
    // this.alertService.show(EALERT.INFO, 'test info');
    // this.alertService.show(EALERT.DANGER, 'test danger');
    // this.alertService.show(EALERT.WARNING, 'test warning');
  }
}
