
module.exports = function (migration) {
    const videoContainer = migration.createContentType('videoContainer', {
      name: 'video Container',
      description: 'Video Container'
    });

    videoContainer.createField('title',
    {
        "name": "Title",
        "type": "Text",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    });    

    videoContainer.createField('videoPath',{
        "name": "Video Path",
        "type": "Text",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    });

    videoContainer.createField('posterImage',{
        "name": "Poster Image",
        "type": "Link",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false,
        "linkType": "Asset"        
    });    

    videoContainer.createField('description',{
        "name": "Description",
        "type": "Text",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    });

    videoContainer.createField('callToAction',{
        "name": "Call to Action",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
    });
}