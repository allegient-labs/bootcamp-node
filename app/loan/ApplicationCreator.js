const UnverifiedApplication = require('../../domain/UnverifiedApplication');

class ApplicationCreator {
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  start(unverifiedData) {
    return UnverifiedApplication.init(unverifiedData).then(app =>
      this.dataStore.save(app)
    );
  }
}

module.exports = ApplicationCreator;
