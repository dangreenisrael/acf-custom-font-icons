# ACF Custom Font Icons
This is a plugin that allows you to use custom font icons (as opposed to just font awesome) in your
custom fields.


## Using the plugin
There are 2 options you must set
1) **Font CSS File Location** is a relative path to the css file that has the font classes in your theme.
2) **CSS Class Prefix** (optional) is the font prefix you need to use in the css class (fa) this will default to `fa`

Thats it, go use your awesome fonts.

## Writing your template
ACF will return a value in this form `fa fa-cool-icon` that you can use however you please. 
I recommend something like `<i class="fa fa-cool-icon"></i>` but it's really up to you.