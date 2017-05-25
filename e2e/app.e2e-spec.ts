import { KvNgPage } from './app.po';

describe('kv-ng App', () => {
  let page: KvNgPage;

  beforeEach(() => {
    page = new KvNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
