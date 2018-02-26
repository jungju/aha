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
 *                    집뷰 데몬입니다.
 ==========================================================*/
/**
 * ...
 * request: ProductController_GetAllApp
 * url: ProductController_GetAllAppURL
 * method: ProductController_GetAllApp_TYPE
 * raw_url: ProductController_GetAllApp_RAW_URL
 */
export const ProductController_GetAllApp = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/'
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
export const ProductController_GetAllApp_RAW_URL = function() {
  return '/products/'
}
export const ProductController_GetAllApp_TYPE = function() {
  return 'get'
}
export const ProductController_GetAllAppURL = function(parameters = {}) {
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
 * ...
 * request: ProductController_Create
 * url: ProductController_CreateURL
 * method: ProductController_Create_TYPE
 * raw_url: ProductController_Create_RAW_URL
 */
export const ProductController_Create = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/create'
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
export const ProductController_Create_RAW_URL = function() {
  return '/products/create'
}
export const ProductController_Create_TYPE = function() {
  return 'get'
}
export const ProductController_CreateURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/create'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * ...
 * request: ProductController_DeleteAll
 * url: ProductController_DeleteAllURL
 * method: ProductController_DeleteAll_TYPE
 * raw_url: ProductController_DeleteAll_RAW_URL
 * @param id - product id
 */
export const ProductController_DeleteAll = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/deleteAll'
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
export const ProductController_DeleteAll_RAW_URL = function() {
  return '/products/deleteAll'
}
export const ProductController_DeleteAll_TYPE = function() {
  return 'get'
}
export const ProductController_DeleteAllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/deleteAll'
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
 * ...
 * request: ProductController_CancelDownload
 * url: ProductController_CancelDownloadURL
 * method: ProductController_CancelDownload_TYPE
 * raw_url: ProductController_CancelDownload_RAW_URL
 */
export const ProductController_CancelDownload = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/download/cancel'
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
export const ProductController_CancelDownload_RAW_URL = function() {
  return '/products/download/cancel'
}
export const ProductController_CancelDownload_TYPE = function() {
  return 'get'
}
export const ProductController_CancelDownloadURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/download/cancel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * ...
 * request: ProductController_GetApp
 * url: ProductController_GetAppURL
 * method: ProductController_GetApp_TYPE
 * raw_url: ProductController_GetApp_RAW_URL
 * @param id - product id
 */
export const ProductController_GetApp = function(parameters = {}) {
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
export const ProductController_GetApp_RAW_URL = function() {
  return '/products/{id}'
}
export const ProductController_GetApp_TYPE = function() {
  return 'get'
}
export const ProductController_GetAppURL = function(parameters = {}) {
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
 * ...
 * request: ProductController_Delete
 * url: ProductController_DeleteURL
 * method: ProductController_Delete_TYPE
 * raw_url: ProductController_Delete_RAW_URL
 * @param id - product id
 */
export const ProductController_Delete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/{id}/delete'
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
export const ProductController_Delete_RAW_URL = function() {
  return '/products/{id}/delete'
}
export const ProductController_Delete_TYPE = function() {
  return 'get'
}
export const ProductController_DeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/{id}/delete'
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
 * ...
 * request: ProductController_ExitApp
 * url: ProductController_ExitAppURL
 * method: ProductController_ExitApp_TYPE
 * raw_url: ProductController_ExitApp_RAW_URL
 * @param id - product id
 */
export const ProductController_ExitApp = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/{id}/exit'
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
export const ProductController_ExitApp_RAW_URL = function() {
  return '/products/{id}/exit'
}
export const ProductController_ExitApp_TYPE = function() {
  return 'get'
}
export const ProductController_ExitAppURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/{id}/exit'
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
 * ...
 * request: ProductController_RunApp
 * url: ProductController_RunAppURL
 * method: ProductController_RunApp_TYPE
 * raw_url: ProductController_RunApp_RAW_URL
 * @param id - product id
 */
export const ProductController_RunApp = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/products/{id}/run'
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
export const ProductController_RunApp_RAW_URL = function() {
  return '/products/{id}/run'
}
export const ProductController_RunApp_TYPE = function() {
  return 'get'
}
export const ProductController_RunAppURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/products/{id}/run'
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
 * 현재 로컬에 있는 집뷰 콘텐츠를 본다.
 * request: SystemController_Exit
 * url: SystemController_ExitURL
 * method: SystemController_Exit_TYPE
 * raw_url: SystemController_Exit_RAW_URL
 */
export const SystemController_Exit = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/system/exit'
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
export const SystemController_Exit_RAW_URL = function() {
  return '/system/exit'
}
export const SystemController_Exit_TYPE = function() {
  return 'get'
}
export const SystemController_ExitURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/system/exit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 현재 로컬에 있는 집뷰 콘텐츠를 본다.
 * request: SystemController_Healthcheck
 * url: SystemController_HealthcheckURL
 * method: SystemController_Healthcheck_TYPE
 * raw_url: SystemController_Healthcheck_RAW_URL
 */
export const SystemController_Healthcheck = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/system/healthcheck'
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
export const SystemController_Healthcheck_RAW_URL = function() {
  return '/system/healthcheck'
}
export const SystemController_Healthcheck_TYPE = function() {
  return 'get'
}
export const SystemController_HealthcheckURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/system/healthcheck'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 현재 로컬에 있는 집뷰 콘텐츠를 본다.
 * request: SystemController_GetInfo
 * url: SystemController_GetInfoURL
 * method: SystemController_GetInfo_TYPE
 * raw_url: SystemController_GetInfo_RAW_URL
 */
export const SystemController_GetInfo = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/system/info'
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
export const SystemController_GetInfo_RAW_URL = function() {
  return '/system/info'
}
export const SystemController_GetInfo_TYPE = function() {
  return 'get'
}
export const SystemController_GetInfoURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/system/info'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 집뷰온 초기화
 * request: SystemController_InitZipviewOn
 * url: SystemController_InitZipviewOnURL
 * method: SystemController_InitZipviewOn_TYPE
 * raw_url: SystemController_InitZipviewOn_RAW_URL
 */
export const SystemController_InitZipviewOn = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/system/init'
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
export const SystemController_InitZipviewOn_RAW_URL = function() {
  return '/system/init'
}
export const SystemController_InitZipviewOn_TYPE = function() {
  return 'get'
}
export const SystemController_InitZipviewOnURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/system/init'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 현재 로컬에 있는 집뷰 콘텐츠를 본다.
 * request: SystemController_Upgrade
 * url: SystemController_UpgradeURL
 * method: SystemController_Upgrade_TYPE
 * raw_url: SystemController_Upgrade_RAW_URL
 */
export const SystemController_Upgrade = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/system/upgrade'
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
export const SystemController_Upgrade_RAW_URL = function() {
  return '/system/upgrade'
}
export const SystemController_Upgrade_TYPE = function() {
  return 'get'
}
export const SystemController_UpgradeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/system/upgrade'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}