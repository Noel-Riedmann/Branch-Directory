import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'branch-directory';
  language: string = '';

  constructor(private router: Router, private languageService: LanguageService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentLanguage = this.getCurrentLanguageFromUrl(event.url);
        if (currentLanguage) {
          this.language = currentLanguage;
          this.languageService.setCurrentLanguage(currentLanguage);
        }
      }
    });
  }

  changeLanguage(event: any) {
    const language = event.target.value;
    this.language = language;
    this.languageService.setCurrentLanguage(language);
    this.router.navigate([this.getUpdatedUrl(language)]);
  }

  getCurrentLanguageFromUrl(url: string): string | null {
    const languageRegex = /^\/(en|de)\b/;
    const matches = url.match(languageRegex);
    return matches ? matches[1] : null;
  }

  getUpdatedUrl(language: string): string {
    const currentUrl = this.router.url;
    const languageRegex = /^\/(en|de)\b/;
    return currentUrl.replace(languageRegex, `/${language}`);
  }

  gotwosic() {
    window.open('https://www.2sic.com');
    console.log('logo has been pressed');
  }

  mattable() {
    this.router.navigate(['/filialen/materialtable']);
  }

  goToFilialen() {
    this.router.navigate(['/filialen']);
  }

  getLanguage(): string {
    return this.language;
  }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }

  goToFullstack(){
    this.router.navigate(['/filialen/fullstacktable']);
  }
}
