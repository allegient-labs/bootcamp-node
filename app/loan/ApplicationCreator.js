const UnverifiedApplication = require('../../domain/UnverifiedApplication');

class ApplicationCreator {
  static start(unverifiedData) {
    return new UnverifiedApplication(unverifiedData);
  }

  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  save(unverifiedApplication) {
    return this.dataStore.save(unverifiedApplication);
  }
}
module.exports = ApplicationCreator;
