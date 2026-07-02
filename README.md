# Wrongo
Wrongo is a 11ty template aiming to make webring hosting easy. The only thing you need to configure is the `preferences.json` file, then you add members to `members.json` and _voilà_, you have a custom webring!

"What is a webring", you may ask. Webrings are groups of websites chained together by a common widget. Webrings were more common before search engines and now are usually present in indie websites, since they allow the user to find related human-made content.

## I've cloned the repo, what now?
Start by customizing `preferences.json` to give your webring a name, then add your first members to `members.json`. Finally, edit the index page source at `index.md`, you can rename this file to end with `html` if you don't want to use markdown.

> [!WARNING]  
> Make sure to set `ringAddress` to your server address, otherwise the widget will be broken.

## The default widget
Wrongo comes with a default widget template at `_includes/widget.html`, most people don't need nor would want to change it. It works out of the box if you've set `ringAddress` in your config. You can skip this section if you're not interested in knowing how it works.

### How it works?
The widget itself is a Nunjunks template that pulls `ringAddress` from your preferences file to build an address like this:

```njk
{{ringAddress}}/redirect?action=previous&current={{address}}
```

> [!NOTE]  
> `action=previous` can also be `action=next`.

`{{address}}` will not be replaced right now, for that we have the widget source generator, since each website that has the widget must inform it's own address in the URL parameter.

If everything is correct, the link should lead to a page in your Wrongo instance that will redirect to the next or previous member of that webring.

## Custom widgets
The `members.json` file is copied to the generated website's root, and you can do whatever you want using that.

To make a widget from this you need to pull that file using JS and parse it. You can take a look at Wrongo's `redirect.js` for part of the code.

## I want more pages
Just add a new file (`md`, `html`) to the `/pages` directory, you may also want to drop that link on the `links` section of `preferences.json`.

## I want more styling
Add your custom CSS to `/static` at the project root, then change your `preferences.json` stylesheets section so Wrongo knows where to look for CSS. Example:

```json
"stylesheets": [
	"wrongo.css",
    "custom.css",
    "works/with/subdirectories.css"
]
```

## I want more files
Everything you drop on `/static` will be copied to `/static` in the generated website.

## Frequent Questions
### The widget is not working
Please read again the section of this page about the widget, if you're still unsure why it is not working, please open an issue.

### Markdown doesn't have feature X
Markdown pages can have HTML mixed with markdown, just make sure to leave a newline before and after the HTML tags.

### I want to disable widget source on the sidebar
You can disable the widget source generator by setting `showWidgetSource` to false inside `preferences.json`.