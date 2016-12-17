/**
* 配置api 接口列表
**/

export default [
  {
    key: 'mutual', // 互助相关基本的数据统计信息
    url: '/api/mutual',
    method: 'get'
  },
  {
    key: 'bind', //绑定手机
    url: '/api/user/bind',
    method: 'save'
  },
  {
    key: 'commentList', // 获取评论列表
    url: '/api/comment/list',
    method: 'get'
  },
  {
    key: 'comment', // 添加评论
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
    url: '/api/user/logininfo',
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
    key: 'balance',  // 余额支付
    url: '/api/pay/balance',
    method: 'save'
  },
  {
    key: 'project', // 众筹产品列表
    url: '/api/project/list',
    method: 'get'
  },
  {
    key: 'createproject', // 发布
    url: '/api/project/create',
    method: 'save'
  },
  {
    key: 'categorys', // 众筹分类
    url: '/api/project/categorys',
    method: 'get'
  },
  {
    key: 'projectInfo', // 详细信息
    url: '/api/project/info',
    method: 'get'
  },
  {
    key: 'mutualMyList', // 我的互住列表
    url: '/api/mutual/mylist',
    method: 'get'
  },
  {
    key: 'mydescinfo', // 互住详情
    url: '/api/mutual/mydescinfo',
    method: 'get'
  },
  {
    key: 'address', // 新增修改地址
    url: '/api/address',
    method: 'save'
  },
  {
    key: 'addressLiss', // 地址list
    url: '/api/address/list',
    method: 'get'
  },
  {
    key: 'projectMyList', // 众筹订单列表
    url: '/api/project/mylist',
    method: 'get'
  },
  {
    key: 'myJoinInfo', // 众筹订单详情
    url: '/api/project/myjoininfo',
    method: 'get'
  },
  {
    key: 'mutualList', // 互助列表
    url: '/api/mutual/list',
    method: 'get'
  },
  {
    key: 'pushlist', // 我发布的众筹
    url: '/api/project/owner/pushlist',
    method: 'get'
  },
  {
    key: 'ownerJoin', // 我的支持者列表
    url: '/api/project/owner/joinlist',
    method: 'get'
  },
  {
    key: 'express', // 我的支持者列表
    url: '/api/common/express',
    method: 'get'
  },
  {
    key: 'joinsendexpress', // 我的支持者列表
    url: '/api/project/owner/joinsendexpress',
    method: 'save'
  },
  {
    key: 'joindesc', // 我的项目订单详情
    url: '/api/project/owner/joindesc',
    method: 'get'
  },
  {
    key: 'expressstatus', // 快递信息
    url: '/api/common/expressstatus',
    method: 'get'
  },
  {
    key: 'ownerauth', // 上传认证信息
    url: '/api/project/owner/auth',
    method: 'save'
  }
]
