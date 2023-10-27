module.exports = function (migration) {
    const webPage = migration.createContentType('webPage', {
      name: 'Generic Web Page',
      description: 'Generic Web Page Content Type'
    });
    
    webPage.createField('title',
    {
        "name": "Title",
        "type": "Symbol",
        "localized": false,
        "required": true,
        "validations": [],
        "disabled": false,
        "omitted": false
    });
  
    webPage.createField('slug',
    {
        "name": "Slug",
        "type": "Symbol",
        "localized": false,
        "required": true,
        "validations": [],
        "disabled": false,
        "omitted": false
    });

    webPage.createField('seoMetadata',
    {
        "name": "SEO Metadata",
        "type": "Link",
        "localized": false,
        "required": false,
        "validations": [
        {
            "linkContentType": [
            "seoContent"
            ]
        }
        ],
        "disabled": false,
        "omitted": false,
        "linkType": "Entry"
    });

    webPage.createField('Sections',{
        "name": "Sections",
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
                "imageCarousel",
                "spotlight",
                "phoneContainer",
                "videoContainer",
                "contentContainer"
            ]
            }
        ],
        "linkType": "Entry"
        }
    });
  }