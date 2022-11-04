import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { EALERT } from 'src/app/core/enums/alert.enum';
import { AlertService } from 'src/app/core/services/alert.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { DestroyableDirective } from 'src/app/shared/directives/destroyable.directive';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent extends DestroyableDirective implements OnInit {
  isLoading: boolean = false;
  showAlert: boolean = false;
  type: EALERT = EALERT.SUCCESS;
  content: string = '';
  showAlertTime: number = 3000;
  isAlert: boolean = false;
  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadingService.subscriber$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.isLoading = res.isLoading;
        this.cdr.detectChanges();
      });
    // this.alertService.subscriber$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((res) => {
    //     this.type = res.type;
    //     this.content = res.content;
    //     this.isAlert = true;
    //     setTimeout(() => {
    //       this.isAlert = false;
    //     }, this.showAlertTime);
    //     this.cdr.detectChanges();
    //   });
  }
}
