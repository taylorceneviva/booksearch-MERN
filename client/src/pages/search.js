// User can search for books via the Google Books API and render them here.
// User has the option to "View" a book, bringing them to the book on Google Books, or "Save"
// a book, saving it to the Mongo database.

import React, { Component } from "react";
import API from "../utils/API";
// import BookCard from "../components/BookCard";

class Search extends Component {
  state = {
    books: [],
    title: "Harry Potter",
  };

  componentDidMount() {
    API.getBooks(this.state.title).then((results) => {
      console.log(results);
      this.setState({ books: results.data.items });
    });
  }
  render() {
    return (
      <div>
        <h1>Check the console</h1>
        {/* <BookCard book={this.state.books} /> */}
      </div>
    );
  }
}

export default Search;
