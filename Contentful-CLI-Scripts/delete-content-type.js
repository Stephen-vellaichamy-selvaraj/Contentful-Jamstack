/*Command to execute
contentful space migration --environment-id 'release-1' Contentful-CLI-Scripts/delete-content-type.js*/

module.exports = function (migration) {
    migration.deleteContentType('category');
  };

