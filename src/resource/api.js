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
  },
  {
    key: 'loinginfo', // 登录用户基础信
    url: '/api/user/loinginfo',
    method: 'get'
  },
  {
    key: 'moneylog', // 获取资金流水
    url: '/api/user/moneylog',
    method: 'get'
  },
  {
    key: 'join', // 获取资金流水
    url: '/api/mutual/join',
    method: 'save'
  },
  {
    key: 'upload', // 获取资金流水
    url: '/api/common/upload',
    method: 'save'
  },
  {
    key: 'balance',
    url: '/api/wxpay/balance',
    method: 'save'
  }
]
