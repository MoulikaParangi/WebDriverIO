const CalculatePage= require('../pageobjects/calculator.page')
describe('Securain Application', function(){
    it('Calculate ', async () =>{
       browser.url('https://www.securian.com/insights-tools/retirement-calculator.html')
       browser.maximizeWindow
       browser.pause(3000)
       CalculatePage.enterCurrentAge(30)
       CalculatePage.enterRetiredAge(60)
       CalculatePage.enterCurrentIncome(100000)
       CalculatePage.enterSpouseIncome(75000)
       CalculatePage.enterTotalSavings(500000)
       CalculatePage.enterAnnualSavings(10)
       CalculatePage.enterSavingsRate(.25)
       CalculatePage.clickSocialSecurityOption()
       CalculatePage.clickCalculate()
       
    })
})