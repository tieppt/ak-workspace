module.exports = {
  name: 'ak-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ak-client',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
