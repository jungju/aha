/* eslint-disable */
import axios from 'axios'
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
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return axios[method](queryUrl, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    메이크집 API
 ==========================================================*/
/**
 * create User
 * request: UserAuthController_Post
 * url: UserAuthController_PostURL
 * method: UserAuthController_Post_TYPE
 * raw_url: UserAuthController_Post_RAW_URL
 * @param body - body for User content
 */
export const UserAuthController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/auth/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const UserAuthController_Post_RAW_URL = function() {
  return '/auth/'
}
export const UserAuthController_Post_TYPE = function() {
  return 'post'
}
export const UserAuthController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/auth/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * login User
 * request: UserAuthController_Login
 * url: UserAuthController_LoginURL
 * method: UserAuthController_Login_TYPE
 * raw_url: UserAuthController_Login_RAW_URL
 * @param body - body for token content
 */
export const UserAuthController_Login = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/auth/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const UserAuthController_Login_RAW_URL = function() {
  return '/auth/login'
}
export const UserAuthController_Login_TYPE = function() {
  return 'post'
}
export const UserAuthController_LoginURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/auth/login'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * logout User
 * request: UserAuthController_Logout
 * url: UserAuthController_LogoutURL
 * method: UserAuthController_Logout_TYPE
 * raw_url: UserAuthController_Logout_RAW_URL
 */
export const UserAuthController_Logout = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/auth/logout'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const UserAuthController_Logout_RAW_URL = function() {
  return '/auth/logout'
}
export const UserAuthController_Logout_TYPE = function() {
  return 'post'
}
export const UserAuthController_LogoutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/auth/logout'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * file upload
 * request: UserAuthController_FileUpload
 * url: UserAuthController_FileUploadURL
 * method: UserAuthController_FileUpload_TYPE
 * raw_url: UserAuthController_FileUpload_RAW_URL
 */
export const UserAuthController_FileUpload = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/auth/upload'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const UserAuthController_FileUpload_RAW_URL = function() {
  return '/auth/upload'
}
export const UserAuthController_FileUpload_TYPE = function() {
  return 'post'
}
export const UserAuthController_FileUploadURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/auth/upload'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * username check
 * request: UserAuthController_CheckUsername
 * url: UserAuthController_CheckUsernameURL
 * method: UserAuthController_CheckUsername_TYPE
 * raw_url: UserAuthController_CheckUsername_RAW_URL
 * @param body - true
 */
export const UserAuthController_CheckUsername = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/auth/username'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const UserAuthController_CheckUsername_RAW_URL = function() {
  return '/auth/username'
}
export const UserAuthController_CheckUsername_TYPE = function() {
  return 'post'
}
export const UserAuthController_CheckUsernameURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/auth/username'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get content
 * request: ContentController_Get_All
 * url: ContentController_Get_AllURL
 * method: ContentController_Get_All_TYPE
 * raw_url: ContentController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const ContentController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/contents/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ContentController_Get_All_RAW_URL = function() {
  return '/contents/'
}
export const ContentController_Get_All_TYPE = function() {
  return 'get'
}
export const ContentController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/contents/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create content
 * request: ContentController_Post
 * url: ContentController_PostURL
 * method: ContentController_Post_TYPE
 * raw_url: ContentController_Post_RAW_URL
 * @param body - body for content content
 */
export const ContentController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/contents/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ContentController_Post_RAW_URL = function() {
  return '/contents/'
}
export const ContentController_Post_TYPE = function() {
  return 'post'
}
export const ContentController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/contents/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get content by id
 * request: ContentController_Get_One
 * url: ContentController_Get_OneURL
 * method: ContentController_Get_One_TYPE
 * raw_url: ContentController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const ContentController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/contents/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const ContentController_Get_One_RAW_URL = function() {
  return '/contents/{id}'
}
export const ContentController_Get_One_TYPE = function() {
  return 'get'
}
export const ContentController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/contents/{id}'
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
 * update the content
 * request: ContentController_Put
 * url: ContentController_PutURL
 * method: ContentController_Put_TYPE
 * raw_url: ContentController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for content content
 */
export const ContentController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/contents/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ContentController_Put_RAW_URL = function() {
  return '/contents/{id}'
}
export const ContentController_Put_TYPE = function() {
  return 'put'
}
export const ContentController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/contents/{id}'
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
 * delete the content
 * request: ContentController_Delete
 * url: ContentController_DeleteURL
 * method: ContentController_Delete_TYPE
 * raw_url: ContentController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const ContentController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/contents/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const ContentController_Delete_RAW_URL = function() {
  return '/contents/{id}'
}
export const ContentController_Delete_TYPE = function() {
  return 'delete'
}
export const ContentController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/contents/{id}'
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
 * get DeviceStatus
 * request: DeviceStatusController_Get_All
 * url: DeviceStatusController_Get_AllURL
 * method: DeviceStatusController_Get_All_TYPE
 * raw_url: DeviceStatusController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const DeviceStatusController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceStatuses/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const DeviceStatusController_Get_All_RAW_URL = function() {
  return '/deviceStatuses/'
}
export const DeviceStatusController_Get_All_TYPE = function() {
  return 'get'
}
export const DeviceStatusController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceStatuses/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create DeviceStatus
 * request: DeviceStatusController_Post
 * url: DeviceStatusController_PostURL
 * method: DeviceStatusController_Post_TYPE
 * raw_url: DeviceStatusController_Post_RAW_URL
 * @param body - body for DeviceStatus content
 */
