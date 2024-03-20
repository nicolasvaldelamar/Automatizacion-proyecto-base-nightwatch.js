const { Before, After, AfterStep, BeforeAll, AfterAll } = require('@cucumber/cucumber');


Before(async (scenario) => {
    console.log("Before");
    });

AfterStep(async function({pickle, pickleStep, gherkinDocument, result, testCaseStartedId, testStepId}) {
    console.log(`${result.status}: ${pickleStep.text}`);
    const file_path = `screenshots/${result.status} Step ${pickleStep.text}.png`;
    // Attach the screenshot path to the test result+
    let buffer = await browser.screenshot({ path: file_path })
    await this.attach(buffer, { mediaType: 'base64:image/png', fileName: `${result.status} Step ${pickleStep.text}.png`})
    
});

After(async function (scenario) {
    console.log("STATUS: ", scenario.result.status);
    //if (scenario.result.status === 'FAILED') {
    //const file_path = `screenshots/${scenario.result.status} Scenario ${scenario.pickle.name}.png`;
    // Attach the screenshot path to the test result+
    //var buffer = await browser.screenshot({ path: file_path })
    //this.attach(buffer, { mediaType: 'base64:image/png' })
    //browser.saveScreenshot(file_path);
    //}
   // if (scenario.result.status === 'FAILED') { 
        
   // }
    
});
AfterAll(function () {
    console.log("TESTS: FINALIZADOS");
});