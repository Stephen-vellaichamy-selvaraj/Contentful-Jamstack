
module.exports = function (migration) {
    const seoContent = migration.createContentType('seoContent', {
      name: 'SEO Content',
      description: 'Meta tags provide information about the webpage in the HTML of the document. This information is called "metadata" and while it is not displayed on the page itself, it can be read by search engines and web crawlers.'
    });

    seoContent.createField('pageTitle',{    
        "name": "Page Title",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    });

    seoContent.createField('metaDescription',{    
    "name": "Meta Description",
    "type": "Text",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
    });

    seoContent.createField('openGraphTags',{    
        "name": "Open Graph Tags",
        "type": "Text",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    });

  seoContent.createField('googleTagManagerScript',{   
    "name": "Google Tag Manager script",
    "type": "Text",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
  });
}