import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Renderer2,
} from '@angular/core';
import {
  ClarityIcons,
  userIcon,
  homeIcon,
  vmBugIcon,
  cogIcon,
  eyeIcon,
  dashboardIcon,
  viewCardsIcon,
  crosshairsIcon,
} from '@cds/core/icon';

ClarityIcons.addIcons(
  userIcon,
  homeIcon,
  vmBugIcon,
  cogIcon,
  eyeIcon,
  dashboardIcon,
  viewCardsIcon,
  crosshairsIcon
);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';
  // private currentTheme: string = 'united';
  colorTheme = 'united-theme';
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private host: ElementRef<HTMLElement>,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  theme(themeName: string) {
    const headEl = this.document.getElementsByTagName('head')[0];
    const newLinkEl = this.document.createElement('link');
    newLinkEl.rel = 'stylesheet';
    newLinkEl.href = themeName;
    headEl.append(newLinkEl);
    // this.renderer.removeClass(document.body, 'theme-' + this.currentTheme);
    // this.currentTheme = themeName;
    // this.renderer.addClass(document.body, 'theme-' + this.currentTheme);
    // this.document.getElementById('theme').href =
    //   './assets/css/themes/theme_' + themeName + '.scss';
    // const htmlTag = document.getElementById('htmlTag');
    // if (htmlTag) {
    //   const classList = Array.from(htmlTag.classList);
    //   classList.forEach((cssClass) => htmlTag.classList.remove(cssClass));
    //   htmlTag.classList.add('theme', themeName);
    //   this.colorTheme = themeName;
    // }
    // this.changeDetectorRef.detectChanges();
  }
}
