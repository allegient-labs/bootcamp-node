const validate = require('validate.js');

class UnverifiedApplication {
  static init(data) {
    const validator = new Validator(data);

    if (validator.validate()) {
      return Promise.resolve(new UnverifiedApplication(data));
    }

    return Promise.reject(validator.errors());
  }

  constructor({ name, email }) {
    this.status = UnverifiedApplication.TYPE;

    this.email = email;
    this.name = name;
  }
}

UnverifiedApplication.TYPE = 'UNVERIFIED';

const CONSTRAINT = {
  name: { presence: { allowEmpty: false } },
  email: { email: true }
};

class Validator {
  constructor(data) {
    this.data = data;
    this.errorMsgs = validate(this.data, CONSTRAINT);
  }

  validate() {
    return !this.errorMsgs;
  }

  errors() {
    return this.errorMsgs;
  }
}

module.exports = UnverifiedApplication;
