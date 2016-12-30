import { LoucaPage } from './app.po';

describe('louca App', function() {
  let page: LoucaPage;

  beforeEach(() => {
    page = new LoucaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
