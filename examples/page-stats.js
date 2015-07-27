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
  Response.addObject({
    
  });
});

// Count outbound links
var outbound_links = Page.elements.find("a[href*='://']");
var total_outbound_links = outbound_links.length;
Response.addItem("Total Outbound Links", total_outbound_links);

// Count tel: links
// Count mailto: links
