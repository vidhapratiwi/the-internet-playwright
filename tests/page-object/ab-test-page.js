const { expect } = require("@playwright/test")

export class ABTestPage {
 
    constructor(page) {
        this.page = page
        this.header = page.locator('h3')
        this.paragraph = page.getByText('Also known as split testing.')
        this.elementalSeleniumLink = page.locator('a[href="http://elementalselenium.com/"]')
    }

    async getHeaderText(){
        return await this.header.textContent()
    }

    async getParagraphText(){
        return await this.paragraph.textContent()
    }

    async clickElemenetalSeleniumLink(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.elementalSeleniumLink.click()
        ])
        return newPage;
    }

    async validateElementalSeleniumLink(newPage){
        await expect(newPage).toHaveTitle(/Home | Elemental Selenium/)
        await newPage.close()
    }



}