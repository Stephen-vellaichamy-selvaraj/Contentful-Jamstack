module.exports = function (migration) {
  const imageWithCaption = migration.createContentType('imageWithCaption', {
    name: 'Image with Caption',
    description: 'This allows content authors to create multiple instances of it using different photos for each instance while the front-end code renders the carousel appropriately for each device or context.'
  });

  imageWithCaption.createField('title',{
    "name": "Title",
    "type": "Symbol",
    "localized": false,
    "required": true,
    "validations": [],
    "disabled": false,
    "omitted": false
  });

  imageWithCaption.createField('image',{
    "name": "Image",
    "type": "Link",
    "localized": false,
    "required": true,
    "validations": [],
    "disabled": false,
    "omitted": false,
    "linkType": "Asset"
  });

  imageWithCaption.createField('captionText',{
    "name": "Caption Text",
    "type": "Text",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
  });
  
  imageWithCaption.createField('callToAction',{
    "name": "Call to Action",
    "type": "Symbol",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
  });

  const tag = migration.createTag('gatsby');
  tag.name('Gatsby');  
};