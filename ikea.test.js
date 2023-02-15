const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

beforeAll(async () => {
    browser.browserBuild();
}, timeout);

beforeEach(async () => {
    await browser.browserNavigate('https://www.ikea.com/');
}, timeout);

afterAll(async () => {
    await browser.browserExit();
}, timeout);


test("Complex CSS selector", async () => {
    await browser.waitForElementByCss('section.hero div.new-region-picker > a span.go-shopping');
    const element = await browser.getElementByCss('section.hero div.new-region-picker > a span.go-shopping');
    const text = await element.getText();
    expect(text).toBe('Go shopping');
});


test("Initially has a video", async () => {
    await browser.waitForElementByCss('section.hero div.video-container > .svelte-1dd8mg1.show');
    const element = await browser.getElementByCss('section.hero div.video-container > .svelte-1dd8mg1.show');
    const tagName = await element.getTagName();
    expect(tagName).toBe('video');
});


test("Initially has a pause video button", async () => {
    const element = await browser.getElementByCss('section.hero .video-button');
    const tagName = await element.getTagName();
    expect(tagName).toBe('button');
});


test("Finding element after page redirect", async () => {
    const location = "IKEA United Kingdom";

    const storeSelect = await browser.getElementByCss('section.hero button.selected');
    const goShopping = await browser.getElementByCss('section.hero a.website-link');

    await goShopping.click();
    await browser.waitForElementByCss('.hnf-page-container.hnf-2nd-line', timeout / 2);

}, timeout);




    /*
    // const ukSite = "ikea.co.uk";

    await storeSelect.click();
    const searchInput = await browser.getElementByCss('section.hero div.region-picker input.search-input');
    
    await storeSelect.click();
    await searchInput.click();
    await searchInput.sendKeys(ukSite);

    const ukSelect = await browser.waitForElementByCss("section.hero ul.svelte-bdk5aj > li:nth-child(1) > button");

    await ukSelect.click();

    const element = await browser.getElementByCss('body > footer > h-include-lazy');
    div.hnf-page-container > div.hnf-page-container__inner > div.hnf-footer__container.hnf-page-container__main');
    element = await browser.waitForElementByCss('div:nth-child(3) > div');

    const text = await element.getText();

    expect(text.search(location)).toBe(true);

/*
/*
test("Initially has no location heading", async () => {
    await expect(() => browser.getElement("wr-location-name-id")).rejects.toThrow();
});

*/