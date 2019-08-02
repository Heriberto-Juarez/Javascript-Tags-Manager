# Javascript-Tags-Manager
Add and remove tags to the DOM easily

![Captura](https://user-images.githubusercontent.com/20604217/62344951-dc52b980-b4b5-11e9-811c-e9d83276a19e.PNG)

## Required Files
* app.js
* tags-manager-styles.css

**Note:** You need JQuery

## Basic usage guide:

In order to create or remove tags, first you'll need to create a div with the css class *"tags"*
*"tags"* class is used for styling and for the div identification

### First steps:
You'll also need to create and instance of TagsManager class.

The TagsManager's argument is an object *"{}"* that contains some settings, the only setting 
that is needed is the *container* setting which as a value has a jquery-selected dom object which 
is our div with a *tags* class in this case.

````
let tags_manager = new TagsManager({container: $(".tags")});

````

### Adding tags.
To add a tag you simply have to call the *add(tag)* method which receives a string as a parameter
````
tags_manager.add("This is the tag's text")
tags_manager.add("Tag")
````

### Removing tags:
You can choose to remove only one tag or all the tags.
To remove only one tag all you need to do is call the *remove(tag)* method

**Note:** The tags can be removed y default by clicking the times icon in the tag. Check the settings section to learn how to disable the icon.

````
tags_manager.remove("This is the tag's text")
tags_manager.remove("Tag")
````
To remove all tags call the .wipeTags() method
````
tags_manager.wipeTags()
````
 
### Settings:

| Name      | Default value | Description          | Optional Example |
| ------------- |:-------------:  | -----:|---:|
| extraTagClass | `Empty string`  | A class to be added to each tag                          |   `"custom-tag-class"`   |
| removable     | `true`          | Whether tags can be removed using the times icon &times; |    `false`     |