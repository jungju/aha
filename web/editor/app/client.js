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
 *                    집뷰CRM API
 ==========================================================*/
/**
 * get Frame
 * request: FrameController_Get_All
 * url: FrameController_Get_AllURL
 * method: FrameController_Get_All_TYPE
 * raw_url: FrameController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const FrameController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/frames/'
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
export const FrameController_Get_All_RAW_URL = function() {
  return '/frames/'
}
export const FrameController_Get_All_TYPE = function() {
  return 'get'
}
export const FrameController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/frames/'
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
 * create Frame
 * request: FrameController_Post
 * url: FrameController_PostURL
 * method: FrameController_Post_TYPE
 * raw_url: FrameController_Post_RAW_URL
 * @param body - body for Frame content
 */
export const FrameController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/frames/'
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
export const FrameController_Post_RAW_URL = function() {
  return '/frames/'
}
export const FrameController_Post_TYPE = function() {
  return 'post'
}
export const FrameController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/frames/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get Frame by id
 * request: FrameController_Get_One
 * url: FrameController_Get_OneURL
 * method: FrameController_Get_One_TYPE
 * raw_url: FrameController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const FrameController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/frames/{id}'
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
export const FrameController_Get_One_RAW_URL = function() {
  return '/frames/{id}'
}
export const FrameController_Get_One_TYPE = function() {
  return 'get'
}
export const FrameController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/frames/{id}'
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
 * update the Frame
 * request: FrameController_Put
 * url: FrameController_PutURL
 * method: FrameController_Put_TYPE
 * raw_url: FrameController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for Frame content
 */
export const FrameController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/frames/{id}'
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
export const FrameController_Put_RAW_URL = function() {
  return '/frames/{id}'
}
export const FrameController_Put_TYPE = function() {
  return 'put'
}
export const FrameController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/frames/{id}'
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
 * delete the Frame
 * request: FrameController_Delete
 * url: FrameController_DeleteURL
 * method: FrameController_Delete_TYPE
 * raw_url: FrameController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const FrameController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/frames/{id}'
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
export const FrameController_Delete_RAW_URL = function() {
  return '/frames/{id}'
}
export const FrameController_Delete_TYPE = function() {
  return 'delete'
}
export const FrameController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/frames/{id}'
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
 * get Scene
 * request: SceneController_Get_All
 * url: SceneController_Get_AllURL
 * method: SceneController_Get_All_TYPE
 * raw_url: SceneController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const SceneController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/scenes/'
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
export const SceneController_Get_All_RAW_URL = function() {
  return '/scenes/'
}
export const SceneController_Get_All_TYPE = function() {
  return 'get'
}
export const SceneController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/scenes/'
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
 * create Scene
 * request: SceneController_Post
 * url: SceneController_PostURL
 * method: SceneController_Post_TYPE
 * raw_url: SceneController_Post_RAW_URL
 * @param body - body for Scene content
 */
export const SceneController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/scenes/'
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
export const SceneController_Post_RAW_URL = function() {
  return '/scenes/'
}
export const SceneController_Post_TYPE = function() {
  return 'post'
}
export const SceneController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/scenes/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get Scene by id
 * request: SceneController_Get_One
 * url: SceneController_Get_OneURL
 * method: SceneController_Get_One_TYPE
 * raw_url: SceneController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const SceneController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/scenes/{id}'
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
export const SceneController_Get_One_RAW_URL = function() {
  return '/scenes/{id}'
}
export const SceneController_Get_One_TYPE = function() {
  return 'get'
}
export const SceneController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/scenes/{id}'
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
 * update the Scene
 * request: SceneController_Put
 * url: SceneController_PutURL
 * method: SceneController_Put_TYPE
 * raw_url: SceneController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for Scene content
 */
