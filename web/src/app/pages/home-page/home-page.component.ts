import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
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
  constructor(
    private loadingService: LoadingService,
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
  }
}
