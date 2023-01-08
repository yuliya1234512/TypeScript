import { ShelfItem } from '../interfaces';

export default class Shelf<T extends ShelfItem> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string) {
        return this.items.find((item: T) => item.title === title);
    }
    printTitles(): void {
        this.items.forEach (item => console.log(item));
    }

}
