import {
  $,
  jQuery
} from 'jquery';

export const _get = $.get;
export const _post = $.post;
export const _put = (_url, _data, _dataType) => {
  return $.ajax({
    url: _url,
    type: 'PUT',
    data: _data,
    dataType: _dataType
  });
}
export const _delete = (_url, _data, _dataType) => {
  return $.ajax({
    url: _url,
    type: 'DELETE',
    data: _data,
    dataType: _dataType
  });
}
