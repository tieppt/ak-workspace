module.exports = {
  name: 'ak-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ak-client',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
