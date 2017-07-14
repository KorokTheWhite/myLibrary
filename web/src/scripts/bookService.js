import {
  HttpService
} from './httpService';

const url = 'livros/'

export class BookService {
  getAllBooks() {
    return getAll(url);
  }
  getOneBookByName(name) {
    return getOneByName(url, name);
  }
}