export const DeviceStatusController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceStatuses/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const DeviceStatusController_Post_RAW_URL = function() {
  return '/deviceStatuses/'
}
export const DeviceStatusController_Post_TYPE = function() {
  return 'post'
}
export const DeviceStatusController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceStatuses/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get DeviceStatus by id
 * request: DeviceStatusController_Get_One
 * url: DeviceStatusController_Get_OneURL
 * method: DeviceStatusController_Get_One_TYPE
 * raw_url: DeviceStatusController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const DeviceStatusController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceStatuses/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const DeviceStatusController_Get_One_RAW_URL = function() {
  return '/deviceStatuses/{id}'
}
export const DeviceStatusController_Get_One_TYPE = function() {
  return 'get'
}
export const DeviceStatusController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceStatuses/{id}'
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
 * update the DeviceStatus
 * request: DeviceStatusController_Put
 * url: DeviceStatusController_PutURL
 * method: DeviceStatusController_Put_TYPE
 * raw_url: DeviceStatusController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for DeviceStatus content
 */
export const DeviceStatusController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceStatuses/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const DeviceStatusController_Put_RAW_URL = function() {
  return '/deviceStatuses/{id}'
}
export const DeviceStatusController_Put_TYPE = function() {
  return 'put'
}
export const DeviceStatusController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceStatuses/{id}'
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
 * delete the DeviceStatus
 * request: DeviceStatusController_Delete
 * url: DeviceStatusController_DeleteURL
 * method: DeviceStatusController_Delete_TYPE
 * raw_url: DeviceStatusController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const DeviceStatusController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceStatuses/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const DeviceStatusController_Delete_RAW_URL = function() {
  return '/deviceStatuses/{id}'
}
export const DeviceStatusController_Delete_TYPE = function() {
  return 'delete'
}
export const DeviceStatusController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceStatuses/{id}'
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
 * get DeviceType
 * request: DeviceTypeController_Get_All
 * url: DeviceTypeController_Get_AllURL
 * method: DeviceTypeController_Get_All_TYPE
 * raw_url: DeviceTypeController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const DeviceTypeController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceTypes/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const DeviceTypeController_Get_All_RAW_URL = function() {
  return '/deviceTypes/'
}
export const DeviceTypeController_Get_All_TYPE = function() {
  return 'get'
}
export const DeviceTypeController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceTypes/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create DeviceTypeController
 * request: DeviceTypeController_Post
 * url: DeviceTypeController_PostURL
 * method: DeviceTypeController_Post_TYPE
 * raw_url: DeviceTypeController_Post_RAW_URL
 * @param body - body for devicetype content
 */
export const DeviceTypeController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceTypes/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const DeviceTypeController_Post_RAW_URL = function() {
  return '/deviceTypes/'
}
export const DeviceTypeController_Post_TYPE = function() {
  return 'post'
}
export const DeviceTypeController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceTypes/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get DeviceType by id
 * request: DeviceTypeController_Get_One
 * url: DeviceTypeController_Get_OneURL
 * method: DeviceTypeController_Get_One_TYPE
 * raw_url: DeviceTypeController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const DeviceTypeController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const DeviceTypeController_Get_One_RAW_URL = function() {
  return '/deviceTypes/{id}'
}
export const DeviceTypeController_Get_One_TYPE = function() {
  return 'get'
}
export const DeviceTypeController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceTypes/{id}'
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
 * update the DeviceType
 * request: DeviceTypeController_Put
 * url: DeviceTypeController_PutURL
 * method: DeviceTypeController_Put_TYPE
 * raw_url: DeviceTypeController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for devicetype content
 */
export const DeviceTypeController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const DeviceTypeController_Put_RAW_URL = function() {
  return '/deviceTypes/{id}'
}
export const DeviceTypeController_Put_TYPE = function() {
  return 'put'
}
export const DeviceTypeController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceTypes/{id}'
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
 * delete the DeviceType
 * request: DeviceTypeController_Delete
 * url: DeviceTypeController_DeleteURL
 * method: DeviceTypeController_Delete_TYPE
 * raw_url: DeviceTypeController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const DeviceTypeController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const DeviceTypeController_Delete_RAW_URL = function() {
  return '/deviceTypes/{id}'
}
export const DeviceTypeController_Delete_TYPE = function() {
  return 'delete'
}
export const DeviceTypeController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceTypes/{id}'
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
 * get deviceUseType
 * request: DeviceUseTypeController_Get_All
 * url: DeviceUseTypeController_Get_AllURL
 * method: DeviceUseTypeController_Get_All_TYPE
 * raw_url: DeviceUseTypeController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const DeviceUseTypeController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceUseTypes/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const DeviceUseTypeController_Get_All_RAW_URL = function() {
  return '/deviceUseTypes/'
}
export const DeviceUseTypeController_Get_All_TYPE = function() {
  return 'get'
}
export const DeviceUseTypeController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceUseTypes/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create deviceUseType
 * request: DeviceUseTypeController_Post
 * url: DeviceUseTypeController_PostURL
 * method: DeviceUseTypeController_Post_TYPE
 * raw_url: DeviceUseTypeController_Post_RAW_URL
 * @param body - body for deviceUseType content
 */
