const shortid = require('shortid');

const DoNothingDataStore = require('../DoNothing');
const UnverifiedApplication = require('../../domain/applications/Unverified');
const UnsavedApplication = require('../../domain/applications/Unsaved');

describe(DoNothingDataStore.name, () => {
  test('#save returns an unverified application', () => {
    const unsaved = new UnsavedApplication({ name: 'P1' }),
      unverified = new DoNothingDataStore().save(unsaved);

    expect(unverified).resolves.toMatchObject({
      status: UnverifiedApplication.TYPE
    });
  });
});