export const SceneController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/scenes/{id}'
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
export const SceneController_Put_RAW_URL = function() {
  return '/scenes/{id}'
}
export const SceneController_Put_TYPE = function() {
  return 'put'
}
export const SceneController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/scenes/{id}'
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
 * delete the Scene
 * request: SceneController_Delete
 * url: SceneController_DeleteURL
 * method: SceneController_Delete_TYPE
 * raw_url: SceneController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const SceneController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/scenes/{id}'
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
export const SceneController_Delete_RAW_URL = function() {
  return '/scenes/{id}'
}
export const SceneController_Delete_TYPE = function() {
  return 'delete'
}
export const SceneController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/scenes/{id}'
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
 * get SpriteStyle
 * request: SpriteStyleController_Get_All
 * url: SpriteStyleController_Get_AllURL
 * method: SpriteStyleController_Get_All_TYPE
 * raw_url: SpriteStyleController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const SpriteStyleController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/spriteStyles/'
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
export const SpriteStyleController_Get_All_RAW_URL = function() {
  return '/spriteStyles/'
}
export const SpriteStyleController_Get_All_TYPE = function() {
  return 'get'
}
export const SpriteStyleController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/spriteStyles/'
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
 * create SpriteStyle
 * request: SpriteStyleController_Post
 * url: SpriteStyleController_PostURL
 * method: SpriteStyleController_Post_TYPE
 * raw_url: SpriteStyleController_Post_RAW_URL
 * @param body - body for SpriteStyle content
 */
export const SpriteStyleController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/spriteStyles/'
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
export const SpriteStyleController_Post_RAW_URL = function() {
  return '/spriteStyles/'
}
export const SpriteStyleController_Post_TYPE = function() {
  return 'post'
}
export const SpriteStyleController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/spriteStyles/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get SpriteStyle by id
 * request: SpriteStyleController_Get_One
 * url: SpriteStyleController_Get_OneURL
 * method: SpriteStyleController_Get_One_TYPE
 * raw_url: SpriteStyleController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const SpriteStyleController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/spriteStyles/{id}'
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
export const SpriteStyleController_Get_One_RAW_URL = function() {
  return '/spriteStyles/{id}'
}
export const SpriteStyleController_Get_One_TYPE = function() {
  return 'get'
}
export const SpriteStyleController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/spriteStyles/{id}'
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
 * update the SpriteStyle
 * request: SpriteStyleController_Put
 * url: SpriteStyleController_PutURL
 * method: SpriteStyleController_Put_TYPE
 * raw_url: SpriteStyleController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for SpriteStyle content
 */
export const SpriteStyleController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/spriteStyles/{id}'
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
export const SpriteStyleController_Put_RAW_URL = function() {
  return '/spriteStyles/{id}'
}
export const SpriteStyleController_Put_TYPE = function() {
  return 'put'
}
export const SpriteStyleController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/spriteStyles/{id}'
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
 * delete the SpriteStyle
 * request: SpriteStyleController_Delete
 * url: SpriteStyleController_DeleteURL
 * method: SpriteStyleController_Delete_TYPE
 * raw_url: SpriteStyleController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const SpriteStyleController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/spriteStyles/{id}'
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
export const SpriteStyleController_Delete_RAW_URL = function() {
  return '/spriteStyles/{id}'
}
export const SpriteStyleController_Delete_TYPE = function() {
  return 'delete'
}
export const SpriteStyleController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/spriteStyles/{id}'
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
 * get Sprite
 * request: SpriteController_Get_All
 * url: SpriteController_Get_AllURL
 * method: SpriteController_Get_All_TYPE
 * raw_url: SpriteController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const SpriteController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sprites/'
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
export const SpriteController_Get_All_RAW_URL = function() {
  return '/sprites/'
}
export const SpriteController_Get_All_TYPE = function() {
  return 'get'
}
export const SpriteController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sprites/'
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
 * create Sprite
 * request: SpriteController_Post
 * url: SpriteController_PostURL
 * method: SpriteController_Post_TYPE
 * raw_url: SpriteController_Post_RAW_URL
 * @param body - body for Sprite content
 */
