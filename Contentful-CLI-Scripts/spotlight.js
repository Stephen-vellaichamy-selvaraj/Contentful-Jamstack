module.exports = function (migration) {
    const spotlight = migration.createContentType('spotlight', {
      name: 'Spotlight Container',
      description: 'Spotlight Container'
    });

    spotlight.createField('title',
    {
      "name": "Title",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    });

    spotlight.createField('spotlightCard',
    {
      "name": "Spotlight Card",
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
              "spotlightCard"
            ]
          }
        ],
        "linkType": "Entry"
      }
    });
  };