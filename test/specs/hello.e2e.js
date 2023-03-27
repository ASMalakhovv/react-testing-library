const HelloPage = require('../pageobjects/hello.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitle('hello')
        await expect(HelloPage.value).toBeExisting();
    })

    it('should login with not valid credentials', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitle('dont hello')
        await expect(HelloPage.value).not.toBeExisting();
    })
})


