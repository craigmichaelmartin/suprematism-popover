import { SuprematismPopoverPage } from './app.po';

describe('Testing Popovers: host element', function() {
  let page: SuprematismPopoverPage;
  beforeEach(() => {
    page = new SuprematismPopoverPage();
    page.navigateTo();
  });
  describe('before hovering', function() {
    it('should display own text', () => {
      expect(page.getElementText('top')).toEqual('Element with popover on top.');
      expect(page.getElementText('right')).toEqual('Element with popover on right.');
      expect(page.getElementText('bottom')).toEqual('Element with popover on bottom.');
      expect(page.getElementText('left')).toEqual('Element with popover on left.');
    });
    it('popover should not be rendered', () => {
      expect(page.isPopoverPresent('top')).toEqual(false);
      expect(page.isPopoverPresent('right')).toEqual(false);
      expect(page.isPopoverPresent('bottom')).toEqual(false);
      expect(page.isPopoverPresent('left')).toEqual(false);
    });
  });
  describe('with directive for popover on top, while being hovered,', function() {
    beforeEach(() => {
      page.hoverOnElement('top');
    });
    it('should display own text', () => {
      expect(page.getElementText('top')).toEqual('Element with popover on top.');
    });
    it('should render the popover', () => {
      expect(page.isPopoverPresent('top')).toEqual(true);
    });
    it('should render the popover with the body text', () => {
      expect(page.getPopoverBodyText('top')).toEqual('Body Top');
    });
    it('should render the popover with the header text', () => {
      expect(page.getPopoverHeaderText('top').then((s) => s.toLowerCase())).toEqual('header top');
    });
    it('should render the popover with the correct header text stylying', () => {
      expect(page.getPopoverHeaderText('top')).toEqual('HEADER TOP');
      expect(page.getPopoverHeaderStyles('top', 'color')).toEqual('rgba(53, 197, 214, 1)');
    });
    it('should render the popover with the correct styling', () => {
      expect(page.getPopoverStyles('top', 'border-color')).toEqual('rgb(53, 197, 214)');
      expect(page.getPopoverStyles('top', 'border-width')).toEqual('3px');
    });
  });
  describe('with directive for popover on right, while being hovered,', function() {
    beforeEach(() => {
      page.hoverOnElement('right');
    });
    it('should display own text', () => {
      expect(page.getElementText('right')).toEqual('Element with popover on right.');
    });
    it('should render the popover', () => {
      expect(page.isPopoverPresent('right')).toEqual(true);
    });
    it('should render the popover with the body text', () => {
      expect(page.getPopoverBodyText('right')).toEqual('Body Right');
    });
    it('should render the popover with the header text', () => {
      expect(page.getPopoverHeaderText('right').then((s) => s.toLowerCase())).toEqual('header right');
    });
    it('should render the popover with the correct header text stylying', () => {
      expect(page.getPopoverHeaderText('right')).toEqual('HEADER RIGHT');
      expect(page.getPopoverHeaderStyles('right', 'color')).toEqual('rgba(53, 197, 214, 1)');
    });
    it('should render the popover with the correct styling', () => {
      expect(page.getPopoverStyles('right', 'border-color')).toEqual('rgb(53, 197, 214)');
      expect(page.getPopoverStyles('right', 'border-width')).toEqual('3px');
    });
  });
  describe('with directive for popover on bottom, while being hovered,', function() {
    beforeEach(() => {
      page.hoverOnElement('bottom');
    });
    it('should display own text', () => {
      expect(page.getElementText('bottom')).toEqual('Element with popover on bottom.');
    });
    it('should render the popover', () => {
      expect(page.isPopoverPresent('bottom')).toEqual(true);
    });
    it('should render the popover with the body text', () => {
      expect(page.getPopoverBodyText('bottom')).toEqual('Body Bottom');
    });
    it('should render the popover with the header text', () => {
      expect(page.getPopoverHeaderText('bottom').then((s) => s.toLowerCase())).toEqual('header bottom');
    });
    it('should render the popover with the correct header text stylying', () => {
      expect(page.getPopoverHeaderText('bottom')).toEqual('HEADER BOTTOM');
      expect(page.getPopoverHeaderStyles('bottom', 'color')).toEqual('rgba(53, 197, 214, 1)');
    });
    it('should render the popover with the correct styling', () => {
      expect(page.getPopoverStyles('bottom', 'border-color')).toEqual('rgb(53, 197, 214)');
      expect(page.getPopoverStyles('bottom', 'border-width')).toEqual('3px');
    });
  });
  describe('with directive for popover on left, while being hovered,', function() {
    beforeEach(() => {
      page.hoverOnElement('left');
    });
    it('should display own text', () => {
      expect(page.getElementText('left')).toEqual('Element with popover on left.');
    });
    it('should render the popover', () => {
      expect(page.isPopoverPresent('left')).toEqual(true);
    });
    it('should render the popover with the body text', () => {
      expect(page.getPopoverBodyText('left')).toEqual('Body Left');
    });
    it('should render the popover with the header text', () => {
      expect(page.getPopoverHeaderText('left').then((s) => s.toLowerCase())).toEqual('header left');
    });
    it('should render the popover with the correct header text stylying', () => {
      expect(page.getPopoverHeaderText('left')).toEqual('HEADER LEFT');
      expect(page.getPopoverHeaderStyles('left', 'color')).toEqual('rgba(53, 197, 214, 1)');
    });
    it('should render the popover with the correct styling', () => {
      expect(page.getPopoverStyles('left', 'border-color')).toEqual('rgb(53, 197, 214)');
      expect(page.getPopoverStyles('left', 'border-width')).toEqual('3px');
    });
  });
});
