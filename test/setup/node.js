import chai from 'chai';

process.env.NODE_ENV = 'test';

global.chai = chai;

require('babel-core/register');
require('./setup')();
