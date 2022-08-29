import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import BooksList from './components/BooksList';
import Book from './components/Book';
import AuthorsList from './components/AuthorsList';
import Filter from './components/Filter';


function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Header />
        </header>

        <main>
          <aside>
            <Filter />
          </aside>

          <div className='content'>
            <Routes>
              <Route path='/book/:id' element={<Book 
                state={props.state.bookPage}
                addReview={props.addReview} />} />                
              <Route path='/books' element={<BooksList 
                state={props.state.booksListPage} />} />
              <Route path='/authors' element={<AuthorsList 
                state={props.state.authorsListPage} />} />
              <Route path="*" element={<p>Такой страницы нет!</p>}
              />
            </Routes>
          </div>        
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
