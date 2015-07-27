/*
@subject: Page

Page.title;
Page.url;
Page.elements; // dom

*/

// Count outbound links
var outbound_links = Page.elements.find("a[href*='://']");
var total_outbound_links = outbound_links.length;

Response.addItem("Total Outbound Links", total_outbound_links);
