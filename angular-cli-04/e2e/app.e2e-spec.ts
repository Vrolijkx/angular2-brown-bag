import { AngularCli03Page } from './app.po';

describe('angular-cli-03 App', function() {
  let page: AngularCli03Page;

  beforeEach(() => {
    page = new AngularCli03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
