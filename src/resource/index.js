/**
* resource init
**/
import Vue from 'vue'
import VueResource from 'vue-resource'
import resourceList from './api'

// vue 引入 vue-resource
Vue.use(VueResource);

// vue 全局配置
Vue.http.options.root = '/root';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.xhr = {withCredentials: true};

// Interceptors 请求体处理
Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {};
  request.params.t = new Date().getTime();
  next((response) => {
    let data = JSON.parse(response.body);
    if (data.Code != 0) {
      alert(data.Message);
      // if (data.Code == 1) {
      //   window.location = 'http://crowd.iblue.cc/wx/auth';
      // }
      return false;
    }
  })
})

let resource = {};
resourceList.forEach((item) => {
  let api = Vue.resource(item.url);
  switch (item.method) {
    case 'get':
      resource[item.key] = (params) => {
        return api.get(params);
      }
      break;
    case 'save':
      resource[item.key] = (params) => {
        return api.save(params);
      }
      break;
    case 'query':
      resource[item.key] = (params) => {
        return api.query(params);
      }
      break;
    case 'update':
      resource[item.key] = (params) => {
        return api.update(params);
      }
      break;
  }
})

export default resource
