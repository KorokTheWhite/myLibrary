import {
  _get,
  _post,
  _put,
  _delete
} from './shortHand'

const domain = 'http://localhost:8080/api/';

//TODO: {HANDLE FAILS}
export class HttpService {
  list(_url) {
    let requestDetails = {
      url: `${domain}${_url}`,
      dataType: 'json'
    }
    _get(requestDetails).done((response) => {
      return response;
    });
  }
  get(_url, name) {
    let requestDetails = {
      url: `${domain}${_url}`
    }
    _get(requestDetails).done((response, name) => {
      return searchOne(response);
    });
  }
  post(_url, _data) {
    let requestDetails = {
      url: `${domain}${_url}`,
      data: _data,
      dataType: 'json'
    }
    _put(requestDetails).done(() => {
      console.log('Successful post');
    })
  }
  put(_url, _data) {
    let requestDetails = {
      url: `${domain}${_url}`,
      data: _data,
      dataType: 'json'
    }
    _put(requestDetails).done(() => {
      console.log('Successul put')
    })
  }
  delete(_url, _data) {
    let requestDetails = {
      url: `${domain}${_url}`,
      data: _data,
      dataType: 'json'
    }
    _delete(requestDetails).done(() => {
      console.log('Successul delete')
    })
  }
  searchOne(response, name) {
    for (let i = 0; i < response.length; i++) {
      if (response[i].name === name) {
        return response.data[i];
      }
    }
  }
}
