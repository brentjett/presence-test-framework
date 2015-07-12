# Initial Questions for Evaluating a Generic Website

## Is the site up?
A simple response code from the homepage should cover this (right?).

## How many pages are there?
This is a complicated question. An XML sitemap might give a list of pages, but probably not all of them. A "site:" search could find all pages that are in a search engine's index. A list of URLs that have been it in google analytics can tell you more urls but will often contain invalid pages like misspellings. Nevertheless, all of these things combined create a picture of the total number of urls and the list of what those urls are.

## What platform is the site built on?
Platform can be divided into 3 categories: CMS/App Framework, Server-side Language (ex. PHP) or Static HTML pages. Once it is determined that a site is built on a CMS or App Framework, the question is "which one?". Since most CMS's don't use the "generator" meta tag, this will be series of OR questions looking for different features in the site's DOM structure.

If it is determined that the site is built on a particular CMS, a suite of tests geared at that platform should be triggered.
