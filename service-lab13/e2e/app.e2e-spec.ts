import { ServiceLab13Page } from './app.po';

describe('service-lab13 App', () => {
  let page: ServiceLab13Page;

  beforeEach(() => {
    page = new ServiceLab13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
