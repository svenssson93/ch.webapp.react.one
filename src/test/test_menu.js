'use strict';
require('chromedriver');
require('chai').should();
let webdriver = require('selenium-webdriver');

let driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

let By = webdriver.By;
let until = webdriver.until;

describe('Frontend Application', function() {
  it('should navigate to Users-Page', function(done) {
    this.timeout(5000);
    driver.get('http://localhost:3000/')
      .then(() => driver.findElement(By.css('#userLink')).click())
      .then(() => driver.findElement(By.css('.pageTitle')).getText())
      .then(title => title.should.equal('Users'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('should show the selected user', function(done) {
    this.timeout(5000);
    driver.findElement(By.xpath("//div[@id='selUser']/div/button")).click();
    driver.sleep(2000).then(function() {
      driver.findElement(By.xpath("//span[@id='selUser2']")).click()
        .then(function() {
          driver.findElement(By.xpath("//div[@id='selUser']/div/div[2]")).getText().then(selUser => function () {
            selUser.should().equal(driver.findElement(By.xpath("//tbody[@id='tblUser']/tr[1]/td[2]")).getText());
          });
          
        })
        .then(() => done())
        .catch(error => done(error));
    });
  });

  /*it('should navigate to Trains-Page', function(done) {
    this.timeout(5000);
    driver.findElement(By.css('#trainLink')).click()
      .then(() => driver.findElement(By.css('.pageTitle')).getText())
      .then(title => title.should.equal('Train stations'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('should show the correct train stations', function(done) {
    this.timeout(5000);
    driver.findElement(By.css('#txtLocation')).sendKeys('Hamburg');
    driver.findElement(By.css('#btnLocationSubmit')).click();
    driver.sleep(1000)
      .then(function() {
        driver.findElement(By.xpath("//tbody[@id='tblTrain']/tr[1]/td[1]")).getText()
          .then(text => function(text) {
            text.should.equal('HAMBURG');
          });
      })
      .then(() => done())
      .catch(error => done(error));
  });

  it('should navigate to Environments-Page', function(done) {
    this.timeout(5000);
    driver.findElement(By.css('#environmentLink')).click()
      .then(() => driver.findElement(By.css('.pageTitle')).getText())
      .then(title => title.should.equal('Environments'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('should navigate to About-Page', function(done) {
    this.timeout(5000);
    driver.findElement(By.css('#aboutLink')).click()
      .then(() => driver.findElement(By.css('.pageTitle')).getText())
      .then(title => title.should.equal('React'))
      .then(() => driver.quit())
      .then(() => done())
      .catch(error => done(error));
  });*/
});