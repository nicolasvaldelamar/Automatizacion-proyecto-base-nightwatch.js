
const myTextContains = {
    async myTextContains(selector, text) {
        await browser.assert.textContains(selector,text);
    }
};

const validateAlert = {
    async validateAlert(text) {
        const txt_alert = await browser.alerts.getText();
        await browser.assert.equal(txt_alert,text);
        await browser.alerts.dismiss();
    }
};


const validatePresentAndVisible = {
    async validatePresentAndVisible(selector) {
        await this.api.page.pageBase().validatePresent(selector);
        await this.api.page.pageBase().validateVisible(selector);
    }
};
const validatePresent = {
    async validatePresent(selector) {
        await browser.verify.elementPresent(selector);
        await browser.element.find(selector).assert.present();
    }
};

const validateVisible = {
    async validateVisible(selector) {
        await browser.verify.visible(selector);
        await browser.element.find(selector).assert.visible();
    }
};

const clickElement = {
    async clickElement(selector) {
        await browser.element.find(selector).click();
    }
};

const setTextElement = {
    async setTextElement(selector, text) {
        await browser.element.find(selector).setValue(text);
    }
};
const scrollTo = {
    async scrollTo(selector) {
        return await browser
        .waitForElementVisible(selector, 5000) // Wait for the element to be visible
        .execute(function (selector) {
          // Use JavaScript to scroll the element to the center of the viewport
          let element = document.querySelector(selector);
          if (element) {
            let viewportHeight = window.innerHeight;
            let elementHeight = element.offsetHeight;
            let elementTop = element.getBoundingClientRect().top;
            // Calculate the scroll position to center the element
            let scrollTo = elementTop - (viewportHeight / 2 - elementHeight / 2);
            // Scroll the page to the calculated position
            window.scrollTo(0, scrollTo);
          }
        }, [selector]);
    }
};



const validateAndSetText = {
    async validateAndSetText(selector, text) {
        await this.api.page.pageBase().validateVisible(selector);
        await this.api.page.pageBase().setTextElement(selector,text); 
    }
};

const validateAndClick = {
    async validateAndClick(selector) {
        await this.api.page.pageBase().validateVisible(selector);
        await this.api.page.pageBase().clickElement(selector);
    }
};

const mynavigateTo = {
    async mynavigateTo(url) {
        await browser.window.maximize();
        return await browser.url(url);
    }
};

const assertTitle = {
    async assertTitle(title) {
        return this.assert.titleEquals(title);
    }
};

const pageBase = {

    commands: [
        mynavigateTo,
        validateAndSetText,
        validateAndClick,
        validateVisible,
        scrollTo,
        clickElement,
        setTextElement,
        validateAlert,
        assertTitle,
        validatePresent,
        myTextContains,
        validatePresentAndVisible,
    ],

    elements: {
        cookie: {
            selector: '.cookie-consent-bar-wrap'
        },

    }
};

module.exports = pageBase;