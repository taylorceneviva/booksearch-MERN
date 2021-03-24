import React from "react";

function BookCard(props) {
  return (
    <div
      className="card container-fluid"
    >
      <img alt={book.title} class="card-img-top" src={book.image} />
      <div class="card-body">
          
        <h5 className="card-title">
          {" "}
          {book.title}
        </h5>
        <p
          className="card-text">
          {" "}
          {book.description}
        </p>
        <div className="col-12">
          <a
            className="link row"
            href={book.link}
            target="_blank"
            rel="noreferrer"
          >
          </a>

        </div>
      </div>
    </div>
  );
}

export default BookCard;