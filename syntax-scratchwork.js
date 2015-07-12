// Test Script - Thinking Out loud

// Top Level Variables - What can you ask questions of?
Reference; // Singlton object to gather data references. Platforms, common stats, calculations
var version = Reference.Platforms.WordPress.latest_version();
var pet_care_businesses = Reference.Industry("pet-care").businesses;


// Tests should be able to attach data to the test's response
if (is_configured_wrong) {
  Response.add_message("Yes, It is configured wrong", "warning");
}
if (sites.count >= 1) {
  Response.add_list("Site List", sites);
}
