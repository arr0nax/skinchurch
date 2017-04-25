import { SkinPage } from './app.po';

describe('skin App', () => {
  let page: SkinPage;

  beforeEach(() => {
    page = new SkinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