export const DeviceUseTypeController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceUseTypes/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const DeviceUseTypeController_Post_RAW_URL = function() {
  return '/deviceUseTypes/'
}
export const DeviceUseTypeController_Post_TYPE = function() {
  return 'post'
}
export const DeviceUseTypeController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceUseTypes/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get deviceUseType by id
 * request: DeviceUseTypeController_Get_One
 * url: DeviceUseTypeController_Get_OneURL
 * method: DeviceUseTypeController_Get_One_TYPE
 * raw_url: DeviceUseTypeController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const DeviceUseTypeController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceUseTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const DeviceUseTypeController_Get_One_RAW_URL = function() {
  return '/deviceUseTypes/{id}'
}
export const DeviceUseTypeController_Get_One_TYPE = function() {
  return 'get'
}
export const DeviceUseTypeController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceUseTypes/{id}'
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
 * update the deviceUseType
 * request: DeviceUseTypeController_Put
 * url: DeviceUseTypeController_PutURL
 * method: DeviceUseTypeController_Put_TYPE
 * raw_url: DeviceUseTypeController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for deviceUseType content
 */
export const DeviceUseTypeController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceUseTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const DeviceUseTypeController_Put_RAW_URL = function() {
  return '/deviceUseTypes/{id}'
}
export const DeviceUseTypeController_Put_TYPE = function() {
  return 'put'
}
export const DeviceUseTypeController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceUseTypes/{id}'
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
 * delete the deviceUseType
 * request: DeviceUseTypeController_Delete
 * url: DeviceUseTypeController_DeleteURL
 * method: DeviceUseTypeController_Delete_TYPE
 * raw_url: DeviceUseTypeController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const DeviceUseTypeController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/deviceUseTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const DeviceUseTypeController_Delete_RAW_URL = function() {
  return '/deviceUseTypes/{id}'
}
export const DeviceUseTypeController_Delete_TYPE = function() {
  return 'delete'
}
export const DeviceUseTypeController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/deviceUseTypes/{id}'
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
 * get Device
 * request: DeviceController_Get_All
 * url: DeviceController_Get_AllURL
 * method: DeviceController_Get_All_TYPE
 * raw_url: DeviceController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const DeviceController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/devices/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const DeviceController_Get_All_RAW_URL = function() {
  return '/devices/'
}
export const DeviceController_Get_All_TYPE = function() {
  return 'get'
}
export const DeviceController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/devices/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create Device
 * request: DeviceController_Post
 * url: DeviceController_PostURL
 * method: DeviceController_Post_TYPE
 * raw_url: DeviceController_Post_RAW_URL
 * @param body - body for Device content
 */
export const DeviceController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/devices/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const DeviceController_Post_RAW_URL = function() {
  return '/devices/'
}
export const DeviceController_Post_TYPE = function() {
  return 'post'
}
export const DeviceController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/devices/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get Device by id
 * request: DeviceController_Get_One
 * url: DeviceController_Get_OneURL
 * method: DeviceController_Get_One_TYPE
 * raw_url: DeviceController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const DeviceController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/devices/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const DeviceController_Get_One_RAW_URL = function() {
  return '/devices/{id}'
}
export const DeviceController_Get_One_TYPE = function() {
  return 'get'
}
export const DeviceController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/devices/{id}'
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
 * update the Device
 * request: DeviceController_Put
 * url: DeviceController_PutURL
 * method: DeviceController_Put_TYPE
 * raw_url: DeviceController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for Device content
 */
export const DeviceController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/devices/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const DeviceController_Put_RAW_URL = function() {
  return '/devices/{id}'
}
export const DeviceController_Put_TYPE = function() {
  return 'put'
}
export const DeviceController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/devices/{id}'
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
 * delete the Device
 * request: DeviceController_Delete
 * url: DeviceController_DeleteURL
 * method: DeviceController_Delete_TYPE
 * raw_url: DeviceController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const DeviceController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/devices/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const DeviceController_Delete_RAW_URL = function() {
  return '/devices/{id}'
}
export const DeviceController_Delete_TYPE = function() {
  return 'delete'
}
export const DeviceController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/devices/{id}'
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
 * get groupStatus
 * request: GroupStatusController_Get_All
 * url: GroupStatusController_Get_AllURL
 * method: GroupStatusController_Get_All_TYPE
 * raw_url: GroupStatusController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const GroupStatusController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupStatuses/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const GroupStatusController_Get_All_RAW_URL = function() {
  return '/groupStatuses/'
}
export const GroupStatusController_Get_All_TYPE = function() {
  return 'get'
}
export const GroupStatusController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupStatuses/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create groupStatus
 * request: GroupStatusController_Post
 * url: GroupStatusController_PostURL
 * method: GroupStatusController_Post_TYPE
 * raw_url: GroupStatusController_Post_RAW_URL
 * @param body - body for groupStatus content
 */
export const GroupStatusController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupStatuses/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupStatusController_Post_RAW_URL = function() {
  return '/groupStatuses/'
}
export const GroupStatusController_Post_TYPE = function() {
  return 'post'
}
export const GroupStatusController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupStatuses/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get groupStatus by id
 * request: GroupStatusController_Get_One
 * url: GroupStatusController_Get_OneURL
 * method: GroupStatusController_Get_One_TYPE
 * raw_url: GroupStatusController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const GroupStatusController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupStatuses/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const GroupStatusController_Get_One_RAW_URL = function() {
  return '/groupStatuses/{id}'
}
export const GroupStatusController_Get_One_TYPE = function() {
  return 'get'
}
export const GroupStatusController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupStatuses/{id}'
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
 * update the groupStatus
 * request: GroupStatusController_Put
 * url: GroupStatusController_PutURL
 * method: GroupStatusController_Put_TYPE
 * raw_url: GroupStatusController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for groupStatus content
 */
export const GroupStatusController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupStatuses/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const GroupStatusController_Put_RAW_URL = function() {
  return '/groupStatuses/{id}'
}
export const GroupStatusController_Put_TYPE = function() {
  return 'put'
}
export const GroupStatusController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupStatuses/{id}'
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
 * delete the groupStatus
 * request: GroupStatusController_Delete
 * url: GroupStatusController_DeleteURL
 * method: GroupStatusController_Delete_TYPE
 * raw_url: GroupStatusController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const GroupStatusController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupStatuses/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const GroupStatusController_Delete_RAW_URL = function() {
  return '/groupStatuses/{id}'
}
export const GroupStatusController_Delete_TYPE = function() {
  return 'delete'
}
export const GroupStatusController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupStatuses/{id}'
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
 * get groupType
 * request: GroupTypeController_Get_All
 * url: GroupTypeController_Get_AllURL
 * method: GroupTypeController_Get_All_TYPE
 * raw_url: GroupTypeController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const GroupTypeController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupTypes/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const GroupTypeController_Get_All_RAW_URL = function() {
  return '/groupTypes/'
}
export const GroupTypeController_Get_All_TYPE = function() {
  return 'get'
}
export const GroupTypeController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupTypes/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create groupType
 * request: GroupTypeController_Post
 * url: GroupTypeController_PostURL
 * method: GroupTypeController_Post_TYPE
 * raw_url: GroupTypeController_Post_RAW_URL
 * @param body - body for groupType content
 */
export const GroupTypeController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupTypes/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupTypeController_Post_RAW_URL = function() {
  return '/groupTypes/'
}
export const GroupTypeController_Post_TYPE = function() {
  return 'post'
}
export const GroupTypeController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupTypes/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get groupType by id
 * request: GroupTypeController_Get_One
 * url: GroupTypeController_Get_OneURL
 * method: GroupTypeController_Get_One_TYPE
 * raw_url: GroupTypeController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const GroupTypeController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const GroupTypeController_Get_One_RAW_URL = function() {
  return '/groupTypes/{id}'
}
export const GroupTypeController_Get_One_TYPE = function() {
  return 'get'
}
export const GroupTypeController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupTypes/{id}'
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
 * update the groupType
 * request: GroupTypeController_Put
 * url: GroupTypeController_PutURL
 * method: GroupTypeController_Put_TYPE
 * raw_url: GroupTypeController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for groupType content
 */
export const GroupTypeController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const GroupTypeController_Put_RAW_URL = function() {
  return '/groupTypes/{id}'
}
export const GroupTypeController_Put_TYPE = function() {
  return 'put'
}
export const GroupTypeController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupTypes/{id}'
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
 * delete the groupType
 * request: GroupTypeController_Delete
 * url: GroupTypeController_DeleteURL
 * method: GroupTypeController_Delete_TYPE
 * raw_url: GroupTypeController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const GroupTypeController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groupTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const GroupTypeController_Delete_RAW_URL = function() {
  return '/groupTypes/{id}'
}
export const GroupTypeController_Delete_TYPE = function() {
  return 'delete'
}
export const GroupTypeController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groupTypes/{id}'
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
 * get group
 * request: GroupController_Get_All
 * url: GroupController_Get_AllURL
 * method: GroupController_Get_All_TYPE
 * raw_url: GroupController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const GroupController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groups/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const GroupController_Get_All_RAW_URL = function() {
  return '/groups/'
}
export const GroupController_Get_All_TYPE = function() {
  return 'get'
}
export const GroupController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groups/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create group
 * request: GroupController_Post
 * url: GroupController_PostURL
 * method: GroupController_Post_TYPE
 * raw_url: GroupController_Post_RAW_URL
 * @param body - body for group content
 */
