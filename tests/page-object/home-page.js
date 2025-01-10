const { expect } = require("@playwright/test")

export class HomePage {

    constructor(page){
        this.page = page
        this.homeTitle = page.locator('h1')

        this.abTestingLink = page.locator('a[href="/abtest"]')
        this.addRemoveLink =  page.locator('a[href="/add_remove_elements"]')
        this.basicAuthLink = page.locator('a[href="/bacsic_auth"]')
        this.brokenImagesLink = page.locator('a[href="/broken_images"]')
        this.challenginDOMLink = page.locator('a[href="/challenging_dom"]')        
        this.checkboxesLink = page.locator('a[href="/checkboxes"]')
        this.contextMenuLink = page.locator('a[href="/context_menu"]')
        this.digestAuthLink = page.locator('a[href="/digest_auth"]')
        this.disappearingElementsLink = page.locator('a[href="/disappearing_elements"]')
        this.dragDropLink = page.locator('a[href="/drag_and_drop"]')
        this.dropdownLink = page.locator('a[href="/dropdown"]')
        this.dynamycContentLink = page.locator('a[href="/dynamic_content"]')
        this.dynamicControlsLink = page.locator('a[href="/dynamic_controls"]')
        this.dynamicLoadingLink = page.locator('a[href="/dynamic_loading"]')
        this.entryAdLink = page.locator('a[href="/entry_ad"]')
        this.exitIntentLink = page.locator('a[href="/exit_intent"]')
        this.fileDownloadLink = page.locator('a[href="/download"]')
        this.fileUploadLink = page.locator('a[href="/upload"]')
        this.floatingMenuLink = page.locator('a[href="/floating_menu"]')        
        this.forgotPasswordLink = page.locator('a[href="/forgot_password"]')
        this.formAuthLink = page.locator('a[href="/login"]')
        this.framesLink = page.locator('a[href="/frames"]')
        this.geolocationLink = page.locator('a[href="/geolocation"]')
        this.horizontalSliderLink = page.locator('a[href="/horizontal_slider"]')
        this.hoversLink = page.locator('a[href="/hovers"]')
        this.infiniteScrollLink = page.locator('a[href="/infinite_scroll"]')
        this.inputsLink = page.locator('a[href="/inputs"]')
        this.jqueryuiLink = page.locator('a[href="/jqueryui"]')
        this.jsAlertsLink = page.locator('a[href="/javascript_alerts"]')
        this.jsErrorLink = page.locator('a[href="/javascript_error"]')
        this.keyPressesLink = page.locator('a[href="/key_presses"]')
        this.largeDOMLink = page.locator('a[href="/large"]')
        this.multipleWinLink = page.locator('a[href="/windows"]')
        this.nestedFramesLink = page.locator('a[href="/nested_frames"]')
        this.notifMessagesLink = page.locator('a[href="/notifications_message"]')
        this.redirectLink = page.locator('a[href="/redirect"]')
        this.secureDownloadLink = page.locator('a[href="/download_secure"]')
        this.shadowDOMLink = page.locator('a[href="/shadowdom"]')
        this.shiftingContentLink = page.locator('a[href="/shifting_content"]')
        this.slowResourcesLink = page.locator('a[href="/slow"]')
        this.sortableLink = page.locator('a[href="/tables"]')        
        this.statusCodeLink = page.locator('a[href="/status_code"]')
        this.typosLink = page.locator('a[href="/typos"]')
        this.wysiwygLink = page.locator('a[href="/tinymce"]')

    }

    async navigate(){
        await this.page.goto('https://the-internet.herokuapp.com/');
    }

    async getTitleText(){
        await expect(this.homeTitle).toBeVisible()
        return await this.homeTitle.textContent()
    }

    async clickABTesting(){
        await this.abTestingLink.click()
    }


}