news21-weedrush-public
===========

Public version of America’s Weed Rush, the 2015 News21 project on marijuana legalization in America.

##Introduction
It is our hope that by open-sourcing the code to build the site, other projects can use it to bootstrap their own sites or use it as a learning tool.

Some features of this project that may be of interest:

* Aggressive separation of content and presentation through consistent use of Jekyll includes
* DRY principle used as much as possible to streamline page builds and avoid oversights during production
* Frontmatter is used extensively in stories to control presentation

Feedback and questions are welcome! Send them to <niclas.lindh@asu.edu>.

##Changes from the published project
This repository has been changed from the [Weed Rush project website][wr] in the following ways:

* Galleria uses the free default theme instead of a premium theme
* Google Analytics code is generic instead of the project's real code
* Removed environment-specific items from ```_config.yml```
* The ```Blog``` link has been removed from the navbar since the blog is a WordPress install and not included in this repository

##Technical requirements
This project is built on Jekyll 2. To get it going on your machine, [install Jekyll][install] using [RVM][rvm] or RBENV, whichever you're most comfortable with.

##Story URLs
**This section is extra important!**
To keep from having to update links in multiple places when story titles are edited/changed, there is a file called ```urls.yml``` in the ```_data``` folder. This file maps slugs to "real" URLs. To make this work, the individual story front matter has two keys: ```slug``` and ```permalink```. After a permalink has been changed in a story, *also* change it in ```urls.yml```.

In individual pages, **never** use the permalink as a link, instead use the map from ```urls.yml``` as such:

```<a href="{{ site.data.urls.pin.url }}">Link text</a>``` where ```pin``` is the ```slug``` of the story.

This is to avoid forgetting to update a link everywhere it occurs on the site.

##Building pages
All story page that appear on the site live in the folder ```_stories```.

Front matter determines all meta information about each story, including the URL, and works kind of like tags and categories in WordPress. *Kind of*.

###An example of the front matter:

```yaml
---
layout: story #Always the same
title: "I am an example of a story with a moderately long title" #Required
byline: JoeBob Hemingway and Larry Proust #Not required
credits: #Tied to _data/credits.yml. Not required
  - JoeBob_Sartre
  - Larry_Proust
hero: example #Not required
hero-credit: Hank Thoreau #Required if you have a hero
permalink: i-am-an-example/ #Note the slash. Required—make this SEO friendly
slug: example #Make sure to update the urls.yml file when either this or the permalink change!
socialimage: example-social.jpg #If not set, FB and Twitter will use the site-wide social image
blurb: "This is the text used for the description, Twitter and FB." #Required
soundcite: yes #If the story has soundcite embeds. Otherwise elide or set to no
publishdate: "Aug. 22, 2015" #If not set, the page will use the site publishdate
section: medical #Pulls in a section into the footer
pinfooter: yes #To include the pin footer at the bottom
---
```

Note that the front matter makes the following assumption:

* ```socialimage``` is the name of an image that lives in ```/img/social/```. It is used by Facebook and Twitter cards.
* ```hero``` is the name of an image that lives in ```/img/hero/``` and comes in four sizes. See below.

To create a new story, you can duplicate an existing story and replace the information.

##Story credits
The footer of each story will contain an image and short bio of the fellow(s) who contributed. This is controlled by the ```credits``` front matter.

```Credits``` maps to a file called ```credits.yml``` in the ```_data``` folder. The file has the following format:

```yaml
JoeBob_Sartre:
  link: "joebob_sartre"
  name: "JoeBob Sartre"
  sponsor: "JoeBob Sartre is a journalism graduate of Disillusionment University with a concentration in political science."
Larry_Proust:
  link: "larry_proust"
  name: "Larry Proust"
  sponsor: "Larry Proust is a News21 Hearst Fellow pursuing his bachelor’s and master’s degrees in journalism simultaneously at the Walter Cronkite School of Journalism and Mass Communication at Arizona State University."
```

This information is used the following way by the story pages:

```link``` is a named anchor on the About page *and* the filename for the fellow's headshot in the ```img/headshots``` folder. **Note:** All lowercase.

```name``` is the fellow's name.

```sponsor``` is the short blurb for the fellow.

##The config.yml file
In the root of the working directory is a file called ```config.yml```. This file controls the URL of the site as well as the project title, project blurb and project publishing date.

**NOTE:** For Jekyll to pick up changes in ```config.yml``` you have to exit and restart. (```control-c``` then ```jekyll build --watch```).

Here's what the ```config.yml``` file looks like:

```yaml
# Site settings
email: you@example.com
title: "I am a clone of News21: America’s Weed Rush"
description: "I am a clone of the 2015 News21 project America’s Weed Rush."
socialimage: weedsocialimage.jpg
publishdate: "Aug. 15, 2015"

baseurl: ""
url: "" # Put in your own FQDN here

# Build settings
markdown: redcarpet
permalinks: pretty

collections:
  stories:
    output: true

sass:
  style: :compressed
  sass_dir: _sass
 
exclude: ['README.md']
```

