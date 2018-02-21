class UnverifiedApplication {
  constructor(savedRawApplication) {
    Object.assign(this, savedRawApplication);

    this.status = UnverifiedApplication.TYPE;
  }
}

UnverifiedApplication.TYPE = 'UNVERIFIED';

module.exports = UnverifiedApplication;
