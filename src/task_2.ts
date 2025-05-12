
type Book = {
    title: string;
    author: string;
    year: number;
  };
  
  const books: Book[] = [
    { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
    { title: "Atomic Habits", author: "James Clear", year: 2018 },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 },
  ];
  

  function getBookTitles(bookArray: Book[]): string[] {
    return bookArray.map((book) => book.title);
  }
  

  const bookTitles = getBookTitles(books);
  console.log(bookTitles);
  