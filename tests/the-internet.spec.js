const { expect } = require("@playwright/test");
const { test } = require("./base/base-test");

test('TC 01 - Home Page', async ({ homePage }) => {
    const headingText = await homePage.getTitleText()
    expect(headingText).toBe('Welcome to the-internet')
});

test('TC 02 - AB Test', async ({ homePage, abTestPage }) => {
    await homePage.clickABTesting()
    
    const headingText = await abTestPage.getHeaderText()
    expect(headingText).toBe('A/B Test Variation 1')

    // const paragraphText = await abTestPage.getParagraphText()
    // expect(paragraphText).toBe('Also known as split testing.')

    const newPage = await abTestPage.clickElemenetalSeleniumLink()
    await abTestPage.validateElementalSeleniumLink(newPage)

});
