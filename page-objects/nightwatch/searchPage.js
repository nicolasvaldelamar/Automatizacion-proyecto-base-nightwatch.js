/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Usage:
 *   browser.page.google.search()
 * 
 * See the example test using this object:
 *   specs/with-page-objects/google.js
 *
 * For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

const searchCommands = {
    submit() {
        //this.waitForElementVisible('@submitButton', 1000).click('@submitButton');
        this.pause(1000);

        return this; // for command-chaining
    }
};

const step1 = {
    async step1() {
        const cookieDialogVisible = await this.isVisible({
            selector: '@cookie',
            suppressNotFoundErrors: true
        });

        if (cookieDialogVisible) {
            return this.click('@cookie_consent');
        }
    }
};

const step2 = {
    async step2(searchTerm) {
        // FIXME: chaining the click command to the rest of the commands causes an uncaughtRejection in case of an element locate error
        await this.pause(1000).click('@search');

        return this.waitForElementVisible('@rijksmuseum')
            .setValue('@input_search', [searchTerm, browser.Keys.ENTER])
            .pause(1000);
    }
};


const step3 = {
    async step3(contains) {
        return this.assert.textContains('@search_results', contains);
    }
};

const searchPage = {

    commands: [
        searchCommands,
        step1,
        step2,
        step3
    ],

    elements: {
        cookie: {
            selector: '.cookie-consent-bar-wrap'
        },
        cookie_consent: {
            selector: '.cookie-consent-bar-wrap button.link'
        },

        search: {
            selector: 'a[aria-label="Search"]'
        },
        rijksmuseum: {
            selector: '#rijksmuseum-app'
        },
        input_search: {
            selector: 'input.search-bar-input[type=text]'
        },
        search_results: {
            selector: '.search-results'
        },

    }
};

module.exports = searchPage;