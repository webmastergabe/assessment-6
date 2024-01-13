const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });


  test("the button for draw works", async () => {
    await driver.get("http://localhost:8000");
    
    await driver.findElement(By.css('#draw'))
    .click();
  });
  
    test("displays all bot cards", async () => {
      await driver.get("http://localhost:8000");
      
      await driver.findElement(By.css('#see-all'))
      .click();
      // const displaysAllBots = await driver.wait(
      // until.elementLocated(By.css('#all-bots')), 1000)
    });
    
    // Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

    test("add bot to duo", async () => {
      await driver.get("http://localhost:8000");
      const buttons = await driver.findElement(By.css("onClick[name='chooseBot(3)']")).click();

      // await driver.findElement(By.css('#bot-btn')).click();
    await driver.wait(
        until.elementLocated(By.css('#player-duo')), 1000)
    });
});