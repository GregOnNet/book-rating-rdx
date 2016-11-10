import { BookRatingRdxPage } from './app.po';

describe('book-rating-rdx App', function() {
  let page: BookRatingRdxPage;

  beforeEach(() => {
    page = new BookRatingRdxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
