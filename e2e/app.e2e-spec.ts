import { AngularProjectRefactorPage } from './app.po';

describe('angular-project-refactor App', () => {
  let page: AngularProjectRefactorPage;

  beforeEach(() => {
    page = new AngularProjectRefactorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
