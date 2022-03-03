import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom'

// CSS

import {data} from './books'
import SpecificBook from './Book'
import {greeting} from './testing/testing'

class BookList extends React.Component {
  render() {
    console.log(greeting);
    return (
      <section className='booklist'>
        {data.map((book, index) => {
          return <SpecificBook key={book.id} {...book}></SpecificBook>;
        })}
      </section>

    );
  }
}

ReactDom.render(<BookList/>, document.getElementById('root'));

// function BookList() {
//   console.log(greeting);
//   return (
//     <section className='booklist'>
//       {data.map((book, index) => {
//         return <SpecificBook key={book.id} {...book}></SpecificBook>;
//       })}
//     </section>
//   );
// }

// ReactDom.render( <BookList/>, document.getElementById('root'));