export const GroupController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groups/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupController_Post_RAW_URL = function() {
  return '/groups/'
}
export const GroupController_Post_TYPE = function() {
  return 'post'
}
export const GroupController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groups/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get group by id
 * request: GroupController_Get_One
 * url: GroupController_Get_OneURL
 * method: GroupController_Get_One_TYPE
 * raw_url: GroupController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const GroupController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groups/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const GroupController_Get_One_RAW_URL = function() {
  return '/groups/{id}'
}
export const GroupController_Get_One_TYPE = function() {
  return 'get'
}
export const GroupController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groups/{id}'
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
 * update the group
 * request: GroupController_Put
 * url: GroupController_PutURL
 * method: GroupController_Put_TYPE
 * raw_url: GroupController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for group content
 */
export const GroupController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groups/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const GroupController_Put_RAW_URL = function() {
  return '/groups/{id}'
}
export const GroupController_Put_TYPE = function() {
  return 'put'
}
export const GroupController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groups/{id}'
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
 * delete the group
 * request: GroupController_Delete
 * url: GroupController_DeleteURL
 * method: GroupController_Delete_TYPE
 * raw_url: GroupController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const GroupController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/groups/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const GroupController_Delete_RAW_URL = function() {
  return '/groups/{id}'
}
export const GroupController_Delete_TYPE = function() {
  return 'delete'
}
export const GroupController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/groups/{id}'
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
 * create Notification
 * request: NotificationController_PostMessage
 * url: NotificationController_PostMessageURL
 * method: NotificationController_PostMessage_TYPE
 * raw_url: NotificationController_PostMessage_RAW_URL
 * @param body - body for Notification content
 */
export const NotificationController_PostMessage = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/notifications/post'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const NotificationController_PostMessage_RAW_URL = function() {
  return '/notifications/post'
}
export const NotificationController_PostMessage_TYPE = function() {
  return 'post'
}
export const NotificationController_PostMessageURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/notifications/post'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get payment
 * request: PaymentController_Get_All
 * url: PaymentController_Get_AllURL
 * method: PaymentController_Get_All_TYPE
 * raw_url: PaymentController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const PaymentController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/payments/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const PaymentController_Get_All_RAW_URL = function() {
  return '/payments/'
}
export const PaymentController_Get_All_TYPE = function() {
  return 'get'
}
export const PaymentController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/payments/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create payment
 * request: PaymentController_Post
 * url: PaymentController_PostURL
 * method: PaymentController_Post_TYPE
 * raw_url: PaymentController_Post_RAW_URL
 * @param body - body for payment content
 */
export const PaymentController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/payments/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const PaymentController_Post_RAW_URL = function() {
  return '/payments/'
}
export const PaymentController_Post_TYPE = function() {
  return 'post'
}
export const PaymentController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/payments/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get payment by id
 * request: PaymentController_Get_One
 * url: PaymentController_Get_OneURL
 * method: PaymentController_Get_One_TYPE
 * raw_url: PaymentController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const PaymentController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/payments/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const PaymentController_Get_One_RAW_URL = function() {
  return '/payments/{id}'
}
export const PaymentController_Get_One_TYPE = function() {
  return 'get'
}
export const PaymentController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/payments/{id}'
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
 * update the payment
 * request: PaymentController_Put
 * url: PaymentController_PutURL
 * method: PaymentController_Put_TYPE
 * raw_url: PaymentController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for payment content
 */
export const PaymentController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/payments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const PaymentController_Put_RAW_URL = function() {
  return '/payments/{id}'
}
export const PaymentController_Put_TYPE = function() {
  return 'put'
}
export const PaymentController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/payments/{id}'
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
 * delete the payment
 * request: PaymentController_Delete
 * url: PaymentController_DeleteURL
 * method: PaymentController_Delete_TYPE
 * raw_url: PaymentController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const PaymentController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/payments/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const PaymentController_Delete_RAW_URL = function() {
  return '/payments/{id}'
}
export const PaymentController_Delete_TYPE = function() {
  return 'delete'
}
export const PaymentController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/payments/{id}'
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
 * get product
 * request: ProductController_Get_All
 * url: ProductController_Get_AllURL
 * method: ProductController_Get_All_TYPE
 * raw_url: ProductController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const ProductController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ProductController_Get_All_RAW_URL = function() {
  return '/products/'
}
export const ProductController_Get_All_TYPE = function() {
  return 'get'
}
export const ProductController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create product
 * request: ProductController_Post
 * url: ProductController_PostURL
 * method: ProductController_Post_TYPE
 * raw_url: ProductController_Post_RAW_URL
 * @param body - body for product content
 */
