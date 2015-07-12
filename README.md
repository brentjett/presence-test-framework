# Web Presence Testing

Scratchwork for a web presence testing framework.

A web presence is a collection of web properties owned/used by a business or individual, as well as mentions discovered on the web. Building this presence into a profile allows unit tests to be run against each property to evaluate its health or functionality.

## Test Suite
A test suite is comprised of a group of tests that are run on a certain type of web property (a facebook page). Whenever a new property of type X is added, any test suites registered against that type of property are run. When all test suites are finished being run and no reruns are triggered, a final "web presence" test suite is run and the results are reported.

## Test
A test is a scripting unit for asking specific questions of a web property. Tests are grouped into test suites.

## Test Response
Each instance of a test has a response that may indicate a pass/fail status or a score/rating of some kind. A test response may also include arbitrary data attachments such as key/value pairs, lists, or tabular data which should be copyable or downloadable.
