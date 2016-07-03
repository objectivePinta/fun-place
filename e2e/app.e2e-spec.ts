import { FunTimesPage } from './app.po';

describe('fun-times App', function() {
  let page: FunTimesPage;

  beforeEach(() => {
    page = new FunTimesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
