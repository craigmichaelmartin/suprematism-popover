import { browser, element, by } from 'protractor';

export class SuprematismPopoverPage {

  hostMap = new Map([
    ['top', {getElement: () => this.$('.js-topElement')}],
    ['right', {getElement: () => this.$('.js-rightElement')}],
    ['bottom', {getElement: () => this.$('.js-bottomElement')}],
    ['left', {getElement: () => this.$('.js-leftElement')}],
  ]);
  popoverMap = new Map([
    ['top', {
      getElement: () => this.$('supre-popover .js-popover.js-top'),
      getBrowserElement: () => browser.findElement(by.css('.js-topElement')),
      getHeader: () => this.$('supre-popover .js-popover.js-top .js-popoverHeader'),
      getBody: () => this.$('supre-popover .js-popover.js-top .js-popoverBody')
    }],
    ['right', {
      getElement: () => this.$('supre-popover .js-popover.js-right'),
      getBrowserElement: () => browser.findElement(by.css('.js-rightElement')),
      getHeader: () => this.$('supre-popover .js-popover.js-right .js-popoverHeader'),
      getBody: () => this.$('supre-popover .js-popover.js-right .js-popoverBody')
    }],
    ['bottom', {
      getElement: () => this.$('supre-popover .js-popover.js-bottom'),
      getBrowserElement: () => browser.findElement(by.css('.js-bottomElement')),
      getHeader: () => this.$('supre-popover .js-popover.js-bottom .js-popoverHeader'),
      getBody: () => this.$('supre-popover .js-popover.js-bottom .js-popoverBody')
    }],
    ['left', {
      getElement: () => this.$('supre-popover .js-popover.js-left'),
      getBrowserElement: () => browser.findElement(by.css('.js-leftElement')),
      getHeader: () => this.$('supre-popover .js-popover.js-left .js-popoverHeader'),
      getBody: () => this.$('supre-popover .js-popover.js-left .js-popoverBody')
    }],
  ]);

  navigateTo() {
    return browser.get('/');
  }

  $(path) {
    return element(by.css(path));
  }
  getElementText(which) {
    return this.hostMap.get(which).getElement().getText();
  }
  isPopoverPresent(which) {
    return this.popoverMap.get(which).getElement().isPresent();
  }
  getPopoverBodyText(which) {
    return this.popoverMap.get(which).getBody().getText();
  }
  getPopoverHeaderText(which) {
    return this.popoverMap.get(which).getHeader().getText();
  }
  getPopoverHeaderStyles(which, property) {
    return this.popoverMap.get(which).getHeader().getCssValue(property);
  }
  getPopoverStyles(which, property) {
    return this.popoverMap.get(which).getElement().getCssValue(property);
  }
  hoverOnElement(which) {
    return browser.actions().mouseMove(this.popoverMap.get(which).getBrowserElement()).perform();
  }
}
