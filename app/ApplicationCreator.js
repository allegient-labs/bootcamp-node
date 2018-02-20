const UnsavedApplication = require('../domain/applications/Unsaved');

class ApplicationCreator {
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  start(newData) {
    return UnsavedApplication.initIfValid(newData).then(this.dataStore.save);
  }
}

module.exports = ApplicationCreator;
