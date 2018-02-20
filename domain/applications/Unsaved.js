const validate = require('validate.js');

const CONSTRAINT = {
  name: { presence: { allowEmpty: false } },
  email: { email: true }
};

class UnsavedApplication {
  static initIfValid(data) {
    const errorMsgs = validate(data, CONSTRAINT);

    if (!errorMsgs) {
      return Promise.resolve(new UnsavedApplication(data));
    }

    return Promise.reject(errorMsgs);
  }

  constructor({ name, email }) {
    this.status = UnsavedApplication.TYPE;

    this.email = email;
    this.name = name;
  }
}

UnsavedApplication.TYPE = 'UNSAVED';
UnsavedApplication.CONSTRAINT = CONSTRAINT;

module.exports = UnsavedApplication;
