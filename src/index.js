import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';


function BookList() {

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const objArr = [
//   {name:'shankar',age:24,company:'jnd'},
//   {name:'shankar',age:24},
//   {name:'shankar',age:24},
//   {name:'shankar',age:24},
//   {name:'shankar',age:24},
//   {name:'shankar',age:24},
//   {name:'shankar',age:24},
//   {name:'shankar',age:24},
//   {name:'shankar',age:24},
//   {name:'shankar',age:24},
//   {name:'shankar',age:24},
// ]





// const arrmap = arr.map((num)=>{
//   return 'dhdskjskj'
// })

// console.log(arrmap)

// const arrFilter = arr.filter((num)=> num === 3)

// console.log(arrFilter)







  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book detail={book} key={book.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
