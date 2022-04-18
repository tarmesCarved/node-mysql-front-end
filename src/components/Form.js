import React from 'react';

function Form() {
    return (
        <div class="container">
            <h1>Create New Book</h1>
            <form action="http://localhost:3000/book" method="POST">
                <div class="form-group">
                    <label for="ISBN">ISBN</label>
                    <input class="form-control" name="isbn" />
                </div>
                <div class="form-group">
                    <label for="Title">Title</label>
                    <input class="form-control" name="title" />
                </div>
                <div class="form-group">
                    <label for="Author">Author</label>
                    <input class="form-control" name="author" />
                </div>
                <div class="form-group">
                    <label for="Published Date">Published Date</label>
                    <input class="form-control" name="published_date" />
                </div>
                <div class="form-group">
                    <label for="Publisher">Publisher</label>
                    <input class="form-control" name="publisher" />
                </div>
                <div class="form-group">
                    <label for="Number of Pages">Number of Pages</label>
                    <input class="form-control" name="numOfPages" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default Form;