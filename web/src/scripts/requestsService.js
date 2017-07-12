'use strict';

const authorsUrl = "http://localhost:8080/api/autores";
const booksUrl = "http://localhost:8080/api/livros";

const getAuthorsService = {
    getAll: () => {
        let requestDetails = {
            url: `${authorsUrl}/`
        }
        return $.get(requestDetails);
    },
    getOneByName: (name) => {
        //magic
    }
}
const getBooksService = {
    getAll: () => {
        let requestDetails = {
            url: `${booksUrl}/`
        }
        return $.get(requestDetails);
    },
    getOneByName: (name) => {
        //magic
    }
}
