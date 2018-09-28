import path = require('path');

// All computed properties or env properties which change across environments should be defined here
// env should be upper case only by convention
// hierarchial properties like service url/port shown in the
// example below could be defined and fetched in the api using the dot(.) notation. See example on server.ts

export const PROPERTY_CONFIG = {
    rootPath: {
        default: path.dirname(require.main.filename)
    },
    envDirPath: {
        default: path.join(path.dirname(require.main.filename), '/env')
    },
    appPort: {
        default: 3000, // if this port is changed it should be reflected in the proxy.config.json
        env: 'APP_PORT'
    },
    env: {
        default: 'development',
        format: ['production', 'development', 'test'],
        env: 'NODE_ENV'
    },
    logLevel : {
        default: 'info',
        format: ['info', 'debug', 'warn', 'error'],
        env: 'LOG_LEVEL'
    },
    traceDownstream: {
        default: false,
        env: 'TRACE_DOWN'
    }
};
