import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/', 10000);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSearchBox() {
    return element(by.tagName('input'));
  }

  getOptions() {
    return element.all(by.css('.list-item'));
  }

  getPara() {
    return element(by.tagName('p')).getText();
  }

  getBody() {
    return element(by.tagName('body'));
  }

  getLoader() {
    return element(by.css('.loader'));
  }
}
