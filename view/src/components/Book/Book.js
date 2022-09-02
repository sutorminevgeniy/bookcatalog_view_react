
import style from './Book.module.css'

import imgBookDefault from './book.svg';

import ReviewsList from '../ReviewsList/ReviewsList';

import { useParams } from 'react-router-dom';

const BooksList = (props) => {
  // Получение :id параметра из URL.
  let { id } = useParams();

  return (
    <div className="books">
      <h1>Книга {id}</h1>
      <div>Автор {id}</div>
      <img src={imgBookDefault} alt=""/>
      <div className={style.bookList}>
        Описание книги {id}
      </div>
      <div>
        <ReviewsList
          state={props.state.reviews}
          dispatch={props.dispatch}  />
      </div>
    </div>
  );
};

export default BooksList;