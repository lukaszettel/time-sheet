import { TimeSheetAppPage } from './app.po';

describe('time-sheet-app App', function() {
  let page: TimeSheetAppPage;

  beforeEach(() => {
    page = new TimeSheetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
