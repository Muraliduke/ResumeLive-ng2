import { ResumeDeployPage } from './app.po';

describe('resume-deploy App', function() {
  let page: ResumeDeployPage;

  beforeEach(() => {
    page = new ResumeDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
