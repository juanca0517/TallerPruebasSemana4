'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToCard extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.cardLoadTime')
            .then(cardLoadTime => {
                if (!cardLoadTime) {

                    throw new Error('Unable to find card load metrics in page');
                }
                return cardLoadTime;
            });
    }
}

module.exports = TimeToCard;


class TimeToApi extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.apiLoadTime')
            .then(window.apiLoadTime => {
                if (!apiLoadTime) {

                    throw new Error('Unable to find api load metrics in page');
                }
                return apiLoadTime;
            });
    }
}

module.exports = TimeToApi;