###Preparing hero images
Each hero image must be placed in a folder in ```img/hero/```, named the same as the hero image. Then in that folder goes four sizes of the hero image: 768, 1200, 1600, 2560 wide.

The folder structure and naming goes like this:

```img/hero-stories/example-hero/``` then in the ```example-hero``` folder sits ```example-hero-768.jpg```, ```example-hero-1200.jpg```, ```example-hero-1600.jpg``` and ```example-hero-2560.jpg```.

Like this:

```code
img/
	hero-stories/
		example-hero/
			example-hero-768.jpg
			example-hero-1200.jpg
			example-hero-1600.jpg
			example-hero-2560.jpg
```

###Adding section footers
To add a section footer to a story, simply include it in the front matter.

There are six options:

```yaml
section: law
section: medical
section: politics
section: money
section: recreational
section: science
```

###Including full-bleed videos
To include a full-bleed video on a page, use this code:

```{% include e-vimeo.html video=65861815 caption="I am the caption for the video." %}```

```code``` is Vimeo's unique number for each video which you can get out of the sharing panel.

###Including pullout videos
To include a pullout video, use this code:

```{% include e-pull-vimeo.html video="65861815" caption="I am the caption for the video. (First Last | News21)" %}```

###Including pullout images
To include a pullout image, use this code:

```{% include e-pull-image.html image="flags.jpg" caption="I am the caption for the image (First Last | News21)." %}```

The system looks for the image in the folder ```img/single-pull```.

Images should be 768 pixels wide.

###Including mid-size images
To include a mid-size image that follows the column, use:

```{% include e-mid-image.html image="example.jpg" caption="May the caption be with you (First Last | News21)" %}```

The system looks for the image in ```/img/single-mid```.

Make these images 1200 pixels wide.

###Including pullquotes
To turn text into a pullquote, use this code:

```{% include e-pullquote.html text="I am the very important pullquote." %}```

###Including iframed elements
Interactives for the project will be included as standalone html files in the ```Interactives	``` folder.

```{% include e-pull-interactive.html path="example" 480="300" 768="400" 1200="500" 1600="700"caption="This is the caption. (Bob Sartre | News21)" %}```

The numbers indicate how deep the interactive will be at each breakpoint. This will vary by interactive and will require checking the page at different widths. 

**Note:** If you don't set the breakpoints, the interactive will respond according to its own devices. Use this for things like timeline.js.

The system expects interactives to be placed in a folder in the ```interactives``` folder with an index.html file as a starting point. Use the name of that folder as ```path``` in the invocation.

The path must be unique.

###Including parallax images
Parallax images **work like hero images** in that there are four sizes, with all files placed into a folder in ```img/single/```.

The image sizes are 768, 1200, 1600, 2560.

To include a parallax image on a page, use this code:

```{% include e-parallax.html image="flags" caption="This is the caption. (Bob Sartre | News21)" %}```

The system expects to find the single images in the folder ```/img/single/```.

##Section navigation
Long stories are broken up into sections. To include section navigation:

```{% include e-sections.html slug="example" %}``` 

Producing sections requires updating the data file ```_data/sections.yml``` according to this format:

```yaml
example: 
- title: "First section link text"
  anchor: "first"
- title: "I am the second section"
  anchor: "second"

california:
- title: "Cali section1 link text"
  anchor: "c1"
- title: "Cali second section"
  anchor: "c2"
```

The ```title``` is the text visible in the section area and the ```anchor``` is unsurprisingly enough the anchor name.

To create the sections inside the story, drop the anchor code in a few lines above the actual section header, as so:

```html
Lorem ipsum.<a name="second"></a> Dolor sit amet.
```

This gives room for the navbar.

Use the following html for the section header:

```<h2>I am a section header.</h2>```

(This way you can have a different section title in the page flow than in the sections box.)

The important thing is to map the slug of the story to the slug in the database file.

##Including sidebars
Some stories will have smaller, sidebar stories. To link to those stories, include the sidebar:

```{% include e-sidebar.html slug="example" %}```

Use the story's slug as the slug.

The sidebar functionality pulls from a data file called ```sidebars.yml``` in the ```_data``` folder. 

This file follows this format:

```yaml
example: 
- title: "I am a sidebar story"
  slug: "example"
- title: "Another sidebar story"
  slug: "states"
```

##PIN queries
Can be placed in different locations, either on the right rail:

```{% include e-pull-pin.html %}```

or in the footer of the story.

To put in footer of story, add this to front matter:

```pinfooter: yes```

##Infoboxes
To include an infobox, use this code:

```{% include e-infobox.html text="I am the infobox text" %}```

**NOTE:** Take out all line breaks from the infobox text. It can not span lines.

##Building slideshows
Slideshows are a touch more complicated. To include a slideshow on a page, use this code:

