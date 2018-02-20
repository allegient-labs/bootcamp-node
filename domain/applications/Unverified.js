class UnverifiedApplication {
  constructor(id, unsavedApplication) {
    Object.assign(this, unsavedApplication);

    this.status = UnverifiedApplication.TYPE;
    this.id = id;
  }
}

UnverifiedApplication.TYPE = 'UNVERIFIED';

module.exports = UnverifiedApplication;
