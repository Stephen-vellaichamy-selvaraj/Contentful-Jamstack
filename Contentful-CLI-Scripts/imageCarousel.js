module.exports = function (migration) {
  const imageCarousel = migration.createContentType('imageCarousel', {
    name: 'Image Carousel',
    description: 'An image carousel is a container (slideshow) of images or info that users can select by clicking a button that directs them forward or backward in the slideshow'
  });

  imageCarousel.createField('name',{
    "name": "Name",
    "type": "Symbol",
    "localized": false,
    "required": true,
    "validations": [],
    "disabled": false,
    "omitted": false
  });

  imageCarousel.createField('imageSelection',{
    "name": "Image Selection",
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
            "imageCarousel"
          ]
        }
      ],
      "linkType": "Entry"
    }
  });

  imageCarousel.createField('showSignIn',{
    "name": "Show Sign-In",
    "type": "Boolean",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
  });
  
  imageCarousel.createField('visiblie', {
    "name": "Visiblie",
    "type": "Boolean",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
  });

};