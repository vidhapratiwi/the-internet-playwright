const { test:base } = require("@playwright/test")
const { HomePage } = require("../page-object/home-page")
const { ABTestPage } = require("../page-object/ab-test-page")

export const test = base.extend({

    homePage : async({page}, use) => {
        const homePage = new HomePage(page)

        await homePage.navigate()
        await use(homePage)
    },

    abTestPage : async({page}, use) => {
        await use(new ABTestPage(page))
    },



})