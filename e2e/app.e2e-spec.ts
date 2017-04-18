import { IrcPage } from './app.po';

describe('irc App', () => {
  let page: IrcPage;

  beforeEach(() => {
    page = new IrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