export const ProductController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ProductController_Post_RAW_URL = function() {
  return '/products/'
}
export const ProductController_Post_TYPE = function() {
  return 'post'
}
export const ProductController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get product by id
 * request: ProductController_Get_One
 * url: ProductController_Get_OneURL
 * method: ProductController_Get_One_TYPE
 * raw_url: ProductController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const ProductController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const ProductController_Get_One_RAW_URL = function() {
  return '/products/{id}'
}
export const ProductController_Get_One_TYPE = function() {
  return 'get'
}
export const ProductController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/{id}'
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
 * update the product
 * request: ProductController_Put
 * url: ProductController_PutURL
 * method: ProductController_Put_TYPE
 * raw_url: ProductController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for product content
 */
export const ProductController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ProductController_Put_RAW_URL = function() {
  return '/products/{id}'
}
export const ProductController_Put_TYPE = function() {
  return 'put'
}
export const ProductController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/{id}'
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
 * delete the product
 * request: ProductController_Delete
 * url: ProductController_DeleteURL
 * method: ProductController_Delete_TYPE
 * raw_url: ProductController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const ProductController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const ProductController_Delete_RAW_URL = function() {
  return '/products/{id}'
}
export const ProductController_Delete_TYPE = function() {
  return 'delete'
}
export const ProductController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/{id}'
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
 * Event product
 * request: ProductController_Event
 * url: ProductController_EventURL
 * method: ProductController_Event_TYPE
 * raw_url: ProductController_Event_RAW_URL
 * @param id - product ID
 * @param body - body for product event
 */
export const ProductController_Event = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/{id}/events'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ProductController_Event_RAW_URL = function() {
  return '/products/{id}/events'
}
export const ProductController_Event_TYPE = function() {
  return 'post'
}
export const ProductController_EventURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/{id}/events'
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
 * get purchase
 * request: PurchaseController_Get_All
 * url: PurchaseController_Get_AllURL
 * method: PurchaseController_Get_All_TYPE
 * raw_url: PurchaseController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const PurchaseController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/purchase/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const PurchaseController_Get_All_RAW_URL = function() {
  return '/purchase/'
}
export const PurchaseController_Get_All_TYPE = function() {
  return 'get'
}
export const PurchaseController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/purchase/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create purchase
 * request: PurchaseController_Post
 * url: PurchaseController_PostURL
 * method: PurchaseController_Post_TYPE
 * raw_url: PurchaseController_Post_RAW_URL
 * @param body - body for purchase content
 */
export const PurchaseController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/purchase/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const PurchaseController_Post_RAW_URL = function() {
  return '/purchase/'
}
export const PurchaseController_Post_TYPE = function() {
  return 'post'
}
export const PurchaseController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/purchase/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get purchase by id
 * request: PurchaseController_Get_One
 * url: PurchaseController_Get_OneURL
 * method: PurchaseController_Get_One_TYPE
 * raw_url: PurchaseController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const PurchaseController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/purchase/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const PurchaseController_Get_One_RAW_URL = function() {
  return '/purchase/{id}'
}
export const PurchaseController_Get_One_TYPE = function() {
  return 'get'
}
export const PurchaseController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/purchase/{id}'
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
 * update the purchase
 * request: PurchaseController_Put
 * url: PurchaseController_PutURL
 * method: PurchaseController_Put_TYPE
 * raw_url: PurchaseController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for purchase content
 */
export const PurchaseController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/purchase/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const PurchaseController_Put_RAW_URL = function() {
  return '/purchase/{id}'
}
export const PurchaseController_Put_TYPE = function() {
  return 'put'
}
export const PurchaseController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/purchase/{id}'
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
 * delete the purchase
 * request: PurchaseController_Delete
 * url: PurchaseController_DeleteURL
 * method: PurchaseController_Delete_TYPE
 * raw_url: PurchaseController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const PurchaseController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/purchase/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const PurchaseController_Delete_RAW_URL = function() {
  return '/purchase/{id}'
}
export const PurchaseController_Delete_TYPE = function() {
  return 'delete'
}
export const PurchaseController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/purchase/{id}'
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
 * 
 * request: SaleboardController_Get_All
 * url: SaleboardController_Get_AllURL
 * method: SaleboardController_Get_All_TYPE
 * raw_url: SaleboardController_Get_All_RAW_URL
 */
export const SaleboardController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/saleboards/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const SaleboardController_Get_All_RAW_URL = function() {
  return '/saleboards/'
}
export const SaleboardController_Get_All_TYPE = function() {
  return 'get'
}
export const SaleboardController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/saleboards/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * create saleboard
 * request: SaleboardController_Post
 * url: SaleboardController_PostURL
 * method: SaleboardController_Post_TYPE
 * raw_url: SaleboardController_Post_RAW_URL
 * @param body - body for saleboard content
 */
