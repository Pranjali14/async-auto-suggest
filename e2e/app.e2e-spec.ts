import { AppPage } from './app.po';
import { browser, protractor, until, by } from 'protractor';

describe('async-auto-suggest App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();

  });

  it('should fetch the github repos', () => {
    page.getSearchBox()
    .sendKeys('bootstrap')
    .then((res) => {
      page.getOptions().count();
      expect(page.getOptions().count()).toBeGreaterThan(1);
    });
  });

  it('should select the option from the drop down', ()=> {
    page.getSearchBox().clear();
    page.getSearchBox().sendKeys('redis');
    const elemF = page.getOptions().first();
    elemF.getText().then((text) => {
      elemF.click();
      expect(page.getSearchBox().getAttribute('value')).toEqual(text);
    });    
  });

  it('should close the list on clicking anywhere outside', () => {
    page.getSearchBox().clear();
    page.getSearchBox().sendKeys('angular');
    page.getBody().click();
    expect(page.getOptions().count()).toEqual(0);
  });

  it('should not show the list on empty search query', () => {
    let query = 'red';
    page.getSearchBox().clear();
    page.getSearchBox().sendKeys(query);
    //page.getOptions().count().then((res) => console.log(res));
    for(let i=0; i < query.length; i++) {
      page.getSearchBox().sendKeys(protractor.Key.BACK_SPACE);
    }
    expect(page.getOptions().count()).toEqual(0);
  });


  it('should show loader', () => {
    page.getSearchBox().clear();
    page.getSearchBox().sendKeys('a');
    browser.ignoreSynchronization = true;
    browser.wait(until.elementLocated(by.css('.loader')), 2000)
    .then((e) => {
      browser.wait(until.elementIsVisible(e), 500);
    });
    //browser.wait(until.elementLocated(By.css('.loader')), 500);
    expect(page.getLoader().isPresent()).toBeTruthy();
    browser.ignoreSynchronization = false;  
  })
});
