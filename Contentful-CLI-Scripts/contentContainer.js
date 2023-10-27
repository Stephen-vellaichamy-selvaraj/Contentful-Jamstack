
module.exports = function (migration) {
    const contentContainer = migration.createContentType('contentContainer', {
      name: 'Generic Content',
      description: 'Title and Description'
    });

    contentContainer.createField('title',
    {
      "name": "Title",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    });

    contentContainer.createField('Description',
    {
        "name": "Description",
        "type": "Text",
        "localized": false,
        "required": true,
        "validations": [],
        "disabled": false,
        "omitted": false
    });      
};


