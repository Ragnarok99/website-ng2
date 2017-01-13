import { WebsiteNG2Page } from './app.po';

describe('website-ng2 App', function() {
  let page: WebsiteNG2Page;

  beforeEach(() => {
    page = new WebsiteNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
