import { timeout } from '../decorators';

/* eslint-disable no-underscore-dangle */
abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    //  }

    #id: number;
    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = ' Desearch dep';

    constructor(id: number, public title: string, protected year: number) {
        this.#id = id;
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }
}

export { ReferenceItem };
