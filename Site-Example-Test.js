//This is a sample for getting element location 

module.exports = {
    "Get Element Location": function(browser) {
        browser.maximizeWindow()
        .url("https://www.amazon.co.uk/")
        .useXpath()
        .click('/html/body/div[1]/header/div/div[1]/div[1]/div[2]/span/a')
        .pause(3000)
        .setValue('/html/body/div[3]/div/div/div/div/div[2]/div[3]/div[2]/div/div[1]/input', 'SW1A 0AA')
        .pause(3000)
        .click('/html/body/div[3]/div/div/div/div/div[2]/div[3]/div[2]/div/div[2]/span')
        .pause(5000)

        .useCss()
        .pause(1500)
        .click('#sp-cc-rejectall-link')
        .pause(1500)
        .setValue('#twotabsearchtextbox', 'watch')
        .pause(1500)
        .click('#nav-search-submit-button')//searcg
        .pause(2500)
        .useXpath()
        .click('/html/body/div[1]/div[1]/div[1]/div[2]/div/div[3]/span/div/span/div/div[2]/div[6]/ul/span/span[1]/li/span/a/div/label/i')//filtre
        .pause(1500)
        .click('/html/body/div[1]/div[1]/span/div/h1/div/div[4]/div/div/form/span/span/span')//sortby
        .pause(1500)
        .click('/html/body/div[4]/div/div/ul/li[2]/a')
        .pause(1500)
        .click('/html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[2]/div/div/span/div/div/div[1]')
        .pause(1500)
        .click('/html/body/div[2]/div/div/div[1]/div[2]/div[2]/div[2]/div/div/div[2]/div[5]/div/div[1]/div/div[1]/div/div/div[1]/div/div[2]/div/form/div/div/div[15]/div[1]/span/span/span/input')//add to basket
        .pause(1500)
        .click('/html/body/div[1]/div[1]/div/div[1]/div[2]/div/div[1]/span/span/a')//basket
        .pause(1500)
        .click('/html/body/div[1]/div[1]/div[3]/div[5]/div/div[2]/div[1]/div/form/div[2]/div[3]/div[4]/div/div[2]/div[1]/span[2]/span/input')//basket
        .pause(1500)
        .click('/html/body/div[1]/header/div/div[1]/div[1]/div[1]/a')//basket
        .pause()      
        
    } 
};