export const SpriteController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sprites/'
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
export const SpriteController_Post_RAW_URL = function() {
  return '/sprites/'
}
export const SpriteController_Post_TYPE = function() {
  return 'post'
}
export const SpriteController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sprites/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get Sprite by id
 * request: SpriteController_Get_One
 * url: SpriteController_Get_OneURL
 * method: SpriteController_Get_One_TYPE
 * raw_url: SpriteController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const SpriteController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sprites/{id}'
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
export const SpriteController_Get_One_RAW_URL = function() {
  return '/sprites/{id}'
}
export const SpriteController_Get_One_TYPE = function() {
  return 'get'
}
export const SpriteController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sprites/{id}'
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
 * update the Sprite
 * request: SpriteController_Put
 * url: SpriteController_PutURL
 * method: SpriteController_Put_TYPE
 * raw_url: SpriteController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for Sprite content
 */
export const SpriteController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sprites/{id}'
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
export const SpriteController_Put_RAW_URL = function() {
  return '/sprites/{id}'
}
export const SpriteController_Put_TYPE = function() {
  return 'put'
}
export const SpriteController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sprites/{id}'
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
 * delete the Sprite
 * request: SpriteController_Delete
 * url: SpriteController_DeleteURL
 * method: SpriteController_Delete_TYPE
 * raw_url: SpriteController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const SpriteController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sprites/{id}'
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
export const SpriteController_Delete_RAW_URL = function() {
  return '/sprites/{id}'
}
export const SpriteController_Delete_TYPE = function() {
  return 'delete'
}
export const SpriteController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sprites/{id}'
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
 * get Story
 * request: StoryController_Get_All
 * url: StoryController_Get_AllURL
 * method: StoryController_Get_All_TYPE
 * raw_url: StoryController_Get_All_RAW_URL
 * @param query - Filter. e.g. col1:v1,col2:v2 ...
 * @param fields - Fields returned. e.g. col1,col2 ...
 * @param sortby - Sorted-by fields. e.g. col1,col2 ...
 * @param order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
 * @param limit - Limit the size of result set. Must be an integer
 * @param offset - Start position of result set. Must be an integer
 */
export const StoryController_Get_All = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/stories/'
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
export const StoryController_Get_All_RAW_URL = function() {
  return '/stories/'
}
export const StoryController_Get_All_TYPE = function() {
  return 'get'
}
export const StoryController_Get_AllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/stories/'
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
 * create Story
 * request: StoryController_Post
 * url: StoryController_PostURL
 * method: StoryController_Post_TYPE
 * raw_url: StoryController_Post_RAW_URL
 * @param body - body for Story content
 */
export const StoryController_Post = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/stories/'
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
export const StoryController_Post_RAW_URL = function() {
  return '/stories/'
}
export const StoryController_Post_TYPE = function() {
  return 'post'
}
export const StoryController_PostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/stories/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * get Story by id
 * request: StoryController_Get_One
 * url: StoryController_Get_OneURL
 * method: StoryController_Get_One_TYPE
 * raw_url: StoryController_Get_One_RAW_URL
 * @param id - The key for staticblock
 */
export const StoryController_Get_One = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/stories/{id}'
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
export const StoryController_Get_One_RAW_URL = function() {
  return '/stories/{id}'
}
export const StoryController_Get_One_TYPE = function() {
  return 'get'
}
export const StoryController_Get_OneURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/stories/{id}'
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
 * update the Story
 * request: StoryController_Put
 * url: StoryController_PutURL
 * method: StoryController_Put_TYPE
 * raw_url: StoryController_Put_RAW_URL
 * @param id - The id you want to update
 * @param body - body for Story content
 */
export const StoryController_Put = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/stories/{id}'
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
export const StoryController_Put_RAW_URL = function() {
  return '/stories/{id}'
}
export const StoryController_Put_TYPE = function() {
  return 'put'
}
export const StoryController_PutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/stories/{id}'
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
 * delete the Story
 * request: StoryController_Delete
 * url: StoryController_DeleteURL
 * method: StoryController_Delete_TYPE
 * raw_url: StoryController_Delete_RAW_URL
 * @param id - The id you want to delete
 */
export const StoryController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/stories/{id}'
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
export const StoryController_Delete_RAW_URL = function() {
  return '/stories/{id}'
}
export const StoryController_Delete_TYPE = function() {
  return 'delete'
}
export const StoryController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/stories/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}