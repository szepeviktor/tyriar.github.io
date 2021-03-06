---
layout      : post
title       : Enabling the new and improved shares on Google+
tags        : [Accessibility, Google, HTML, SEO]
preview     : /images/2014/03/14/rich-share.png
socialimage : /images/2014/03/14/google-plus.png
primarytag  : SEO
gpluspost   : AegpXnJJ8oe
intro       : So Google+ dropped an update on us yesterday which allows full-sized image previews and descriptions for page shares! No longer will you have to share images and include a link to get more presence on Google+ feeds. This article will tell you how to get them up on your site!
---

## What's new?

When sharing a page, instead of the regular old style shares.

{% include post-image.html class="center-aligned" alt="The normal style Google+ shares" src="/images/2014/03/14/normal-share.png" %}

It is now possible to include full-sized images and descriptions as well.

{% include post-image.html class="center-aligned" alt="The new, richer Google+ shares" src="/images/2014/03/14/rich-share.png" %}



## Enabling them

They can be enabled using the [Open Graph protocol][1]. There has yet to be an official announcement so I've done a little experimenting and this is the bare minimum metadata that needs to be included to get them working:

<!--prettify lang=html-->
    <meta property="og:title" content="(The title)">
    <meta property="og:description" content="(The description)">
    <meta property="og:type" content="article">
    <meta property="og:image" content="(URL to the image)">

For example, my [XML sitemaps][2] article uses:

<!--prettify lang=html-->
	<meta property="og:title" content="XML sitemaps">
	<meta property="og:description" content="This post explains what XML sitemaps are, why they're useful and how to make one.">
	<meta property="og:type" content="article">
	<meta property="og:image" content="http://www.growingwiththeweb.com/images/2014/03/03/sitemap.png">



## Notes

Here are some observations I made while experimenting with the new feature.

- They work work on *any page*, regardless of whether it has a Google+ Page or Profile attached with Google Authorship.
- The images need to have a decent width, around 700-800 pixels otherwise they will be reverted to the old style.
- Currently they are not enabled on Google+ for Android.



[1]: http://ogp.me/
[2]: /2014/03/xml-sitemaps.html
