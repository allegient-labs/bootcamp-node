const UnsavedApplication = require('../domain/UnsavedApplication');

class ApplicationCreator {
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  start(newData) {
    return UnsavedApplication.init(newData).then(app =>
      this.dataStore.save(app)
    );
  }
}

module.exports = ApplicationCreator;
