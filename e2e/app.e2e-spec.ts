import { 
  browser,
  element,
  by,
  protractor
} from 'protractor';
import { PopoverPage } from './app.po';

describe('Suprematism Popover System', function() {

  let page: PopoverPage;

  beforeEach(() => {
    page = new PopoverPage();
  });

  describe('Tooltip', ()=> {


    describe('positioning', () => {

      const parent_container = '#simple-tooltip-positions';

      beforeEach(() => page.navigateTo());

      it('appears on top', () => testPosition('top', 'top'));
      it('appears on right', () => testPosition('right', 'right'));
      it('appears on bottom', () => testPosition('bottom', 'bottom'));
      it('appears on left', () => testPosition('left', 'left'));
      
      it('default displays on the top', () => testPosition('default', 'top'));

      function testPosition(subParent: string, side: string) {
        browser.actions().mouseMove(element(by.css(`${parent_container} #${subParent} [supretooltip]`))).perform();
        page.waitForByCss(`${parent_container} .popover.${side}`);
        expect(element(by.css(`${parent_container} .popover.${side}`)).isDisplayed()).toBeTruthy();
        expect(element(by.css(`${parent_container} .popover.${side} .popover-title`)).getText()).toEqual(`Title for the ${side} here`);
      }

    });


    describe('icon', () => {

      const parent_container = '#simple-tooltip-with-icon';

      beforeEach(() => page.navigateTo());

      it('appends the icon', () => {
        browser.actions().mouseMove(element(by.css(`${parent_container} [supretooltip]`))).perform();      
        page.waitForByCss(`${parent_container} .popover`);
        expect(element(by.css(`${parent_container} .popover`)).isDisplayed()).toBeTruthy();
        expect(element(by.css(`${parent_container} .popover .popover-title .dynamic-icon`)).isPresent()).toBeTruthy();
      });

      it('spacing on the right should be 10px', () => {
        browser.actions().mouseMove(element(by.css(`${parent_container} [supretooltip]`))).perform();      
        page.waitForByCss(`${parent_container} .popover`);
        expect(element(by.css(`${parent_container} .popover`)).isDisplayed()).toBeTruthy();
        element(by.css(`${parent_container} .popover .popover-title .dynamic-icon`))
          .getCssValue('margin-right')
          .then(value => expect(value).toEqual('10px'));
      });

      it('adds the declared icon to the title', () => {
        browser.actions().mouseMove(element(by.css(`${parent_container} [supretooltip]`))).perform();      
        page.waitForByCss(`${parent_container} .popover`);
        expect(element(by.css(`${parent_container} .popover`)).isDisplayed()).toBeTruthy();
        element(by.css(`${parent_container} [supretooltip]`))
          .getAttribute("icon")
          .then((value) => {
            expect(element(by.css(`${parent_container} .popover .popover-title .dynamic-icon.u-supre-icon.${value}`)).isPresent()).toBeTruthy();
          });
      });
      
    });


    describe('descriptions', () => {

      const parent_container_with_description = '#simple-tooltip-description';
      const parent_container_without_description = '#simple-tooltip-positions #top';

      beforeEach(() => page.navigateTo());

      it('adds the text to the popover-content element', () => {
        browser.actions().mouseMove(element(by.css(`${parent_container_with_description} [supretooltip]`))).perform();
        page.waitForByCss(`${parent_container_with_description} .popover`);
        expect(element(by.css(`${parent_container_with_description} .popover`)).isDisplayed()).toBeTruthy();
        expect(element(by.css(`${parent_container_with_description} .popover .popover-title`)).getText()).toEqual(`Title for the Tooltip`);
        expect(element(by.css(`${parent_container_with_description} .popover .popover-content`)).getText()).toEqual(`Description text`);
      });

      it('removes the .popover-content element when there is no content attribute', () => {
        browser.actions().mouseMove(element(by.css(`${parent_container_without_description} [supretooltip]`))).perform();
        page.waitForByCss(`${parent_container_without_description} .popover`);
        expect(element(by.css(`${parent_container_without_description} .popover`)).isDisplayed()).toBeTruthy();
        expect(element(by.css(`${parent_container_without_description} .popover .popover-title`)).getText()).toEqual(`Title for the top here`);
        expect(element(by.css(`${parent_container_without_description} .popover .popover-content`)).isPresent()).toBeFalsy();
      });

    });




  });



});
