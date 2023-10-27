
module.exports = function (migration) {
    const phoneContainer = migration.createContentType('phoneContainer', {
      name: 'Phone Container',
      description: 'Phone Container data source'
    });

    phoneContainer.createField('title',{
        "name": "Title",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    });

    phoneContainer.createField('description',{
        "name": "Description",
        "type": "Text",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    });

    phoneContainer.createField('image',{
        "name": "Image",
        "type": "Link",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false,
        "linkType": "Asset"
    });

    phoneContainer.createField('phoneItems',{
    "name": "Phone Items",
    "type": "Array",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false,
    "items": {
      "type": "Link",
      "validations": [
        {
          "linkContentType": [
            "imageWithCaption"
          ]
        }
      ],
      "linkType": "Entry"
        }
    });
};