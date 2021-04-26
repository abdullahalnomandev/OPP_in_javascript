
class Tiger {
    #speed = 100;
    location = 'Sondarban';
    constructor(name) {
        this.name = name;
        this.#speed = 1200;
    }
    run() {
        console.log(`I am ${this.name}. I am running at ${this.#speed} mph . I live in ${this.location}`);
    }
}

const royal = new Tiger('Royal Bangal Tiger');
royal.name = 'Pormanobik Bengal';
royal.location = 'Borishal'
royal.run();
