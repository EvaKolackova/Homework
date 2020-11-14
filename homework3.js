describe('Secret number', () => {
  before(() => { //muzes zmenit na beforeEach, pokud je potreba
    browser.url('https://automation.cervik.repl.co/inputs.html')
    let hodnota, secretNumber, formular, overeni
   })

  it('confirmation appears after validating correct secret number', () => {
    // DOPLN
    secretNumber = browser.$('[name="secret"]')
    hodnota = (secretNumber.getValue())
    formular =  browser.$('input#secretNumberInput').addValue(hodnota)
    browser.$("button#checkSecretNumber").click()
    overeni = browser.$('small#passwordHelpBlock')
    expect(overeni).toHaveText("Super secret je super správně.")
  })

  it('error appears after validating wrong secret number', () => {
    formular =  browser.$('input#secretNumberInput').addValue("blabla")
    browser.$("button#checkSecretNumber").click()
    overeni = browser.$('small#passwordHelpBlock')
    expect(overeni).toHaveText("Super secret je super špatně.")
  })


  it('error appears after validating empty secret number', () => {
    browser.$("button#checkSecretNumber").click()
    overeni = browser.$('small#passwordHelpBlock')
    expect(overeni).toHaveText("Super secret je super špatně.")
  })
})
                
