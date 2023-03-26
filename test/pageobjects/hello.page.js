const Page = require('./page');

class HelloPage extends Page {
    get input () {
        return $('#input');
    }

    get button () {
        return $('#btn');
    }

    get value () {
        return $('#value');
    }

    async toggleTitle (text) {
        await this.input.setValue(text);
        await this.button.click();
    }

    open () {
        return super.open('hello');
    }
}

module.exports = new HelloPage();
