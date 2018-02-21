import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
    browser.sleep(5000);
  }

  findHeroe(hero: string){
  element(by.linkText('Dashboard')).click();
  element(by.tagName('input')).sendKeys(hero);
  element(by.tagName('div[class="search-result"]')).click();
  browser.sleep(5000);
  element(by.buttonText('Back')).click();
  }

  deleteHero(){
  element(by.linkText('Heroes')).click();
  element(by.tagName('span')).click();
  element(by.buttonText('x')).click();
  browser.sleep(5000);
  element(by.linkText('Dashboard')).click();
  }

  editHero(text: string){
  element(by.linkText('Heroes')).click();
  element(by.tagName('span')).click();
  element(by.buttonText('View Details')).click();
  browser.sleep(2000);
  var input = element(by.tagName('input'));
  input.clear();
  input.sendKeys(text);
  browser.sleep(3000);
  element(by.buttonText('Save')).click();
  browser.sleep(3000);
  }

  navHeroeFromSearch(hero: string){
  element(by.linkText('Dashboard')).click();
  element(by.tagName('input')).sendKeys(hero);
  element(by.tagName('div[class="search-result"]')).click();
  browser.sleep(5000);
  element(by.buttonText('Back')).click();
  }

  navHeroeFromList(){
  element(by.linkText('Heroes')).click();
  element(by.tagName('span')).click();
  element(by.buttonText('View Details')).click();
  browser.sleep(5000);
  element(by.linkText('Dashboard')).click();
  }

}
