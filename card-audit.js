'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 8000;

const MAX_LOAD_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'card-audit',
            description: 'Schedule card initialized and ready',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' card is shown.',

            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToCard;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}


module.exports = LoadAudit;



class LoadApiAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'Check out call api',
            failureDescription: 'Check out call api time',
            helpText: 'In this test, we find if the call api take in less three seconds',
            requiredArtifacts: ['TimeCallAPI']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToApi;

        const belowThreshold = loadedTime <= MAX_LOAD_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadApiAudit;