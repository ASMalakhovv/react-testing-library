const HelloPage = require('../pageobjects/hello.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitle('hello')
        await expect(HelloPage.value).toBeExisting();
    })
})


