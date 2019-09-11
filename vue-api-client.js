/* eslint-disable */
import axios from './api'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    API文档主要包含英蕾教育APP的RESTFUL API请求
 ==========================================================*/
/**
 * 查询我的孩子
 * request: childSelectUsingGET_1
 * url: childSelectUsingGET_1URL
 * method: childSelectUsingGET_1_TYPE
 * raw_url: childSelectUsingGET_1_RAW_URL
 * @param token - 用户登录凭证
 * @param name - 学生姓名
 * @param fkClassId - 班级id
 */
export const childSelectUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/child'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const childSelectUsingGET_1_RAW_URL = function() {
  return '/manager/v1/child'
}
export const childSelectUsingGET_1_TYPE = function() {
  return 'get'
}
export const childSelectUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/child'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加孩子
 * request: childInsertUsingPOST_1
 * url: childInsertUsingPOST_1URL
 * method: childInsertUsingPOST_1_TYPE
 * raw_url: childInsertUsingPOST_1_RAW_URL
 * @param token - 用户登录凭证
 * @param name - 孩子姓名
 * @param sex - 性别
 * @param birthday - 生日(2000-01-01)
 * @param photo - 照片
 * @param fkClassId - 班级id
 */
export const childInsertUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/child'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['sex'] !== undefined) {
    queryParameters['sex'] = parameters['sex']
  }
  if (parameters['sex'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: sex'))
  }
  if (parameters['birthday'] !== undefined) {
    queryParameters['birthday'] = parameters['birthday']
  }
  if (parameters['birthday'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: birthday'))
  }
  if (parameters['photo'] !== undefined) {
    queryParameters['photo'] = parameters['photo']
  }
  if (parameters['photo'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: photo'))
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters['fkClassId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: fkClassId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const childInsertUsingPOST_1_RAW_URL = function() {
  return '/manager/v1/child'
}
export const childInsertUsingPOST_1_TYPE = function() {
  return 'post'
}
export const childInsertUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/child'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['sex'] !== undefined) {
    queryParameters['sex'] = parameters['sex']
  }
  if (parameters['birthday'] !== undefined) {
    queryParameters['birthday'] = parameters['birthday']
  }
  if (parameters['photo'] !== undefined) {
    queryParameters['photo'] = parameters['photo']
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据id查询单个孩子信息
 * request: childSelectByIdUsingGET
 * url: childSelectByIdUsingGETURL
 * method: childSelectByIdUsingGET_TYPE
 * raw_url: childSelectByIdUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const childSelectByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/child/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const childSelectByIdUsingGET_RAW_URL = function() {
  return '/manager/v1/child/{id}'
}
export const childSelectByIdUsingGET_TYPE = function() {
  return 'get'
}
export const childSelectByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/child/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改孩子
 * request: childUpdateUsingPUT_1
 * url: childUpdateUsingPUT_1URL
 * method: childUpdateUsingPUT_1_TYPE
 * raw_url: childUpdateUsingPUT_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 孩子ID
 * @param name - 孩子姓名
 * @param sex - 性别(0女1男)
 * @param birthday - 生日
 */
export const childUpdateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/child/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['sex'] !== undefined) {
    queryParameters['sex'] = parameters['sex']
  }
  if (parameters['sex'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: sex'))
  }
  if (parameters['birthday'] !== undefined) {
    queryParameters['birthday'] = parameters['birthday']
  }
  if (parameters['birthday'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: birthday'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const childUpdateUsingPUT_1_RAW_URL = function() {
  return '/manager/v1/child/{id}'
}
export const childUpdateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const childUpdateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/child/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['sex'] !== undefined) {
    queryParameters['sex'] = parameters['sex']
  }
  if (parameters['birthday'] !== undefined) {
    queryParameters['birthday'] = parameters['birthday']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除孩子
 * request: childDeleteByIdUsingDELETE_1
 * url: childDeleteByIdUsingDELETE_1URL
 * method: childDeleteByIdUsingDELETE_1_TYPE
 * raw_url: childDeleteByIdUsingDELETE_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const childDeleteByIdUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/child/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const childDeleteByIdUsingDELETE_1_RAW_URL = function() {
  return '/manager/v1/child/{id}'
}
export const childDeleteByIdUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const childDeleteByIdUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/child/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询班级分页
 * request: managerClassPageUsingGET
 * url: managerClassPageUsingGETURL
 * method: managerClassPageUsingGET_TYPE
 * raw_url: managerClassPageUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param name - 名称
 */
export const managerClassPageUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const managerClassPageUsingGET_RAW_URL = function() {
  return '/manager/v1/class'
}
export const managerClassPageUsingGET_TYPE = function() {
  return 'get'
}
export const managerClassPageUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加班级
 * request: managerClassInsertUsingPOST
 * url: managerClassInsertUsingPOSTURL
 * method: managerClassInsertUsingPOST_TYPE
 * raw_url: managerClassInsertUsingPOST_RAW_URL
 * @param token - 用户登录凭证
 * @param name - 班级名称
 * @param description - 描述）
 * @param remark - 备注
 * @param managerUserId - 班主任id
 * @param fkRobotCode - 机器人编码
 */
export const managerClassInsertUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['description'] !== undefined) {
    queryParameters['description'] = parameters['description']
  }
  if (parameters['description'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: description'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['remark'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: remark'))
  }
  if (parameters['managerUserId'] !== undefined) {
    queryParameters['manager_user_id'] = parameters['managerUserId']
  }
  if (parameters['managerUserId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: managerUserId'))
  }
  if (parameters['fkRobotCode'] !== undefined) {
    queryParameters['fk_robot_code'] = parameters['fkRobotCode']
  }
  if (parameters['fkRobotCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: fkRobotCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const managerClassInsertUsingPOST_RAW_URL = function() {
  return '/manager/v1/class'
}
export const managerClassInsertUsingPOST_TYPE = function() {
  return 'post'
}
export const managerClassInsertUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['description'] !== undefined) {
    queryParameters['description'] = parameters['description']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['managerUserId'] !== undefined) {
    queryParameters['manager_user_id'] = parameters['managerUserId']
  }
  if (parameters['fkRobotCode'] !== undefined) {
    queryParameters['fk_robot_code'] = parameters['fkRobotCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询需要我处理的入班申请
 * request: managerClassApplyPageUsingGET
 * url: managerClassApplyPageUsingGETURL
 * method: managerClassApplyPageUsingGET_TYPE
 * raw_url: managerClassApplyPageUsingGET_RAW_URL
 * @param token - 用户登录凭证
 */
export const managerClassApplyPageUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-apply'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const managerClassApplyPageUsingGET_RAW_URL = function() {
  return '/manager/v1/class-apply'
}
export const managerClassApplyPageUsingGET_TYPE = function() {
  return 'get'
}
export const managerClassApplyPageUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-apply'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加入班申请
 * request: managerClassApplyInsertUsingPOST
 * url: managerClassApplyInsertUsingPOSTURL
 * method: managerClassApplyInsertUsingPOST_TYPE
 * raw_url: managerClassApplyInsertUsingPOST_RAW_URL
 * @param token - 用户登录凭证
 * @param fkKindergartenId - 关联班级ID
 */
export const managerClassApplyInsertUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-apply'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkKindergartenId'] !== undefined) {
    queryParameters['fk_kindergarten_id'] = parameters['fkKindergartenId']
  }
  if (parameters['fkKindergartenId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: fkKindergartenId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const managerClassApplyInsertUsingPOST_RAW_URL = function() {
  return '/manager/v1/class-apply'
}
export const managerClassApplyInsertUsingPOST_TYPE = function() {
  return 'post'
}
export const managerClassApplyInsertUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-apply'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkKindergartenId'] !== undefined) {
    queryParameters['fk_kindergarten_id'] = parameters['fkKindergartenId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 处理入班申请
 * request: managerClassApplyHandleUsingPUT
 * url: managerClassApplyHandleUsingPUTURL
 * method: managerClassApplyHandleUsingPUT_TYPE
 * raw_url: managerClassApplyHandleUsingPUT_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 入班申请ID
 * @param handleResult - 处理结果 1同意 2拒绝
 */
export const managerClassApplyHandleUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-apply/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['handleResult'] !== undefined) {
    queryParameters['handle_result'] = parameters['handleResult']
  }
  if (parameters['handleResult'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: handleResult'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const managerClassApplyHandleUsingPUT_RAW_URL = function() {
  return '/manager/v1/class-apply/{id}'
}
export const managerClassApplyHandleUsingPUT_TYPE = function() {
  return 'put'
}
export const managerClassApplyHandleUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-apply/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['handleResult'] !== undefined) {
    queryParameters['handle_result'] = parameters['handleResult']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除入班申请
 * request: managerClassApplyDeleteByIdUsingDELETE
 * url: managerClassApplyDeleteByIdUsingDELETEURL
 * method: managerClassApplyDeleteByIdUsingDELETE_TYPE
 * raw_url: managerClassApplyDeleteByIdUsingDELETE_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 班级ID
 */
export const managerClassApplyDeleteByIdUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-apply/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const managerClassApplyDeleteByIdUsingDELETE_RAW_URL = function() {
  return '/manager/v1/class-apply/{id}'
}
export const managerClassApplyDeleteByIdUsingDELETE_TYPE = function() {
  return 'delete'
}
export const managerClassApplyDeleteByIdUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-apply/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 课程表-分页
 * request: managerClassScheduleSelectPageUsingGET
 * url: managerClassScheduleSelectPageUsingGETURL
 * method: managerClassScheduleSelectPageUsingGET_TYPE
 * raw_url: managerClassScheduleSelectPageUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param fkClassId - 班级id
 */
export const managerClassScheduleSelectPageUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-schedule'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters['fkClassId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: fkClassId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const managerClassScheduleSelectPageUsingGET_RAW_URL = function() {
  return '/manager/v1/class-schedule'
}
export const managerClassScheduleSelectPageUsingGET_TYPE = function() {
  return 'get'
}
export const managerClassScheduleSelectPageUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-schedule'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加某班级的一周课程表
 * request: managerClassScheduleInsertUsingPOST
 * url: managerClassScheduleInsertUsingPOSTURL
 * method: managerClassScheduleInsertUsingPOST_TYPE
 * raw_url: managerClassScheduleInsertUsingPOST_RAW_URL
 * @param token - 用户登录凭证
 * @param tbClassSchedule - 课程表模型
 */
export const managerClassScheduleInsertUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-schedule'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['tbClassSchedule'] !== undefined) {
    body = parameters['tbClassSchedule']
  }
  if (parameters['tbClassSchedule'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tbClassSchedule'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const managerClassScheduleInsertUsingPOST_RAW_URL = function() {
  return '/manager/v1/class-schedule'
}
export const managerClassScheduleInsertUsingPOST_TYPE = function() {
  return 'post'
}
export const managerClassScheduleInsertUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-schedule'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 课程表修改
 * request: classScheduleUpdateUsingPUT
 * url: classScheduleUpdateUsingPUTURL
 * method: classScheduleUpdateUsingPUT_TYPE
 * raw_url: classScheduleUpdateUsingPUT_RAW_URL
 * @param token - 用户登录凭证
 * @param tbClassSchedule - 课程表模型
 */
export const classScheduleUpdateUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-schedule'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['tbClassSchedule'] !== undefined) {
    body = parameters['tbClassSchedule']
  }
  if (parameters['tbClassSchedule'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tbClassSchedule'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const classScheduleUpdateUsingPUT_RAW_URL = function() {
  return '/manager/v1/class-schedule'
}
export const classScheduleUpdateUsingPUT_TYPE = function() {
  return 'put'
}
export const classScheduleUpdateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-schedule'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 课程表主键主键假删除
 * request: classScheduleDeleteByIdUsingPUT
 * url: classScheduleDeleteByIdUsingPUTURL
 * method: classScheduleDeleteByIdUsingPUT_TYPE
 * raw_url: classScheduleDeleteByIdUsingPUT_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 课程表id
 */
export const classScheduleDeleteByIdUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-schedule/delete/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const classScheduleDeleteByIdUsingPUT_RAW_URL = function() {
  return '/manager/v1/class-schedule/delete/{id}'
}
export const classScheduleDeleteByIdUsingPUT_TYPE = function() {
  return 'put'
}
export const classScheduleDeleteByIdUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-schedule/delete/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 列出日期所属的那一周的课程表
 * request: managerClassScheduleSelectListByWeekUsingGET
 * url: managerClassScheduleSelectListByWeekUsingGETURL
 * method: managerClassScheduleSelectListByWeekUsingGET_TYPE
 * raw_url: managerClassScheduleSelectListByWeekUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param fkClassId - 班级id
 * @param datetime - 日期(yyyy-MM-dd)
 */
export const managerClassScheduleSelectListByWeekUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-schedule/week'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters['fkClassId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: fkClassId'))
  }
  if (parameters['datetime'] !== undefined) {
    queryParameters['datetime'] = parameters['datetime']
  }
  if (parameters['datetime'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: datetime'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const managerClassScheduleSelectListByWeekUsingGET_RAW_URL = function() {
  return '/manager/v1/class-schedule/week'
}
export const managerClassScheduleSelectListByWeekUsingGET_TYPE = function() {
  return 'get'
}
export const managerClassScheduleSelectListByWeekUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-schedule/week'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters['datetime'] !== undefined) {
    queryParameters['datetime'] = parameters['datetime']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 课程表-根据ID查询
 * request: managerClassScheduleSelectByIdUsingGET
 * url: managerClassScheduleSelectByIdUsingGETURL
 * method: managerClassScheduleSelectByIdUsingGET_TYPE
 * raw_url: managerClassScheduleSelectByIdUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const managerClassScheduleSelectByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class-schedule/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const managerClassScheduleSelectByIdUsingGET_RAW_URL = function() {
  return '/manager/v1/class-schedule/{id}'
}
export const managerClassScheduleSelectByIdUsingGET_TYPE = function() {
  return 'get'
}
export const managerClassScheduleSelectByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class-schedule/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询班级-根据幼儿园园长ID
 * request: managerClassSelectListByKindergartenMasterUsingGET
 * url: managerClassSelectListByKindergartenMasterUsingGETURL
 * method: managerClassSelectListByKindergartenMasterUsingGET_TYPE
 * raw_url: managerClassSelectListByKindergartenMasterUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param fkKindergartenId - 幼儿园ID
 */
export const managerClassSelectListByKindergartenMasterUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class/select-by-master'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkKindergartenId'] !== undefined) {
    queryParameters['fk_kindergarten_id'] = parameters['fkKindergartenId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const managerClassSelectListByKindergartenMasterUsingGET_RAW_URL = function() {
  return '/manager/v1/class/select-by-master'
}
export const managerClassSelectListByKindergartenMasterUsingGET_TYPE = function() {
  return 'get'
}
export const managerClassSelectListByKindergartenMasterUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class/select-by-master'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkKindergartenId'] !== undefined) {
    queryParameters['fk_kindergarten_id'] = parameters['fkKindergartenId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据id查询班级信息
 * request: managerClassSelectByIdUsingGET
 * url: managerClassSelectByIdUsingGETURL
 * method: managerClassSelectByIdUsingGET_TYPE
 * raw_url: managerClassSelectByIdUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const managerClassSelectByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const managerClassSelectByIdUsingGET_RAW_URL = function() {
  return '/manager/v1/class/{id}'
}
export const managerClassSelectByIdUsingGET_TYPE = function() {
  return 'get'
}
export const managerClassSelectByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改班级
 * request: managerClassUpdateUsingPUT
 * url: managerClassUpdateUsingPUTURL
 * method: managerClassUpdateUsingPUT_TYPE
 * raw_url: managerClassUpdateUsingPUT_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 班级ID
 * @param name - 班级名称
 * @param description - 描述
 * @param remark - 备注
 * @param managerUserId - 班主任id
 * @param fkRobotCode - 机器人编码
 */
export const managerClassUpdateUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['description'] !== undefined) {
    queryParameters['description'] = parameters['description']
  }
  if (parameters['description'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: description'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['remark'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: remark'))
  }
  if (parameters['managerUserId'] !== undefined) {
    queryParameters['manager_user_id'] = parameters['managerUserId']
  }
  if (parameters['managerUserId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: managerUserId'))
  }
  if (parameters['fkRobotCode'] !== undefined) {
    queryParameters['fk_robot_code'] = parameters['fkRobotCode']
  }
  if (parameters['fkRobotCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: fkRobotCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const managerClassUpdateUsingPUT_RAW_URL = function() {
  return '/manager/v1/class/{id}'
}
export const managerClassUpdateUsingPUT_TYPE = function() {
  return 'put'
}
export const managerClassUpdateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['description'] !== undefined) {
    queryParameters['description'] = parameters['description']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['managerUserId'] !== undefined) {
    queryParameters['manager_user_id'] = parameters['managerUserId']
  }
  if (parameters['fkRobotCode'] !== undefined) {
    queryParameters['fk_robot_code'] = parameters['fkRobotCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除班级
 * request: managerClassDeleteByIdUsingDELETE
 * url: managerClassDeleteByIdUsingDELETEURL
 * method: managerClassDeleteByIdUsingDELETE_TYPE
 * raw_url: managerClassDeleteByIdUsingDELETE_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 班级ID
 */
export const managerClassDeleteByIdUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/class/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const managerClassDeleteByIdUsingDELETE_RAW_URL = function() {
  return '/manager/v1/class/{id}'
}
export const managerClassDeleteByIdUsingDELETE_TYPE = function() {
  return 'delete'
}
export const managerClassDeleteByIdUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/class/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加家长
 * request: familyInsertUsingPOST
 * url: familyInsertUsingPOSTURL
 * method: familyInsertUsingPOST_TYPE
 * raw_url: familyInsertUsingPOST_RAW_URL
 * @param token - 用户登录凭证
 * @param username - username
 * @param remark - remark
 * @param familyRole - family_role
 * @param enabledChildId - enabled_child_id
 */
export const familyInsertUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/family'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['remark'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: remark'))
  }
  if (parameters['familyRole'] !== undefined) {
    queryParameters['family_role'] = parameters['familyRole']
  }
  if (parameters['familyRole'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: familyRole'))
  }
  if (parameters['enabledChildId'] !== undefined) {
    queryParameters['enabled_child_id'] = parameters['enabledChildId']
  }
  if (parameters['enabledChildId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: enabledChildId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const familyInsertUsingPOST_RAW_URL = function() {
  return '/manager/v1/family'
}
export const familyInsertUsingPOST_TYPE = function() {
  return 'post'
}
export const familyInsertUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/family'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['familyRole'] !== undefined) {
    queryParameters['family_role'] = parameters['familyRole']
  }
  if (parameters['enabledChildId'] !== undefined) {
    queryParameters['enabled_child_id'] = parameters['enabledChildId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改家人
 * request: familyUpdateUsingPUT_1
 * url: familyUpdateUsingPUT_1URL
 * method: familyUpdateUsingPUT_1_TYPE
 * raw_url: familyUpdateUsingPUT_1_RAW_URL
 * @param token - 用户登录凭证
 * @param familyRole - family_role
 */
export const familyUpdateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/family'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['familyRole'] !== undefined) {
    queryParameters['family_role'] = parameters['familyRole']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const familyUpdateUsingPUT_1_RAW_URL = function() {
  return '/manager/v1/family'
}
export const familyUpdateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const familyUpdateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/family'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['familyRole'] !== undefined) {
    queryParameters['family_role'] = parameters['familyRole']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据主键查询家长信息
 * request: familySelectByUserIdUsingGET
 * url: familySelectByUserIdUsingGETURL
 * method: familySelectByUserIdUsingGET_TYPE
 * raw_url: familySelectByUserIdUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const familySelectByUserIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/family/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const familySelectByUserIdUsingGET_RAW_URL = function() {
  return '/manager/v1/family/{id}'
}
export const familySelectByUserIdUsingGET_TYPE = function() {
  return 'get'
}
export const familySelectByUserIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/family/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据主键修改家人信息
 * request: familyUpdateByIdUsingPUT
 * url: familyUpdateByIdUsingPUTURL
 * method: familyUpdateByIdUsingPUT_TYPE
 * raw_url: familyUpdateByIdUsingPUT_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 * @param remark - remark
 * @param familyRole - family_role
 */
export const familyUpdateByIdUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/family/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['remark'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: remark'))
  }
  if (parameters['familyRole'] !== undefined) {
    queryParameters['family_role'] = parameters['familyRole']
  }
  if (parameters['familyRole'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: familyRole'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const familyUpdateByIdUsingPUT_RAW_URL = function() {
  return '/manager/v1/family/{id}'
}
export const familyUpdateByIdUsingPUT_TYPE = function() {
  return 'put'
}
export const familyUpdateByIdUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/family/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['familyRole'] !== undefined) {
    queryParameters['family_role'] = parameters['familyRole']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据主键删除家长
 * request: familyDeleteByIdUsingDELETE
 * url: familyDeleteByIdUsingDELETEURL
 * method: familyDeleteByIdUsingDELETE_TYPE
 * raw_url: familyDeleteByIdUsingDELETE_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const familyDeleteByIdUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/family/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const familyDeleteByIdUsingDELETE_RAW_URL = function() {
  return '/manager/v1/family/{id}'
}
export const familyDeleteByIdUsingDELETE_TYPE = function() {
  return 'delete'
}
export const familyDeleteByIdUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/family/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询我的幼儿园
 * request: kindergartenPageUsingGET_1
 * url: kindergartenPageUsingGET_1URL
 * method: kindergartenPageUsingGET_1_TYPE
 * raw_url: kindergartenPageUsingGET_1_RAW_URL
 * @param token - 用户登录凭证
 */
export const kindergartenPageUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/kindergarten'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const kindergartenPageUsingGET_1_RAW_URL = function() {
  return '/manager/v1/kindergarten'
}
export const kindergartenPageUsingGET_1_TYPE = function() {
  return 'get'
}
export const kindergartenPageUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/kindergarten'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加幼儿园
 * request: schoolInsertUsingPOST
 * url: schoolInsertUsingPOSTURL
 * method: schoolInsertUsingPOST_TYPE
 * raw_url: schoolInsertUsingPOST_RAW_URL
 * @param token - 用户登录凭证
 * @param name - name
 * @param photo - photo
 * @param address - address
 * @param description - description
 * @param remark - remark
 */
export const schoolInsertUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/kindergarten'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['photo'] !== undefined) {
    queryParameters['photo'] = parameters['photo']
  }
  if (parameters['photo'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: photo'))
  }
  if (parameters['address'] !== undefined) {
    queryParameters['address'] = parameters['address']
  }
  if (parameters['address'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: address'))
  }
  if (parameters['description'] !== undefined) {
    queryParameters['description'] = parameters['description']
  }
  if (parameters['description'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: description'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['remark'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: remark'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const schoolInsertUsingPOST_RAW_URL = function() {
  return '/manager/v1/kindergarten'
}
export const schoolInsertUsingPOST_TYPE = function() {
  return 'post'
}
export const schoolInsertUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/kindergarten'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['photo'] !== undefined) {
    queryParameters['photo'] = parameters['photo']
  }
  if (parameters['address'] !== undefined) {
    queryParameters['address'] = parameters['address']
  }
  if (parameters['description'] !== undefined) {
    queryParameters['description'] = parameters['description']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据用户id信息查询学校信息
 * request: kindergartenSelectByUserUsingGET
 * url: kindergartenSelectByUserUsingGETURL
 * method: kindergartenSelectByUserUsingGET_TYPE
 * raw_url: kindergartenSelectByUserUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param fkUserId - 用户id
 */
export const kindergartenSelectByUserUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/kindergarten/user'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkUserId'] !== undefined) {
    queryParameters['fk_user_id'] = parameters['fkUserId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const kindergartenSelectByUserUsingGET_RAW_URL = function() {
  return '/manager/v1/kindergarten/user'
}
export const kindergartenSelectByUserUsingGET_TYPE = function() {
  return 'get'
}
export const kindergartenSelectByUserUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/kindergarten/user'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkUserId'] !== undefined) {
    queryParameters['fk_user_id'] = parameters['fkUserId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询单个幼儿园
 * request: kindergartenSelectUsingGET
 * url: kindergartenSelectUsingGETURL
 * method: kindergartenSelectUsingGET_TYPE
 * raw_url: kindergartenSelectUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 幼儿园ID
 */
export const kindergartenSelectUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/kindergarten/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const kindergartenSelectUsingGET_RAW_URL = function() {
  return '/manager/v1/kindergarten/{id}'
}
export const kindergartenSelectUsingGET_TYPE = function() {
  return 'get'
}
export const kindergartenSelectUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/kindergarten/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改幼儿园
 * request: schoolUpdateUsingPUT_1
 * url: schoolUpdateUsingPUT_1URL
 * method: schoolUpdateUsingPUT_1_TYPE
 * raw_url: schoolUpdateUsingPUT_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 * @param name - name
 * @param photo - photo
 * @param address - address
 * @param description - description
 * @param remark - remark
 * @param managerName - manager_name
 * @param managerPhone - manager_phone
 */
export const schoolUpdateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/kindergarten/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['photo'] !== undefined) {
    queryParameters['photo'] = parameters['photo']
  }
  if (parameters['photo'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: photo'))
  }
  if (parameters['address'] !== undefined) {
    queryParameters['address'] = parameters['address']
  }
  if (parameters['address'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: address'))
  }
  if (parameters['description'] !== undefined) {
    queryParameters['description'] = parameters['description']
  }
  if (parameters['description'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: description'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['remark'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: remark'))
  }
  if (parameters['managerName'] !== undefined) {
    queryParameters['manager_name'] = parameters['managerName']
  }
  if (parameters['managerName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: managerName'))
  }
  if (parameters['managerPhone'] !== undefined) {
    queryParameters['manager_phone'] = parameters['managerPhone']
  }
  if (parameters['managerPhone'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: managerPhone'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const schoolUpdateUsingPUT_1_RAW_URL = function() {
  return '/manager/v1/kindergarten/{id}'
}
export const schoolUpdateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const schoolUpdateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/kindergarten/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['photo'] !== undefined) {
    queryParameters['photo'] = parameters['photo']
  }
  if (parameters['address'] !== undefined) {
    queryParameters['address'] = parameters['address']
  }
  if (parameters['description'] !== undefined) {
    queryParameters['description'] = parameters['description']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['managerName'] !== undefined) {
    queryParameters['manager_name'] = parameters['managerName']
  }
  if (parameters['managerPhone'] !== undefined) {
    queryParameters['manager_phone'] = parameters['managerPhone']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除幼儿园
 * request: schoolDeleteByIdUsingDELETE_1
 * url: schoolDeleteByIdUsingDELETE_1URL
 * method: schoolDeleteByIdUsingDELETE_1_TYPE
 * raw_url: schoolDeleteByIdUsingDELETE_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const schoolDeleteByIdUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/kindergarten/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const schoolDeleteByIdUsingDELETE_1_RAW_URL = function() {
  return '/manager/v1/kindergarten/{id}'
}
export const schoolDeleteByIdUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const schoolDeleteByIdUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/kindergarten/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 机器人信息表-分页
 * request: tbRobotSelectPageUsingGET
 * url: tbRobotSelectPageUsingGETURL
 * method: tbRobotSelectPageUsingGET_TYPE
 * raw_url: tbRobotSelectPageUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param fkAppKey - app_key
 */
export const tbRobotSelectPageUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/robot'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkAppKey'] !== undefined) {
    queryParameters['fk_app_key'] = parameters['fkAppKey']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const tbRobotSelectPageUsingGET_RAW_URL = function() {
  return '/manager/v1/robot'
}
export const tbRobotSelectPageUsingGET_TYPE = function() {
  return 'get'
}
export const tbRobotSelectPageUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/robot'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['fkAppKey'] !== undefined) {
    queryParameters['fk_app_key'] = parameters['fkAppKey']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过code列出所有的课程
 * request: syllabusPageUsingGET_1
 * url: syllabusPageUsingGET_1URL
 * method: syllabusPageUsingGET_1_TYPE
 * raw_url: syllabusPageUsingGET_1_RAW_URL
 * @param token - 用户登录凭证
 * @param name - 课程名称
 */
export const syllabusPageUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const syllabusPageUsingGET_1_RAW_URL = function() {
  return '/manager/v1/syllabus'
}
export const syllabusPageUsingGET_1_TYPE = function() {
  return 'get'
}
export const syllabusPageUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加课程
 * request: syllabusInsertUsingPOST_1
 * url: syllabusInsertUsingPOST_1URL
 * method: syllabusInsertUsingPOST_1_TYPE
 * raw_url: syllabusInsertUsingPOST_1_RAW_URL
 * @param token - 用户登录凭证
 * @param tbSyllabus - 课程实体
 */
export const syllabusInsertUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['tbSyllabus'] !== undefined) {
    body = parameters['tbSyllabus']
  }
  if (parameters['tbSyllabus'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tbSyllabus'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const syllabusInsertUsingPOST_1_RAW_URL = function() {
  return '/manager/v1/syllabus'
}
export const syllabusInsertUsingPOST_1_TYPE = function() {
  return 'post'
}
export const syllabusInsertUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 列出所有的课程类型
 * request: syllabusTypePageUsingGET_1
 * url: syllabusTypePageUsingGET_1URL
 * method: syllabusTypePageUsingGET_1_TYPE
 * raw_url: syllabusTypePageUsingGET_1_RAW_URL
 * @param token - 用户登录凭证
 */
export const syllabusTypePageUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus-type'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const syllabusTypePageUsingGET_1_RAW_URL = function() {
  return '/manager/v1/syllabus-type'
}
export const syllabusTypePageUsingGET_1_TYPE = function() {
  return 'get'
}
export const syllabusTypePageUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus-type'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加课程类型
 * request: syllabusTypeInsertUsingPOST_1
 * url: syllabusTypeInsertUsingPOST_1URL
 * method: syllabusTypeInsertUsingPOST_1_TYPE
 * raw_url: syllabusTypeInsertUsingPOST_1_RAW_URL
 * @param token - 用户登录凭证
 * @param code - 课程类型
 * @param name - 名称
 * @param remark - 备注
 */
export const syllabusTypeInsertUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus-type'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const syllabusTypeInsertUsingPOST_1_RAW_URL = function() {
  return '/manager/v1/syllabus-type'
}
export const syllabusTypeInsertUsingPOST_1_TYPE = function() {
  return 'post'
}
export const syllabusTypeInsertUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus-type'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有的课程类型并查询对应的课程
 * request: syllabusTypeAndSyllabusUsingGET
 * url: syllabusTypeAndSyllabusUsingGETURL
 * method: syllabusTypeAndSyllabusUsingGET_TYPE
 * raw_url: syllabusTypeAndSyllabusUsingGET_RAW_URL
 * @param token - 用户登录凭证
 */
export const syllabusTypeAndSyllabusUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus-type/syllabus'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const syllabusTypeAndSyllabusUsingGET_RAW_URL = function() {
  return '/manager/v1/syllabus-type/syllabus'
}
export const syllabusTypeAndSyllabusUsingGET_TYPE = function() {
  return 'get'
}
export const syllabusTypeAndSyllabusUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus-type/syllabus'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据课程类型id查询课程类型信息
 * request: syllabusTypeSelectByIdUsingGET
 * url: syllabusTypeSelectByIdUsingGETURL
 * method: syllabusTypeSelectByIdUsingGET_TYPE
 * raw_url: syllabusTypeSelectByIdUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const syllabusTypeSelectByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus-type/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const syllabusTypeSelectByIdUsingGET_RAW_URL = function() {
  return '/manager/v1/syllabus-type/{id}'
}
export const syllabusTypeSelectByIdUsingGET_TYPE = function() {
  return 'get'
}
export const syllabusTypeSelectByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus-type/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改指定的课程类型
 * request: syllabusTypeUpdateUsingPUT_1
 * url: syllabusTypeUpdateUsingPUT_1URL
 * method: syllabusTypeUpdateUsingPUT_1_TYPE
 * raw_url: syllabusTypeUpdateUsingPUT_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 课程类型ID
 * @param code - 课程类型
 * @param name - 名称
 * @param remark - 备注
 */
export const syllabusTypeUpdateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus-type/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const syllabusTypeUpdateUsingPUT_1_RAW_URL = function() {
  return '/manager/v1/syllabus-type/{id}'
}
export const syllabusTypeUpdateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const syllabusTypeUpdateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus-type/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除指定的课程类型
 * request: syllabusTypeDeleteUsingDELETE_1
 * url: syllabusTypeDeleteUsingDELETE_1URL
 * method: syllabusTypeDeleteUsingDELETE_1_TYPE
 * raw_url: syllabusTypeDeleteUsingDELETE_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 课程类型ID
 */
export const syllabusTypeDeleteUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus-type/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const syllabusTypeDeleteUsingDELETE_1_RAW_URL = function() {
  return '/manager/v1/syllabus-type/{id}'
}
export const syllabusTypeDeleteUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const syllabusTypeDeleteUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus-type/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据id查看课程
 * request: syllabusSelectByIdUsingGET_1
 * url: syllabusSelectByIdUsingGET_1URL
 * method: syllabusSelectByIdUsingGET_1_TYPE
 * raw_url: syllabusSelectByIdUsingGET_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 课程id
 */
export const syllabusSelectByIdUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const syllabusSelectByIdUsingGET_1_RAW_URL = function() {
  return '/manager/v1/syllabus/{id}'
}
export const syllabusSelectByIdUsingGET_1_TYPE = function() {
  return 'get'
}
export const syllabusSelectByIdUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改课程
 * request: syllabusUpdateUsingPUT_1
 * url: syllabusUpdateUsingPUT_1URL
 * method: syllabusUpdateUsingPUT_1_TYPE
 * raw_url: syllabusUpdateUsingPUT_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 课程id
 * @param code - 课程类型
 * @param name - 课程名称
 * @param remark - 课程介绍
 * @param zipUrl - zip文件地址
 */
export const syllabusUpdateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['zipUrl'] !== undefined) {
    queryParameters['zip_url'] = parameters['zipUrl']
  }
  if (parameters['zipUrl'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: zipUrl'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const syllabusUpdateUsingPUT_1_RAW_URL = function() {
  return '/manager/v1/syllabus/{id}'
}
export const syllabusUpdateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const syllabusUpdateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['zipUrl'] !== undefined) {
    queryParameters['zip_url'] = parameters['zipUrl']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除指定的课程
 * request: syllabusDeleteUsingDELETE_1
 * url: syllabusDeleteUsingDELETE_1URL
 * method: syllabusDeleteUsingDELETE_1_TYPE
 * raw_url: syllabusDeleteUsingDELETE_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - 课程id
 */
export const syllabusDeleteUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/syllabus/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const syllabusDeleteUsingDELETE_1_RAW_URL = function() {
  return '/manager/v1/syllabus/{id}'
}
export const syllabusDeleteUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const syllabusDeleteUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/syllabus/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询登陆者学校的教师列表
 * request: teacherSelectUsingGET
 * url: teacherSelectUsingGETURL
 * method: teacherSelectUsingGET_TYPE
 * raw_url: teacherSelectUsingGET_RAW_URL
 * @param token - 用户登录凭证
 */
export const teacherSelectUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/teacher'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const teacherSelectUsingGET_RAW_URL = function() {
  return '/manager/v1/teacher'
}
export const teacherSelectUsingGET_TYPE = function() {
  return 'get'
}
export const teacherSelectUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/teacher'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 教师入校申请
 * request: teacherInsertUsingPOST
 * url: teacherInsertUsingPOSTURL
 * method: teacherInsertUsingPOST_TYPE
 * raw_url: teacherInsertUsingPOST_RAW_URL
 * @param token - 用户登录凭证
 * @param remark - remark
 * @param sex - sex
 * @param username - username
 * @param teachingExperiences - teaching_experiences
 */
