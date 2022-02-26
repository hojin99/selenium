const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require('chromedriver');

(async function helloSelenium() {

    let options = new chrome.Options();
    options.setChromeBinaryPath(chromedriver.path);
    options.addArguments('--headless');
    const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

    // const service = new chrome.ServiceBuilder(chromedriver.path);
    // const driver = new Builder().forBrowser('chrome').setChromeOptions(options).setChromeService(service).build();

    // let driver = await new Builder().forBrowser('chrome').build();

    console.log('start');

    await driver.get('https://www.google.com');

    console.log('get');

    const title = await driver.getTitle(); // => "Google"
    console.log(title);

    driver.manage().setTimeouts({implicit: 0.5 })

    let searchBox = await driver.findElement(By.name('q'));

    await searchBox.sendKeys('Selenium');
    await searchBox.sendKeys(Key.ENTER);

    const value = await driver.findElement(By.name('q')).getAttribute("value"); // => 'Selenium'
    console.log(value);

    await driver.quit();
})();