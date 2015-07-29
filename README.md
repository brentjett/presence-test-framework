# Digital Presence Testing

Scratchwork for a digital presence testing framework.

## Digital Presence (Account Object)
A digital presence is a collection of properties owned/used by a business or individual, as well as mentions discovered on the web. Building this presence into a profile allows unit tests to be run against each property to evaluate its health or functionality.

See [object model example](examples/account-obj.json).

## Test Suite
A test suite is comprised of a group of tests that are run on a certain type of property (ex: a facebook page). Whenever a new property of type X is added, any test suites registered against that type of property are run. When all test suites are finished being run and no reruns are triggered, a final "web presence" test suite is run and the results are reported.

## Test
A test is a scripting unit for asking specific questions of a web property. Tests are grouped into test suites. Testing if a WordPress install is secure might look something like this:

```javascript
// What version of WordPress is the site running?
var wp_version = Site.platform.version;
Response.add_value(“WordPress Version”, wp_version);

// Is it the latest version of WordPress?
var WordPress = Reference.Platform.WordPress;
var is_updated = WordPress.is_latest_version(wp_version);
if(!is_updated) {
    // If not, how many versions behind is it?
	var versions_behind = WordPress.version_diff(wp_version);
	Response.add_message(“Site is “ + versions_behind + “ versions behind”, “warning”);

    // Are there known issues with that version?
	var issues = WordPress.version(wp_version).known_issues;
	Response.add_list(“Version Issues”, issues);
}
// Are any security plugins installed?
var security_plugins = [
	“all-in-one-wp-security”,
	“better-wp-security”,
	“bullet-proof-security”
];
var plugins = Site.platform.active_plugins;
// SKIP CODE: foreach plugin, check if handle is in array security_plugins

// Is the first user an admin? It shouldn't be.
var users = Site.platform.users;
if (users[0].has_role(‘admin’)) {
	Response.add_message(“First user should not be an admin. This is a security risk”, “warning”);
}
```

## Test Response
Each instance of a test has a response that may indicate a pass/fail status or a score/rating of some kind. A test response may also include arbitrary data attachments such as key/value pairs, lists, or tabular data which should be copyable or downloadable. A test's response may also be able to show visual things like collections of images, data visualizations, or rich media like maps or videos.

The response of a Test Suite is the collective list of the responses from all completed tests.