{% include e-slideshow.html uniqueid="slideshow1" %}

The code makes several assumptions you must meet.

* ```slideshow1``` in the example must be a *unique* id for the slideshow.
* The images that make up the slideshow all live in a folder with *the same name* as the unique id of the slideshow, located in the folder ```/slideshows```.
* There's a file with the same name as the unique id in the folder with the uniqueid name. The file *must* called ```uniqueid.json```. This file has the all the data for the slideshow.

Here's an example of the file format:

```json
[
  {
    "thumb":"/slideshows/Nucla_Marie/Nucla_Marie_01-t.jpg",
    "image":"/slideshows/Nucla_Marie/Nucla_Marie_01-i.jpg",
    "big":"/slideshows/Nucla_Marie/Nucla_Marie_01-b.jpg",
    "description":"At her home in Nucla, Colo., historian Marie Templeton retrieves the gun her husband gave her for their second anniversary more than 60 years ago. Photo by Morgan Spiehs/News 21."
  },
  {
    "thumb":"/slideshows/Nucla_Marie/Nucla_Marie_02-t.jpg",
    "image":"/slideshows/Nucla_Marie/Nucla_Marie_02-i.jpg",
    "big":"/slideshows/Nucla_Marie/Nucla_Marie_02-b.jpg",
    "description":"Templeton retrieves an article she kept about Nucla, which refers to the town as an \"utopia.\" Photo by Morgan Spiehs/News 21."
  },
  {
    "thumb":"/slideshows/Nucla_Marie/Nucla_Marie_03-t.jpg",
    "image":"/slideshows/Nucla_Marie/Nucla_Marie_03-i.jpg",
    "big":"/slideshows/Nucla_Marie/Nucla_Marie_03-b.jpg",
    "description":"Templeton talks about Nucla inside the home she and her husband built in the 1960s. Photo by Morgan Spiehs/News 21."
  },
  {
    "thumb":"/slideshows/Nucla_Marie/Nucla_Marie_04-t.jpg",
    "image":"/slideshows/Nucla_Marie/Nucla_Marie_04-i.jpg",
    "big":"/slideshows/Nucla_Marie/Nucla_Marie_04-b.jpg",
    "description":"Water flows through a ditch next to Templeton's home in Nucla on June 17, 2014. The ditch was started two years after the Colorado town was founded in 1896, and it took nearly 10 years to build. The ditch is fed by the San Miguel River and was needed to bring water to Nucla. Photo by Morgan Spiehs/News 21."
  }
]
```

**Note:** The JSON format is exceptionally persnickety. If things don't work, check the syntax of this file.

**Note2:** The backslashes in the JSON file are to escape quote characters. It is much better to use real smart quotes.

The JSON file is generated from a CSV file (it's much easier for humans to deal with CSV files).

Here's the format of the CSV file:

```CSV
thumb,image,big,description
Nucla_Marie_01-t.jpg,Nucla_Marie_01-i.jpg,Nucla_Marie_01-b.jpg,"At her home in Nucla, Colo., historian Marie Templeton retrieves the gun her husband gave her for their second anniversary more than 60 years ago. Photo by Morgan Spiehs/News 21."
Nucla_Marie_02-t.jpg,Nucla_Marie_02-i.jpg,Nucla_Marie_02-b.jpg,"Templeton retrieves an article she kept about Nucla, which refers to the town as an ""utopia."" Photo by Morgan Spiehs/News 21."
Nucla_Marie_03-t.jpg,Nucla_Marie_03-i.jpg,Nucla_Marie_03-b.jpg,"Templeton talks about Nucla inside the home she and her husband built in the 1960s. Photo by Morgan Spiehs/News 21."
Nucla_Marie_04-t.jpg,Nucla_Marie_04-i.jpg,Nucla_Marie_04-b.jpg,"Water flows through a ditch next to Templeton's home in Nucla on June 17, 2014. The ditch was started two years after the Colorado town was founded in 1896, and it took nearly 10 years to build. The ditch is fed by the San Miguel River and was needed to bring water to Nucla. Photo by Morgan Spiehs/News 21."
```

To convert from CSV to JSON, use this site: [http://csvtojson.com](http://csvtojson.com).

The actual slideshow lives in a file called ```index.html``` which lives in the same folder.

Duplicate the existing index.html to the new slideshow folder and then *only* change line 81 from:

```$.getJSON('/slideshows/Nucla_Marie/Nucla_Marie.json', function(data) {```

to the path of the JSON file in the current folder.

Once you've created a couple, it's not that bad. Trust me.

##Image requirements
For slideshows, all images *must* be the exact same size. Take care of this in Photoshop. It's highly recommended to avoid portrait mode images. If possible, crop them to be landscape mode.

[lint]:http://jsonlint.com/
[install]:http://jekyllrb.com/docs/installation/
[rvm]:http://rvm.io/rvm/install
[wr]:http://weedrush.news21.com