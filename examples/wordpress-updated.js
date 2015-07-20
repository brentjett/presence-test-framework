/*
@Test: Is WordPress Up To Date?
@Subject: Digital Asset
@If: Is Type: Website
@If: Is Platform: WordPress
*/

const wpVersion = Subject.platform.version;
const wpLatestVersion = Reference.Platforms.WordPress.latestVersion();
if (wpVersion != wpLatestVersion) {
    Response.answer = false;
    Response.addData("Current Version", wpVersion);
    
    wpVersionsBehind = Reference.Platforms.WordPress.compareVersions(wpVersion, "latest"));
    Response.addData("Versions Behind", wpVersionsBehind);
}
