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
  "duration": 360769,
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
  "duration": 59329308258,
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
  "duration": 12675293977,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method3()"
});
formatter.write("Userid is correct");
formatter.result({
  "duration": 5073639882,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method4()"
});
formatter.result({
  "duration": 1274387284,
  "status": "passed"
});
formatter.before({
  "duration": 97505,
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
  "duration": 37775192983,
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
  "duration": 5401213064,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method3()"
});
formatter.write("Userid is correct");
formatter.result({
  "duration": 5063463952,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method4()"
});
formatter.result({
  "duration": 1575178408,
  "status": "passed"
});
formatter.before({
  "duration": 101097,
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
  "duration": 38653566271,
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
  "duration": 5790363734,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method3()"
});
formatter.write("Userid is correct");
formatter.result({
  "duration": 5071914557,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods1.method4()"
});
formatter.result({
  "duration": 1195533450,
  "status": "passed"
});
});