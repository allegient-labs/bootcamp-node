const shortid = require('shortid');
const UnverifiedApplication = require('../domain/applications/Unverified');

class DoNothingDataStore {
  save(unsavedApplication) {
    return this.saveToDb(unsavedApplication).then(unsavedApplication.nextStep);
  }

  saveToDb(app) {
    return Promise.resolve({ id: shortid.generate(), ...app });
  }
}

module.exports = DoNothingDataStore;
