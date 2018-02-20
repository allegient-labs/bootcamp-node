class UnverifiedApplication {
  constructor({ name, email } = {}) {
    this.status = UnverifiedApplication.TYPE;

    this.email = email;
    this.name = name;
  }
}

UnverifiedApplication.TYPE = 'UNVERIFIED';
module.exports = UnverifiedApplication;
