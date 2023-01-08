import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Book, Librarian, Logger, Magazine } from './interfaces';
import { purge, getAllBooks, printRefBook, getObjectProperty, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions';
import { Library } from './classes/library';
import { Category } from './enums';
import { BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';

showHello('greeting', 'TypeScript');


function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// logFirstAvailable(getAllBooks());
// console.log(logBookTitles(getBookTitlesByCategory()));
// console.log(getBookAuthorByIndex(3));
// calcTotalPages();
// logFirstAvailable();


// console.log(getTitles(1,true));


// console.log(bookTitleTransform('Learn TypeScript'))
// /console.log(bookTitleTransform(123))


// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//    }


// printBook(myBook);
// myBook.markDamaged('missing back cover');


//    const  logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
//    logDamage('missing back cover');


//    const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     numBooksPublished: 5
//    }


//   const avoriteLibrarian: Librarian = {
//     name: 'Yulia',
//     email: 'yuliya@d-lan.dp.ua',
//     department: 'Classical literature',
//     assistCustomer: null
//   }

//   const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };


// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.())
// console.log(offer.book.authors?.[0])


// console.log(getProperty(myBook, 'title'))
// console.log(getProperty(myBook, 'markDamaged'))
// console.log(getProperty(myBook, "isbn"))


//  const PersonBook: PersonBook = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//  }


// 5.01
// const ref = new ReferenceItem(5,'CSS',2022)
// console.log(ref);
// ref.printItem();
// ref.publisher= 'abc-groop';
// console.log(ref.publisher);
// console.log(ref.getID());
// 5.02
// const refBook: RefBook = new RefBook(3, 'Java-Script', 2000, 4);
// refBook.printItem();
// refBook.printCitation();
// 5.04

// let favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Yulia'
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript')

// 5.05
// console.log(PersonBook);

// 06.03
// printRefBook(refBook);
// printRefBook(favoriteLibrarian);

// 06.05

const flag = true;

// if(flag) {
//     import('./classes')
//     .then(o=> {
//         const reader = new o.Reader();
//         reader.name = 'Anna'
//         reader.take(getAllBooks()[0]);
//         console.log(reader);
//     })
//     .catch(err=>console.log(err))
//     .finally(()=> console.log('!Complete!'))
// }


// if(flag) {
//    const o = await import('./classes')
//         const reader = new o.Reader();
//         reader.name = 'Anna'
//         reader.take(getAllBooks()[0]);
//         console.log(reader);
// }

// 06.06
// let library:Library = new Library();


// 07.01

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];


// const result1 = purge(inventory);
// console.log(result1);
// const result2 = purge([1, 2, 3, 4]);
// console.log(result2);

// 07.03
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book=> bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(magazine=> magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// 07.04

// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     id: 1,
//     title: 'Learn  Angular',
//     available: false,
//     category: Category.Angular,
//     pages: 200,
//     markDamaged: null,
// };

// const updatedBook: UpdatedBook = {};
// const param: Parameters<СreateCustomerFunctionType> = ['Anna', 30, 'Kyiv'];
// createCustomer(...param);

// 08/01, 08/02
// let favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian['printLibrarian']();
// 08/03


// let favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// 08.04

// const refBook: RefBook = new RefBook(3, 'Java-Script', 2000, 4);
// refBook.printItem();

// 08/05
// let favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'JavaScript');

// 08.06
// let favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Boris', 'JavaScript');
// 08/07

// const refBook: RefBook = new RefBook(3, 'Java-Script', 2000, 4);
// refBook.copies = 10;
// console.log(refBook.copies);

// 09/01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// 09/02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
// .then(titles => {
//     console.log(titles);
//     return Promise.resolve(titles.length)
// })
// .then(n => console.log(n))
// .catch(reason => console.log(reason))
// getBooksByCategoryPromise(Category.Software)
// .then(titles => console.log(titles))
// .catch(reason => console.log(reason))
// console.log('End');

// 09/03
// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software).catch(err => console.log(err));
// console.log('End');