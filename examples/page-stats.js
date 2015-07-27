/*
@Title: General Page Stats
@subject: Page

Page.title;
Page.url;
Page.elements; // dom

*/

// Display page metadata
var metas = Page.elements.find("meta");
metas.each(function(element){
  var item = {};
  if (item.attr("name") != undefined) item.name = item.attr("name");
  if (item.attr("content") != undefined) item.content = item.attr("content");
  if (item.attr("http-equiv") != undefined) item.http_equiv = item.attr("http-equiv");
  Response.addObject(item);
});

// Count outbound links
var outbound_links = Page.elements.find("a[href*='://']");
var total_outbound_links = outbound_links.length;
Response.addItem("Total Outbound Links", total_outbound_links);

// Count tel: links
// Count mailto: links
