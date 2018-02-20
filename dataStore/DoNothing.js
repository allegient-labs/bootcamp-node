const shortid = require('shortid');
const UnverifiedApplication = require('../domain/applications/Unverified');

class DoNothingDataStore {
  save(unsavedApplication) {
    return new UnverifiedApplication(shortid.generate(), unsavedApplication);
  }
}

module.exports = DoNothingDataStore;
