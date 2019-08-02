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
 
### Saving data related to tags
Sometimes your tags are stored in database and you want to insert their id in other table so you
may need an easy way to retrieve all the ids from the tags or any realated information other than an id.

One way to do this is by adding a second parameter to the *"add"* method.

For example:

````
tags_manager.add("DB Tag Name", {id: 1});
tags_manager.add("Example", {id: 2});
tags_manager.add("Github", {id: 3});
````

So when you need to send the tag's ids all you need to do is call the method *"getRelatedData"*

````
tags = tags_manager.getRelatedData();
````

This will return an array of objects as here below:

````
[
    {id: 1}
    {id: 2}
    {id: 3}
]
````

**Note:** As you may have noticed you can have more than one key, value pair in the second argument:
Example:
````
tags_manager.add("DB Tag Name", {id: 1, other: "Something"});
tags_manager.add("Example", {id: 2, other: "Goes"});
tags_manager.add("Github", {id: 3, other: "Here"});
````
````
tags = tags_manager.getRelatedData();
````
Now this will return an array of objects as here below:

````
[
    {id: 1, other: "Something"}
    {id: 2, other: "Goes"}
    {id: 3, other, "Here"}
]
````

If we only want to get the values without key we have to use the *"key"* parameter for the 
*"getRelatedData"* method
````
tags_manager.add("DB Tag Name", {id: 1, other: "Something"});
tags_manager.add("Example", {id: 2, other: "Goes"});
tags_manager.add("Github", {id: 3, other: "Here"});

tags = tags_manager.getRelatedData("id);
````
The returned array now looks like the one below:
````
    [1,2,3]
````

 
### Settings:

| Name      | Default value | Description          | Optional Example |
| ------------- |:-------------:  | -----:|---:|
| extraTagClass | `Empty string`  | A class to be added to each tag                          |   `"custom-tag-class"`   |
| removable     | `true`          | Whether tags can be removed using the times icon &times; |    `false`     |