# Cucumber Sandwich Weather
If cloning, remember to `npm install` first.<br>

[chromedriver](https://www.npmjs.com/package/chromedriver),
[chromeoptions](https://chromedriver.chromium.org/capabilities),
[fluent](https://en.wikipedia.org/wiki/Fluent_interface),
[jest](https://jestjs.io/docs/using-matchers),
[selenium](https://www.npmjs.com/package/selenium-webdriver),
[webdriver](https://www.selenium.dev/documentation/webdriver/)<br>

## 3rd Learning Outcome
> Can you use Selenium and the headless browser to perform (responsible) automated unit testing of a live third-party web-site?
---

*Add package dependencies*<br>
`npm install --save-dev jest`<br>
`npm install --save-dev chromedriver`<br>
`npm install --save-dev selenium-webdriver`<br><br>

*Add run script*<br>
Edit `scripts` section of `package.json` to add:<br>
`"test": "jest"`<br><br>

*Run tests*<br>
`npm test`<br><br>