/* 
包含n个action对象的type名称常量
看有几个更新状态数据的操作 
  ==> 就有几个type 
  ==> 就有几个case 
  ==> 就有几个同步action
*/

export const REQUESTING = 'requesting'  // 请求中
export const REQ_SUCCESS  = 'req_success' // 请求成功
export const REQ_ERROR = 'req_error' // 请求失败
