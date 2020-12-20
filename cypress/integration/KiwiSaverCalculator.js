describe('Tests for Westpac Kiwisaver retirement calculator', function () {
  it('shows the help text for a field when the user clicks on the information icon.', function () {
    cy.navigateToKiwiSaverCalculator()
    cy.validateInformationIconFor("CurrentAge", "This calculator has an age limit of 18 to 64 years old.")
  })

  /*
    As a Product Owner I want that the KiwiSaver Retirement Calculator users are able to calculate what their KiwiSaver
    projected balance would be at retirement
    So that the users are able to plan their investments better.
  */

  // *********************** Acceptance Criteria************************************************************************

  /*
     User whose Current age is 30 is Employed @ a Salary 82000 p/a, contributes to
     KiwiSaver @ 4% and chooses a Defensive risk profile can calculate his projected balances
     at retirement.
  */
  it('shows the projected kiwisaver balance at the time of retirement for an employed person with a defensive risk profile', function () {
    cy.navigateToKiwiSaverCalculator()
    cy.input_into_kiwisaver_calc_field("CurrentAge", "30")
    cy.select_employment_status("employed")
    cy.input_into_kiwisaver_calc_field("AnnualIncome", "82000")
    cy.select_kiwisaver_member_contribution("4")
    cy.select_kiwisaver_risk_profile("low")
    cy.kiwisaver_submit_button()
    cy.kiwiSaverCalculatorIframe().find('#graph').should('exist')
  })
  // ********************** Acceptance Criteria 2 *************************************************************************

  /*
      User whose current aged 45 is Self-employed, current KiwiSaver balance is $100000,
      voluntary contributes $90 fortnightly and chooses Conservative risk profile with saving
      goals requirement of $290000 can calculate his projected balances at retirement.
  */
  it('shows the projected kiwisaver balance at the time of retirement for a self employed person with a conservative risk profile', function () {
    cy.navigateToKiwiSaverCalculator()
    cy.input_into_kiwisaver_calc_field("CurrentAge", "45")
    cy.select_employment_status("self-employed")
    cy.input_into_kiwisaver_calc_field("KiwiSaverBalance", "100000")
    cy.input_into_kiwisaver_calc_field("VoluntaryContributions", "90")
    cy.select_kiwisaver_voluntary_contribution("fortnight")
    cy.select_kiwisaver_risk_profile("medium")
    cy.input_into_kiwisaver_calc_field("SavingsGoal", "290000")
    cy.kiwisaver_submit_button()
    cy.kiwiSaverCalculatorIframe().find('#graph').should('exist')

  })

  // ********************** Acceptance Criteria 3 *************************************************************************
  
  /*
  User whose current aged 55 is not employed, current KiwiSaver balance is $140000,
  voluntary contributes $10 annually and chooses Balanced risk profile with saving goals
  requirement of $200000 is able to calculate his projected balances at retirement.
  */

  it('shows the projected kiwisaver balance at the time of retirement for an unemployed person with a balanced risk profile', function () {
    cy.navigateToKiwiSaverCalculator()
    cy.input_into_kiwisaver_calc_field("CurrentAge", "55")
    cy.select_employment_status("not-employed")
    cy.input_into_kiwisaver_calc_field("KiwiSaverBalance", "140000")
    cy.input_into_kiwisaver_calc_field("VoluntaryContributions", "10")
    cy.select_kiwisaver_voluntary_contribution("week")
    cy.select_kiwisaver_risk_profile("high")
    cy.input_into_kiwisaver_calc_field("SavingsGoal", "200000")
    cy.kiwisaver_submit_button()
    cy.kiwiSaverCalculatorIframe().find('#graph').should('exist')
  })

})

