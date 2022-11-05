import { AlertService } from 'src/app/core/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.loadingService.setLoading(true);
    setTimeout(() => {
      this.loadingService.setLoading(false);
    }, 3000);
    this.alertService.success('This is alert success');
    this.alertService.warn('This is alert warning');
    this.alertService.error('This is alert error');
    this.alertService.info('This is alert info', 'Info title');
  }
}