export const teacherInsertUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/teacher'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['remark'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: remark'))
  }
  if (parameters['sex'] !== undefined) {
    queryParameters['sex'] = parameters['sex']
  }
  if (parameters['sex'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: sex'))
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['teachingExperiences'] !== undefined) {
    queryParameters['teaching_experiences'] = parameters['teachingExperiences']
  }
  if (parameters['teachingExperiences'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: teachingExperiences'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const teacherInsertUsingPOST_RAW_URL = function() {
  return '/manager/v1/teacher'
}
export const teacherInsertUsingPOST_TYPE = function() {
  return 'post'
}
export const teacherInsertUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/teacher'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['sex'] !== undefined) {
    queryParameters['sex'] = parameters['sex']
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['teachingExperiences'] !== undefined) {
    queryParameters['teaching_experiences'] = parameters['teachingExperiences']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据备注名模糊查询
 * request: teacherSelectByNameUsingGET
 * url: teacherSelectByNameUsingGETURL
 * method: teacherSelectByNameUsingGET_TYPE
 * raw_url: teacherSelectByNameUsingGET_RAW_URL
 * @param token - 用户登录凭证
 * @param remark - remark
 */
export const teacherSelectByNameUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/teacher/name'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const teacherSelectByNameUsingGET_RAW_URL = function() {
  return '/manager/v1/teacher/name'
}
export const teacherSelectByNameUsingGET_TYPE = function() {
  return 'get'
}
export const teacherSelectByNameUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/teacher/name'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询单个教师信息
 * request: teacherSelectByIdUsingGET_1
 * url: teacherSelectByIdUsingGET_1URL
 * method: teacherSelectByIdUsingGET_1_TYPE
 * raw_url: teacherSelectByIdUsingGET_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const teacherSelectByIdUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/teacher/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const teacherSelectByIdUsingGET_1_RAW_URL = function() {
  return '/manager/v1/teacher/{id}'
}
export const teacherSelectByIdUsingGET_1_TYPE = function() {
  return 'get'
}
export const teacherSelectByIdUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/teacher/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改老师信息
 * request: teacherUpdateByIdUsingPUT
 * url: teacherUpdateByIdUsingPUTURL
 * method: teacherUpdateByIdUsingPUT_TYPE
 * raw_url: teacherUpdateByIdUsingPUT_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 * @param remark - remark
 * @param teachingExperiences - teaching_experiences
 */
export const teacherUpdateByIdUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/teacher/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['remark'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: remark'))
  }
  if (parameters['teachingExperiences'] !== undefined) {
    queryParameters['teaching_experiences'] = parameters['teachingExperiences']
  }
  if (parameters['teachingExperiences'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: teachingExperiences'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const teacherUpdateByIdUsingPUT_RAW_URL = function() {
  return '/manager/v1/teacher/{id}'
}
export const teacherUpdateByIdUsingPUT_TYPE = function() {
  return 'put'
}
export const teacherUpdateByIdUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/teacher/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['teachingExperiences'] !== undefined) {
    queryParameters['teaching_experiences'] = parameters['teachingExperiences']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据用户id删除教师
 * request: teacherDelectByIdUsingDELETE
 * url: teacherDelectByIdUsingDELETEURL
 * method: teacherDelectByIdUsingDELETE_TYPE
 * raw_url: teacherDelectByIdUsingDELETE_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const teacherDelectByIdUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/teacher/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const teacherDelectByIdUsingDELETE_RAW_URL = function() {
  return '/manager/v1/teacher/{id}'
}
export const teacherDelectByIdUsingDELETE_TYPE = function() {
  return 'delete'
}
export const teacherDelectByIdUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/teacher/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 后台园长注册（只允许注册园长）
 * request: userRegisterUsingPOST_1
 * url: userRegisterUsingPOST_1URL
 * method: userRegisterUsingPOST_1_TYPE
 * raw_url: userRegisterUsingPOST_1_RAW_URL
 * @param token - 用户登录凭证
 * @param username - 用户名
 * @param password - 密码
 * @param captcha - 验证码
 */
export const userRegisterUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/user'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: password'))
  }
  if (parameters['captcha'] !== undefined) {
    queryParameters['captcha'] = parameters['captcha']
  }
  if (parameters['captcha'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: captcha'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const userRegisterUsingPOST_1_RAW_URL = function() {
  return '/manager/v1/user'
}
export const userRegisterUsingPOST_1_TYPE = function() {
  return 'post'
}
export const userRegisterUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/user'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters['captcha'] !== undefined) {
    queryParameters['captcha'] = parameters['captcha']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 使用token获取用户账户信息
 * request: selectUserByTokenUsingGET_1
 * url: selectUserByTokenUsingGET_1URL
 * method: selectUserByTokenUsingGET_1_TYPE
 * raw_url: selectUserByTokenUsingGET_1_RAW_URL
 * @param token - token
 */
export const selectUserByTokenUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/user-token'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['token'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: token'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const selectUserByTokenUsingGET_1_RAW_URL = function() {
  return '/manager/v1/user-token'
}
export const selectUserByTokenUsingGET_1_TYPE = function() {
  return 'get'
}
export const selectUserByTokenUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/user-token'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 登录（密码登录）
 * request: loginWithPasswordUsingPOST_1
 * url: loginWithPasswordUsingPOST_1URL
 * method: loginWithPasswordUsingPOST_1_TYPE
 * raw_url: loginWithPasswordUsingPOST_1_RAW_URL
 * @param token - 用户登录凭证
 * @param username - 用户名
 * @param password - 密码
 */
export const loginWithPasswordUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/user/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: password'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const loginWithPasswordUsingPOST_1_RAW_URL = function() {
  return '/manager/v1/user/login'
}
export const loginWithPasswordUsingPOST_1_TYPE = function() {
  return 'post'
}
export const loginWithPasswordUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/user/login'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 退出
 * request: logoutUsingPOST_1
 * url: logoutUsingPOST_1URL
 * method: logoutUsingPOST_1_TYPE
 * raw_url: logoutUsingPOST_1_RAW_URL
 * @param token - token
 */
