"use strict";

describe('vegas.williamhill protractor test', function() {

    var vegasPage = require('../pages/vegasPage.js');
    var game = "Mayfair Roulette";

    it('should have a title', function() {
        vegasPage.navigate();
        expect(browser.getTitle()).toEqual('Play Online Casino Games at William Hill Vegas');
    });

    it('Search the game', function() {
        vegasPage.searchTheGame(game);
    });

    it('Hovering to the game', function() {
        vegasPage.hoveringToTheGame(game);
    });

    it('Click "more" button', function() {
        vegasPage.clickMoreButton();
    });

    it('Click "play now" button and validate Login window is displayed', function() {
        vegasPage.clickPlayNowButton();
        vegasPage.isLoginModalWindowDisplayedOnThePage();
    });


});