const { Given, Then, When } = require('@cucumber/cucumber');

Given(/^I navigate to "([^"]*)"$/, async function (url) {
  await pageBase.mynavigateTo(url);
});

When(/^I validate the element with selector "([^"]*)" is present and visible$/, async function (selector) {
  await pageBase.validatePresentAndVisible(selector);
});

When(/^I validate the text "([^"]*)" is present in the element with selector "([^"]*)"$/, async function (text, selector) {
  await pageBase.myTextContains(selector, text);
});

When(/^I click on the element with selector "([^"]*)"$/, async function (selector) {
  await pageBase.clickElement(selector);
});

When(/^I validate the element with selector "([^"]*)" is visible$/, async function (selector) {
  await pageBase.validateVisible(selector);
});

When(/^I set the text "([^"]*)" in the element with selector "([^"]*)"$/, async function (text, selector) {
  await pageBase.setTextElement(selector, text);
});

Then(/^I should see the text "([^"]*)" in the element with selector "([^"]*)"$/, async function (text, selector) {
  await pageBase.myTextContains(selector, text);
});
