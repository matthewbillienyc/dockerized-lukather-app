import { LukatherDiscographyAngularPage } from './app.po';

describe('lukather-discography-angular App', function() {
  let page: LukatherDiscographyAngularPage;

  beforeEach(() => {
    page = new LukatherDiscographyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
