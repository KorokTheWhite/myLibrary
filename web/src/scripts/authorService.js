import {
  HttpService
} from './httpService'

const url = 'autores/';

export class AuthorService {
  listAuthors() {
    return getAll(url);
  }
  getAuthor(name) {
    return getOneByName(url, name);
  }

}
