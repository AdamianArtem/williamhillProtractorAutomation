var vegasPage = function() {

    var moreButton = element(by.className("tile-menu__button--more"));
    var searchButton = element(by.className("btn-search-magnifier"));
    var searchInputField = element(by.xpath(".//input[@placeholder='Search for games...']"));
    var loginModalWindow = element(by.xpath(".//div[@data-ng-controller='wfQuickLoginController']"));
    var playNowButton = element(by.xpath(".//button[text()='Play Now']"));

    this.navigate = function() {
        browser.ignoreSynchronization=true;
        browser.get('https://vegas.williamhill.com/');
    };

    this.searchTheGame = function(game) {
        searchButton.click();
        searchInputField.sendKeys(game);
    };

    this.hoveringToTheGame = function(game) {
        browser.sleep(500);
        var gameResult =  element(by.xpath(".//img[@alt='"+game+"']"));
        var initY = gameResult.getLocation().y;
        var initX = gameResult.getLocation().x;
        browser.actions().mouseMove(gameResult, {x:initX, y:initY}).perform();
        browser.sleep(1000);
    };

    this.searchTheGame = function(game) {
        searchButton.click();
        searchInputField.sendKeys(game);
    };

    this.clickMoreButton = function() {
        moreButton.click();
    };

    this.clickPlayNowButton = function() {
        playNowButton.click();
    };

    this.isLoginModalWindowDisplayedOnThePage = function() {
        browser.sleep(500);
        expect(loginModalWindow.isDisplayed());
    }
};

module.exports = new vegasPage();
