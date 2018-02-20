const validate = require('validate.js');

class UnsavedApplication {
  static init(data) {
    const validator = new Validator(data);

    if (validator.validate()) {
      return Promise.resolve(new UnsavedApplication(data));
    }

    return Promise.reject(validator.errors());
  }

  constructor({ name, email }) {
    this.status = UnsavedApplication.TYPE;

    this.email = email;
    this.name = name;
  }
}

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

UnsavedApplication.TYPE = 'UNSAVED';
UnsavedApplication.Validator = Validator;

module.exports = UnsavedApplication;
