/**
* 配置api 接口列表
**/

export default [
  {
    key: 'mutual', //
    url: '/api/mutual',
    method: 'get'
  },
  {
    key: 'bind', //
    url: '/api/user/bind',
    method: 'save'
  },
  {
    key: 'commentList',
    url: '/api/comment/list',
    method: 'get'
  },
  {
    key: 'comment',
    url: '/api/comment',
    method: 'save'
  },
  {
    key: 'sendcode', // 获取验证码
    url: '/api/common/sendcode',
    method: 'save'
  },
  {
    key: 'contact', // 添加保障人
    url: '/api/contact',
    method: 'save'
  },
  {
    key: 'contactList', // 获取保障人列表
    url: '/api/contact/list',
    method: 'get'
  }
]