export const SaleboardController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/saleboards/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const SaleboardController_Post_RAW_URL = function() {
  return '/saleboards/'
}
export const SaleboardController_Post_TYPE = function() {
  return 'post'
}
export const SaleboardController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/saleboards/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get subscript
 * request: SubscriptController_Get_All
 * url: SubscriptController_Get_AllURL
 * method: SubscriptController_Get_All_TYPE
 * raw_url: SubscriptController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const SubscriptController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/subscripts/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const SubscriptController_Get_All_RAW_URL = function() {
  return '/subscripts/'
}
export const SubscriptController_Get_All_TYPE = function() {
  return 'get'
}
export const SubscriptController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/subscripts/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create subscript
 * request: SubscriptController_Post
 * url: SubscriptController_PostURL
 * method: SubscriptController_Post_TYPE
 * raw_url: SubscriptController_Post_RAW_URL
 * @param body - body for subscript content
 */
export const SubscriptController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/subscripts/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const SubscriptController_Post_RAW_URL = function() {
  return '/subscripts/'
}
export const SubscriptController_Post_TYPE = function() {
  return 'post'
}
export const SubscriptController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/subscripts/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get subscript by id
 * request: SubscriptController_Get_One
 * url: SubscriptController_Get_OneURL
 * method: SubscriptController_Get_One_TYPE
 * raw_url: SubscriptController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const SubscriptController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/subscripts/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const SubscriptController_Get_One_RAW_URL = function() {
  return '/subscripts/{id}'
}
export const SubscriptController_Get_One_TYPE = function() {
  return 'get'
}
export const SubscriptController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/subscripts/{id}'
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
 * update the subscript
 * request: SubscriptController_Put
 * url: SubscriptController_PutURL
 * method: SubscriptController_Put_TYPE
 * raw_url: SubscriptController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for subscript content
 */
export const SubscriptController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/subscripts/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const SubscriptController_Put_RAW_URL = function() {
  return '/subscripts/{id}'
}
export const SubscriptController_Put_TYPE = function() {
  return 'put'
}
export const SubscriptController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/subscripts/{id}'
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
 * delete the subscript
 * request: SubscriptController_Delete
 * url: SubscriptController_DeleteURL
 * method: SubscriptController_Delete_TYPE
 * raw_url: SubscriptController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const SubscriptController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/subscripts/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const SubscriptController_Delete_RAW_URL = function() {
  return '/subscripts/{id}'
}
export const SubscriptController_Delete_TYPE = function() {
  return 'delete'
}
export const SubscriptController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/subscripts/{id}'
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
 * get Makezip by id
 * request: SystemController_Get_One
 * url: SystemController_Get_OneURL
 * method: SystemController_Get_One_TYPE
 * raw_url: SystemController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const SystemController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/system/'
  let body
  let queryParameters = {}
  let form = {}
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
export const SystemController_Get_One_RAW_URL = function() {
  return '/system/'
}
export const SystemController_Get_One_TYPE = function() {
  return 'get'
}
export const SystemController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/system/'
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
 * get userStatus
 * request: UserStatusController_Get_All
 * url: UserStatusController_Get_AllURL
 * method: UserStatusController_Get_All_TYPE
 * raw_url: UserStatusController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const UserStatusController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userStatuses/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const UserStatusController_Get_All_RAW_URL = function() {
  return '/userStatuses/'
}
export const UserStatusController_Get_All_TYPE = function() {
  return 'get'
}
export const UserStatusController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userStatuses/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create userStatus
 * request: UserStatusController_Post
 * url: UserStatusController_PostURL
 * method: UserStatusController_Post_TYPE
 * raw_url: UserStatusController_Post_RAW_URL
 * @param body - body for userStatus content
 */
export const UserStatusController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userStatuses/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const UserStatusController_Post_RAW_URL = function() {
  return '/userStatuses/'
}
export const UserStatusController_Post_TYPE = function() {
  return 'post'
}
export const UserStatusController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userStatuses/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get userStatus by id
 * request: UserStatusController_Get_One
 * url: UserStatusController_Get_OneURL
 * method: UserStatusController_Get_One_TYPE
 * raw_url: UserStatusController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const UserStatusController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userStatuses/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const UserStatusController_Get_One_RAW_URL = function() {
  return '/userStatuses/{id}'
}
export const UserStatusController_Get_One_TYPE = function() {
  return 'get'
}
export const UserStatusController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userStatuses/{id}'
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
 * update the userStatus
 * request: UserStatusController_Put
 * url: UserStatusController_PutURL
 * method: UserStatusController_Put_TYPE
 * raw_url: UserStatusController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for userStatus content
 */
