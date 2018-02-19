'use strict';

const Audit = require('lighthouse').Audit;

const MAX_LOAD_TIME = 3000;

class LoadApiAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'Tiempo llamada del api',
            failureDescription: 'Tiempo, llamada del api',
            helpText: 'test, que busca saber si la llamada ap api tarda menos de 3 segundos',
            requiredArtifacts: ['TimeToApi']
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