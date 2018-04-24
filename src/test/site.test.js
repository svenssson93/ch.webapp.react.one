'use strict';
require('chromedriver');
var expect = require('chai').expect;
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

var By = webdriver.By;
var until = webdriver.until;

describe('Frontend Application', function() {
  before(() => {
    driver.get('http://localhost:3000/');
  });

  beforeEach(() => {
    driver.navigate().refresh();
  });

  after(() => {
    driver.quit();
  });

  it('should navigate to Users-Page', function(done) {
    this.timeout(7000);
    
    driver.findElement(By.css('#userLink')).click()
      .then(() => driver.findElement(By.css('.pageTitle')).getText())
      .then((title) => {
        expect(title).equals('Users');
      })
      .then(() => done())
      .catch(error => done(error));
  });

  it('should show the selected user', function(done) {
    this.timeout(5000);

    driver.findElement(By.xpath("//div[@id='selUser']/div/button")).click();

    driver.sleep(2000).then(() => {
      driver.findElement(By.xpath("//span[@id='selUser2']")).click()
      .then(() => {
        driver.findElement(By.xpath("//div[@id='selUser']/div/div[2]")).getText().then((selUser) => {
          driver.findElement(By.xpath("//tbody[@id='tblUser']/tr[1]/td[2]")).getText().then((tblUser) => {
            expect(selUser).equals(tblUser);
          })
          .then(() => done())
          .catch(error => done(error));
        });
      })
    });
  });

  it('should navigate to Trains-Page', function(done) {
    this.timeout(5000);

    driver.findElement(By.css('#trainLink')).click();

    driver.sleep(2000).then(() => {
      driver.findElement(By.css('.pageTitle')).getText().then((title) => {
        expect(title).equals('Train stations');
      })
      .then(() => done())
      .catch(error => done(error));
    });
  });

  it('should show the correct train stations', function(done) {
    this.timeout(5000);

    driver.findElement(By.css('#txtLocation')).sendKeys('Hamburg');
    driver.findElement(By.css('#btnLocationSubmit')).click();

    driver.sleep(2000).then(() => {
      driver.findElement(By.xpath("//tbody[@id='tblTrain']/tr[1]/td[1]")).getText().then((tblTrain) => {
        expect(tblTrain).equals('HAMBURG');
      })
      .then(() => done())
      .catch(error => done(error));
    }); 
  });

  it('should navigate to Environments-Page', function(done) {
    this.timeout(5000);

    driver.findElement(By.css('#environmentLink')).click()
      .then(() => driver.findElement(By.css('.pageTitle')).getText())
      .then((title) => {
        expect(title).equals('Environments');
      })
      .then(() => done())
      .catch(error => done(error));
  });

  it('should show correct environments-variable', function(done) {
    this.timeout(5000);

    driver.sleep(1000).then(() => {
      driver.findElement(By.xpath("//tr[@class='USERNAME']/td[2]")).getText().then((text) => {
        expect(text).equals(process.env.USERNAME);
      })
      .then(() => done())
      .catch(error => done(error));
    });
  });

  it('should navigate to About-Page', function(done) {
    this.timeout(5000);

    driver.findElement(By.css('#aboutLink')).click()
      .then(() => driver.findElement(By.css('.pageTitle')).getText())
      .then((title) => {
        expect(title).equals('React');
      })
      .then(() => done())
      .catch(error => done(error));
  });
});