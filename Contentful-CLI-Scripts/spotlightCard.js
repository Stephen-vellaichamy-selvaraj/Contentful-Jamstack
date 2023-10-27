module.exports = function (migration) {
  const spotlightCard = migration.createContentType('spotlightCard', {
    name: 'Spot lightCard',
    description: 'Spot lightCard Childrens'
  });

  spotlightCard.createField('name',{
    "name": "Name",
    "type": "Symbol",
    "localized": false,
    "required": true,
    "validations": [],
    "disabled": false,
    "omitted": false
  });

  spotlightCard.createField('title',{
    "name": "Title",
    "type": "Symbol",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
  });

  spotlightCard.createField('description',{
    "name": "Description",
    "type": "Text",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
 });

 spotlightCard.createField('callToAction',{
    "name": "Call to action",
    "type": "Symbol",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
  });

spotlightCard.createField('image',{
    "name": "Image",
    "type": "Link",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false,
    "linkType": "Asset"
 });

};