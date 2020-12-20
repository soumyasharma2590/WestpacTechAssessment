// *************************** Navigation to kiwisaver Calculator ***********************************************************

Cypress.Commands.add('navigateToKiwiSaverCalculator', () => {
  let kiwisaver_button = '#ubermenu-section-link-kiwisaver-ps'
  let kiwisaver_calculator_button = '#ubermenu-item-cta-kiwisaver-calculators-ps'
  let kiwisaver_retirement_calculator_link = '#responsive-children-title-3956-ps'
  let kiwisaver_calculator_headingtext = '.content-inner-header'

  cy.visit('https://www.westpac.co.nz')
  cy.get(kiwisaver_button).should('have.text', 'KiwiSaver').click()
  cy.get(kiwisaver_calculator_button).click({ force: true })
  cy.get(kiwisaver_retirement_calculator_link).click()
  // Validation: Check the page header
  cy.get(kiwisaver_calculator_headingtext).should('contain', 'KiwiSaver Retirement Calculator')
})

// **************************** Iframe ***************************************************************************************
Cypress.Commands.add('kiwiSaverCalculatorIframe', () => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
    .get('#calculator-embed iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
})

// **************Validate Information Icon ********************************************************************************

Cypress.Commands.add('validateInformationIconFor', (kiwisaver_calc_field_id, expected_message) => {
  let field_info_icon = "div[help-id = '" + kiwisaver_calc_field_id + "'] button"
  let field_help_text = "div[help-id='" + kiwisaver_calc_field_id + "'] .message-row p"
  cy.kiwiSaverCalculatorIframe().find(field_info_icon).should('exist').click()
  cy.kiwiSaverCalculatorIframe().find(field_help_text).should('have.text', expected_message)
})

// ********************** Input fields in the retirement calculator *****************************************************

Cypress.Commands.add('input_into_kiwisaver_calc_field', (kiwisaver_calc_field_id, field_value) => {

  // ************************** Form fields Input **************************************************************
  let kiwisaver_field_locator = "div[help-id ='" + kiwisaver_calc_field_id + "'] input"
  cy.kiwiSaverCalculatorIframe().find(kiwisaver_field_locator).type(field_value)
})

Cypress.Commands.add('select_employment_status', (employment_status) => {
  let employee_status_dropdown_field = 'div[help-id="EmploymentStatus"] div .control'
  // ************************** employee status dropdown Field values ********************************************************
  let employee_status_dropdown_list = 'div[help-id="EmploymentStatus"] div ul'
  let employee_status_dropdown_value = "li[value='" + employment_status + "']"

  cy.kiwiSaverCalculatorIframe().find(employee_status_dropdown_field).click()
  cy.kiwiSaverCalculatorIframe().find(employee_status_dropdown_list)
  cy.kiwiSaverCalculatorIframe().find(employee_status_dropdown_value).click()
})

Cypress.Commands.add('select_kiwisaver_member_contribution', (member_contribution) => {
  // ************************** kiwisaver member contribution options ********************************************************
  let kiwisaver_member_contribution_locator = "div[value ='" + member_contribution + "']"
  cy.kiwiSaverCalculatorIframe().find(kiwisaver_member_contribution_locator).click()
})

Cypress.Commands.add('select_kiwisaver_risk_profile', (risk_profile) => {
  // ************************** Risk profile radio values **************************************************************
  let kiwisaver_risk_profile_locator = "div[value='"+risk_profile+"']"
  cy.kiwiSaverCalculatorIframe().find(kiwisaver_risk_profile_locator).click()
})

Cypress.Commands.add('kiwisaver_submit_button', () => {
  let kiwisaver_submit_form_button = 'span[class="label"]'
  cy.kiwiSaverCalculatorIframe().find(kiwisaver_submit_form_button).contains('View your KiwiSaver retirement projections').click()
})

Cypress.Commands.add('select_kiwisaver_voluntary_contribution', (voluntary_contribution_frequency) => {
  let kiwisaver_contribution_dropdown_value = "li[value='"+voluntary_contribution_frequency+"']"
  cy.kiwiSaverCalculatorIframe().find("span").contains('Frequency').click()
  cy.kiwiSaverCalculatorIframe().find(kiwisaver_contribution_dropdown_value).click()
})