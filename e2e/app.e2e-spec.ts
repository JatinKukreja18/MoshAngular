import { FavouritePage } from './app.po';

describe('favourite App', () => {
  let page: FavouritePage;

  beforeEach(() => {
    page = new FavouritePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
