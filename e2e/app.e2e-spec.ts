import { TempAng3Page } from './app.po';

describe('temp-ang3 App', function() {
  let page: TempAng3Page;

  beforeEach(() => {
    page = new TempAng3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
