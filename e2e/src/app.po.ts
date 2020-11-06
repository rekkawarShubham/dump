import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-courses h2')).getText() as Promise<string>;
  }
  getCopyContentText(): Promise<string> {
    return element(by.buttonText('Copy All Data')).getText() as Promise<string>;
  }
}