export const UserStatusController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userStatuses/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const UserStatusController_Put_RAW_URL = function() {
  return '/userStatuses/{id}'
}
export const UserStatusController_Put_TYPE = function() {
  return 'put'
}
export const UserStatusController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userStatuses/{id}'
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
 * delete the userStatus
 * request: UserStatusController_Delete
 * url: UserStatusController_DeleteURL
 * method: UserStatusController_Delete_TYPE
 * raw_url: UserStatusController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const UserStatusController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userStatuses/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const UserStatusController_Delete_RAW_URL = function() {
  return '/userStatuses/{id}'
}
export const UserStatusController_Delete_TYPE = function() {
  return 'delete'
}
export const UserStatusController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userStatuses/{id}'
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
 * get userType
 * request: UserTypeController_Get_All
 * url: UserTypeController_Get_AllURL
 * method: UserTypeController_Get_All_TYPE
 * raw_url: UserTypeController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const UserTypeController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userTypes/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const UserTypeController_Get_All_RAW_URL = function() {
  return '/userTypes/'
}
export const UserTypeController_Get_All_TYPE = function() {
  return 'get'
}
export const UserTypeController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userTypes/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create userType
 * request: UserTypeController_Post
 * url: UserTypeController_PostURL
 * method: UserTypeController_Post_TYPE
 * raw_url: UserTypeController_Post_RAW_URL
 * @param body - body for userType content
 */
export const UserTypeController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userTypes/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const UserTypeController_Post_RAW_URL = function() {
  return '/userTypes/'
}
export const UserTypeController_Post_TYPE = function() {
  return 'post'
}
export const UserTypeController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userTypes/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get userType by id
 * request: UserTypeController_Get_One
 * url: UserTypeController_Get_OneURL
 * method: UserTypeController_Get_One_TYPE
 * raw_url: UserTypeController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const UserTypeController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const UserTypeController_Get_One_RAW_URL = function() {
  return '/userTypes/{id}'
}
export const UserTypeController_Get_One_TYPE = function() {
  return 'get'
}
export const UserTypeController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userTypes/{id}'
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
 * update the userType
 * request: UserTypeController_Put
 * url: UserTypeController_PutURL
 * method: UserTypeController_Put_TYPE
 * raw_url: UserTypeController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for userType content
 */
export const UserTypeController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const UserTypeController_Put_RAW_URL = function() {
  return '/userTypes/{id}'
}
export const UserTypeController_Put_TYPE = function() {
  return 'put'
}
export const UserTypeController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userTypes/{id}'
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
 * delete the userType
 * request: UserTypeController_Delete
 * url: UserTypeController_DeleteURL
 * method: UserTypeController_Delete_TYPE
 * raw_url: UserTypeController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const UserTypeController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/userTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const UserTypeController_Delete_RAW_URL = function() {
  return '/userTypes/{id}'
}
export const UserTypeController_Delete_TYPE = function() {
  return 'delete'
}
export const UserTypeController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/userTypes/{id}'
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
 * get User
 * request: UserController_Get_All
 * url: UserController_Get_AllURL
 * method: UserController_Get_All_TYPE
 * raw_url: UserController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const UserController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/users/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const UserController_Get_All_RAW_URL = function() {
  return '/users/'
}
export const UserController_Get_All_TYPE = function() {
  return 'get'
}
export const UserController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/'
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['fields'] !== undefined) {
    queryParameters['fields'] = parameters['fields']
  }
  if (parameters['sortby'] !== undefined) {
    queryParameters['sortby'] = parameters['sortby']
  }
  if (parameters['order'] !== undefined) {
    queryParameters['order'] = parameters['order']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
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
 * create User
 * request: UserController_Post
 * url: UserController_PostURL
 * method: UserController_Post_TYPE
 * raw_url: UserController_Post_RAW_URL
 * @param body - body for User content
 */
export const UserController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/users/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const UserController_Post_RAW_URL = function() {
  return '/users/'
}
export const UserController_Post_TYPE = function() {
  return 'post'
}
export const UserController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 나의 사용자 정보
 * request: UserController_Me
 * url: UserController_MeURL
 * method: UserController_Me_TYPE
 * raw_url: UserController_Me_RAW_URL
 */
export const UserController_Me = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/users/me'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const UserController_Me_RAW_URL = function() {
  return '/users/me'
}
export const UserController_Me_TYPE = function() {
  return 'get'
}
export const UserController_MeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/me'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get User by id
 * request: UserController_Get_One
 * url: UserController_Get_OneURL
 * method: UserController_Get_One_TYPE
 * raw_url: UserController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const UserController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const UserController_Get_One_RAW_URL = function() {
  return '/users/{id}'
}
export const UserController_Get_One_TYPE = function() {
  return 'get'
}
export const UserController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/{id}'
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
 * update the User
 * request: UserController_Put
 * url: UserController_PutURL
 * method: UserController_Put_TYPE
 * raw_url: UserController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for User content
 */
export const UserController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const UserController_Put_RAW_URL = function() {
  return '/users/{id}'
}
export const UserController_Put_TYPE = function() {
  return 'put'
}
export const UserController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/{id}'
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
 * delete the User
 * request: UserController_Delete
 * url: UserController_DeleteURL
 * method: UserController_Delete_TYPE
 * raw_url: UserController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const UserController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
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
export const UserController_Delete_RAW_URL = function() {
  return '/users/{id}'
}
export const UserController_Delete_TYPE = function() {
  return 'delete'
}
export const UserController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}