export const logoutUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/user/logout'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['token'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: token'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const logoutUsingPOST_1_RAW_URL = function() {
  return '/manager/v1/user/logout'
}
export const logoutUsingPOST_1_TYPE = function() {
  return 'post'
}
export const logoutUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/user/logout'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 忘记密码
 * request: resetPasswordUsingPOST_1
 * url: resetPasswordUsingPOST_1URL
 * method: resetPasswordUsingPOST_1_TYPE
 * raw_url: resetPasswordUsingPOST_1_RAW_URL
 * @param token - 用户登录凭证
 * @param smsCaptcha - 短信验证码
 * @param passwordNew - 新密码
 */
export const resetPasswordUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/user/reset-password'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['smsCaptcha'] !== undefined) {
    queryParameters['smsCaptcha'] = parameters['smsCaptcha']
  }
  if (parameters['smsCaptcha'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: smsCaptcha'))
  }
  if (parameters['passwordNew'] !== undefined) {
    queryParameters['passwordNew'] = parameters['passwordNew']
  }
  if (parameters['passwordNew'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: passwordNew'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const resetPasswordUsingPOST_1_RAW_URL = function() {
  return '/manager/v1/user/reset-password'
}
export const resetPasswordUsingPOST_1_TYPE = function() {
  return 'post'
}
export const resetPasswordUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/user/reset-password'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['smsCaptcha'] !== undefined) {
    queryParameters['smsCaptcha'] = parameters['smsCaptcha']
  }
  if (parameters['passwordNew'] !== undefined) {
    queryParameters['passwordNew'] = parameters['passwordNew']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 使用token获取用户基础信息
 * request: selectUserInfoByTokenUsingGET_1
 * url: selectUserInfoByTokenUsingGET_1URL
 * method: selectUserInfoByTokenUsingGET_1_TYPE
 * raw_url: selectUserInfoByTokenUsingGET_1_RAW_URL
 * @param token - token
 */
export const selectUserInfoByTokenUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v1/userinfo-token'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['token'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: token'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const selectUserInfoByTokenUsingGET_1_RAW_URL = function() {
  return '/manager/v1/userinfo-token'
}
export const selectUserInfoByTokenUsingGET_1_TYPE = function() {
  return 'get'
}
export const selectUserInfoByTokenUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v1/userinfo-token'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 班级成员表-分页
 * request: tbClassMemberSelectPageUsingGET_1
 * url: tbClassMemberSelectPageUsingGET_1URL
 * method: tbClassMemberSelectPageUsingGET_1_TYPE
 * raw_url: tbClassMemberSelectPageUsingGET_1_RAW_URL
 * @param token - 用户登录凭证
 * @param current - 当前页
 * @param size - 每页数量
 * @param fkClassId - 班级id
 */
export const tbClassMemberSelectPageUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/class-member'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['current'] !== undefined) {
    queryParameters['current'] = parameters['current']
  }
  if (parameters['size'] !== undefined) {
    queryParameters['size'] = parameters['size']
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const tbClassMemberSelectPageUsingGET_1_RAW_URL = function() {
  return '/manager/v2/class-member'
}
export const tbClassMemberSelectPageUsingGET_1_TYPE = function() {
  return 'get'
}
export const tbClassMemberSelectPageUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/class-member'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['current'] !== undefined) {
    queryParameters['current'] = parameters['current']
  }
  if (parameters['size'] !== undefined) {
    queryParameters['size'] = parameters['size']
  }
  if (parameters['fkClassId'] !== undefined) {
    queryParameters['fk_class_id'] = parameters['fkClassId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 班级成员表-新增
 * request: tbClassMemberInsertUsingPOST_1
 * url: tbClassMemberInsertUsingPOST_1URL
 * method: tbClassMemberInsertUsingPOST_1_TYPE
 * raw_url: tbClassMemberInsertUsingPOST_1_RAW_URL
 * @param token - 用户登录凭证
 * @param tbClassMember - 班级成员表实体
 */
export const tbClassMemberInsertUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/class-member'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['tbClassMember'] !== undefined) {
    body = parameters['tbClassMember']
  }
  if (parameters['tbClassMember'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tbClassMember'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const tbClassMemberInsertUsingPOST_1_RAW_URL = function() {
  return '/manager/v2/class-member'
}
export const tbClassMemberInsertUsingPOST_1_TYPE = function() {
  return 'post'
}
export const tbClassMemberInsertUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/class-member'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 班级成员表-修改
 * request: tbClassMemberUpdateUsingPUT_1
 * url: tbClassMemberUpdateUsingPUT_1URL
 * method: tbClassMemberUpdateUsingPUT_1_TYPE
 * raw_url: tbClassMemberUpdateUsingPUT_1_RAW_URL
 * @param token - 用户登录凭证
 * @param tbClassMember - 班级成员表实体
 */
export const tbClassMemberUpdateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/class-member'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['tbClassMember'] !== undefined) {
    body = parameters['tbClassMember']
  }
  if (parameters['tbClassMember'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tbClassMember'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const tbClassMemberUpdateUsingPUT_1_RAW_URL = function() {
  return '/manager/v2/class-member'
}
export const tbClassMemberUpdateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const tbClassMemberUpdateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/class-member'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 班级成员表-主键查询
 * request: tbClassMemberSelectByIdUsingGET_1
 * url: tbClassMemberSelectByIdUsingGET_1URL
 * method: tbClassMemberSelectByIdUsingGET_1_TYPE
 * raw_url: tbClassMemberSelectByIdUsingGET_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const tbClassMemberSelectByIdUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/class-member/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const tbClassMemberSelectByIdUsingGET_1_RAW_URL = function() {
  return '/manager/v2/class-member/{id}'
}
export const tbClassMemberSelectByIdUsingGET_1_TYPE = function() {
  return 'get'
}
export const tbClassMemberSelectByIdUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/class-member/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 班级成员表-主键删除
 * request: tbClassMemberDeleteUsingDELETE_1
 * url: tbClassMemberDeleteUsingDELETE_1URL
 * method: tbClassMemberDeleteUsingDELETE_1_TYPE
 * raw_url: tbClassMemberDeleteUsingDELETE_1_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const tbClassMemberDeleteUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/class-member/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const tbClassMemberDeleteUsingDELETE_1_RAW_URL = function() {
  return '/manager/v2/class-member/{id}'
}
export const tbClassMemberDeleteUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const tbClassMemberDeleteUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/class-member/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 入园申请-分页
 * request: tbKindergartenApplySelectPageUsingGET_2
 * url: tbKindergartenApplySelectPageUsingGET_2URL
 * method: tbKindergartenApplySelectPageUsingGET_2_TYPE
 * raw_url: tbKindergartenApplySelectPageUsingGET_2_RAW_URL
 * @param token - 用户登录凭证
 * @param current - 当前页
 * @param size - 每页数量
 */
export const tbKindergartenApplySelectPageUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/kindergarten-apply'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['current'] !== undefined) {
    queryParameters['current'] = parameters['current']
  }
  if (parameters['size'] !== undefined) {
    queryParameters['size'] = parameters['size']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const tbKindergartenApplySelectPageUsingGET_2_RAW_URL = function() {
  return '/manager/v2/kindergarten-apply'
}
export const tbKindergartenApplySelectPageUsingGET_2_TYPE = function() {
  return 'get'
}
export const tbKindergartenApplySelectPageUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/kindergarten-apply'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['current'] !== undefined) {
    queryParameters['current'] = parameters['current']
  }
  if (parameters['size'] !== undefined) {
    queryParameters['size'] = parameters['size']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 入园申请-新增
 * request: tbKindergartenApplyInsertUsingPOST_2
 * url: tbKindergartenApplyInsertUsingPOST_2URL
 * method: tbKindergartenApplyInsertUsingPOST_2_TYPE
 * raw_url: tbKindergartenApplyInsertUsingPOST_2_RAW_URL
 * @param token - 用户登录凭证
 * @param tbKindergartenApply - 入园申请实体
 */
export const tbKindergartenApplyInsertUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/kindergarten-apply'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['tbKindergartenApply'] !== undefined) {
    body = parameters['tbKindergartenApply']
  }
  if (parameters['tbKindergartenApply'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tbKindergartenApply'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const tbKindergartenApplyInsertUsingPOST_2_RAW_URL = function() {
  return '/manager/v2/kindergarten-apply'
}
export const tbKindergartenApplyInsertUsingPOST_2_TYPE = function() {
  return 'post'
}
export const tbKindergartenApplyInsertUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/kindergarten-apply'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 入园申请-修改
 * request: tbKindergartenApplyUpdateUsingPUT_1
 * url: tbKindergartenApplyUpdateUsingPUT_1URL
 * method: tbKindergartenApplyUpdateUsingPUT_1_TYPE
 * raw_url: tbKindergartenApplyUpdateUsingPUT_1_RAW_URL
 * @param token - 用户登录凭证
 * @param tbKindergartenApply - 入园申请实体
 */
export const tbKindergartenApplyUpdateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/kindergarten-apply'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters['tbKindergartenApply'] !== undefined) {
    body = parameters['tbKindergartenApply']
  }
  if (parameters['tbKindergartenApply'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tbKindergartenApply'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const tbKindergartenApplyUpdateUsingPUT_1_RAW_URL = function() {
  return '/manager/v2/kindergarten-apply'
}
export const tbKindergartenApplyUpdateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const tbKindergartenApplyUpdateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/kindergarten-apply'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 入园申请-主键查询
 * request: tbKindergartenApplySelectByIdUsingGET_2
 * url: tbKindergartenApplySelectByIdUsingGET_2URL
 * method: tbKindergartenApplySelectByIdUsingGET_2_TYPE
 * raw_url: tbKindergartenApplySelectByIdUsingGET_2_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const tbKindergartenApplySelectByIdUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/kindergarten-apply/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const tbKindergartenApplySelectByIdUsingGET_2_RAW_URL = function() {
  return '/manager/v2/kindergarten-apply/{id}'
}
export const tbKindergartenApplySelectByIdUsingGET_2_TYPE = function() {
  return 'get'
}
export const tbKindergartenApplySelectByIdUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/kindergarten-apply/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 入园申请-主键删除
 * request: tbKindergartenApplyDeleteUsingDELETE_2
 * url: tbKindergartenApplyDeleteUsingDELETE_2URL
 * method: tbKindergartenApplyDeleteUsingDELETE_2_TYPE
 * raw_url: tbKindergartenApplyDeleteUsingDELETE_2_RAW_URL
 * @param token - 用户登录凭证
 * @param id - id
 */
export const tbKindergartenApplyDeleteUsingDELETE_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/manager/v2/kindergarten-apply/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const tbKindergartenApplyDeleteUsingDELETE_2_RAW_URL = function() {
  return '/manager/v2/kindergarten-apply/{id}'
}
export const tbKindergartenApplyDeleteUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const tbKindergartenApplyDeleteUsingDELETE_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/manager/v2/kindergarten-apply/{id}'
  if (parameters['token'] !== undefined) {
    queryParameters['token'] = parameters['token']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}