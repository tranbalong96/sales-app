import { AlertService } from 'src/app/core/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';

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
    this.alertService.success('123');
    this.alertService.warn('5345');
    this.alertService.error('567567');
    this.alertService.info('687867');
  }
}
