import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/#/welcome');
  }

  getParagraphText() {
    return element(by.css('.intro-text')).getText();
  }
}
