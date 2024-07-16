class CalculatePage{
    get currentAgeTextBox(){
        return $('#current-age')
    }
    get retiredAgeTextBox()
    {
      return $('#retirement-age')
    }
    get currentIncomeTextBox()
    {
        return $('#current-income')
    }

    get spouseIncomeTextBox()
    {
        return $('#spouse-income')
    }
    get currentTotalSavingsTextBox()
    {
        return $('#current-total-savings')
    }

    get currentAnnualSavingsTextBox()
    {
        return $('#current-annual-savings')
    }

    get savingsIcreaseRateTextBox()
    {
        return $('#savings-increase-rate')
    }
    get socialSecurityButton()
    {
        return $('#no-social-benefits')
    }
    get calculateButton()
    {
        return $('button[type="button"]')
    }

    async enterCurrentAge(currentage)
    {
        await this.currentAgeTextBox.setValue(currentage);
    }

    async enterRetiredAge(retireage)
    {
        await this.retiredAgeTextBox.setValue(retireage)
    }
    async enterCurrentIncome(currentincome)
    {
        await this.currentIncomeTextBox.setValue(currentincome)
    }
    async enterSpouseIncome(spouseincome)
    {
        await this.spouseIncomeTextBox.setValue(spouseincome)
    }
    async enterTotalSavings(totalsavings)
    {
        await this.currentTotalSavingsTextBox.setValue(totalsavings)
    }
    async enterAnnualSavings(annualsavings)
    {
        await this.currentAnnualSavingsTextBox.setValue(annualsavings)
    }
    async enterSavingsRate(rate)
    {
        await this.savingsIcreaseRateTextBox.setValue(rate)
    }

    async clickSocialSecurityOption()
    {
        
        await this.socialSecurityButton.click()
        
    }

    async clickCalculate()
    {
        await this.calculateButton.click()
    }

}
module.exports= new CalculatePage()