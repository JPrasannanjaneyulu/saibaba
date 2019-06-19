$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/files/login1.feature");
formatter.feature({
  "line": 2,
  "name": "Gmail login",
  "description": "",
  "id": "gmail-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@rama"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Userid test",
  "description": "",
  "id": "gmail-login;userid-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "navigate to gmail using chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"\u003cx\u003e\" and click next",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "password should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close site",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "gmail-login;userid-test;",
  "rows": [
    {
      "cells": [
        "x"
      ],
      "line": 9,
      "id": "gmail-login;userid-test;;1"
    },
    {
      "cells": [
        "j.prasannanjaneyulu131"
      ],
      "line": 10,
      "id": "gmail-login;userid-test;;2"
    },
    {
      "cells": [
        "thailand"
      ],
      "line": 11,
      "id": "gmail-login;userid-test;;3"
    },
    {
      "cells": [
        "prasanna"
      ],
      "line": 12,
      "id": "gmail-login;userid-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 310477,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Userid test",
  "description": "",
  "id": "gmail-login;userid-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@rama"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "navigate to gmail using chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"j.prasannanjaneyulu131\" and click next",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "password should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "GmailMethods1.method1()"
});
formatter.result({
  "duration": 78063734400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j.prasannanjaneyulu131",
      "offset": 17
    }
  ],
  "location": "GmailMethods1.method2(String)"
});
formatter.result({
  "duration": 9960648522,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method3()"
});
formatter.write("Userid is correct");
formatter.result({
  "duration": 5107527489,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method4()"
});
formatter.result({
  "duration": 791463488,
  "status": "passed"
});
formatter.before({
  "duration": 53885,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Userid test",
  "description": "",
  "id": "gmail-login;userid-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@rama"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "navigate to gmail using chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"thailand\" and click next",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "password should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "GmailMethods1.method1()"
});
formatter.result({
  "duration": 21014194162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thailand",
      "offset": 17
    }
  ],
  "location": "GmailMethods1.method2(String)"
});
formatter.result({
  "duration": 5687189588,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method3()"
});
formatter.write("Userid is correct");
formatter.result({
  "duration": 5083706504,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method4()"
});
formatter.result({
  "duration": 804165311,
  "status": "passed"
});
formatter.before({
  "duration": 47213,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Userid test",
  "description": "",
  "id": "gmail-login;userid-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@rama"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "navigate to gmail using chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"prasanna\" and click next",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "password should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "GmailMethods1.method1()"
});
formatter.result({
  "duration": 23264096401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prasanna",
      "offset": 17
    }
  ],
  "location": "GmailMethods1.method2(String)"
});
formatter.result({
  "duration": 5674355876,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method3()"
});
formatter.write("Userid is correct");
formatter.result({
  "duration": 5065678342,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method4()"
});
formatter.result({
  "duration": 834430350,
  "status": "passed"
});
});