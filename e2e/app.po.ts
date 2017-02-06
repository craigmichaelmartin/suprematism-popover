import {
  browser,
  element,
  by,
  protractor
} from 'protractor';

export class PopoverPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('supre-root h1')).getText();
  }

  waitForByCss(selector: string) {
    browser.wait(
      protractor.ExpectedConditions.visibilityOf(
        element(by.css(selector))
      ),
      5000
    );
  }

}
