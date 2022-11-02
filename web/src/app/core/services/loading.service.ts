import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  observer = new Subject<{ isLoading: boolean }>();
  public subscriber$ = this.observer.asObservable();

  /**
   * @description set page loading
   */
  setLoading(isLoading: boolean): void {
    this.observer.next({ isLoading });
  }
}
