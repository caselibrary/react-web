import Request from "@/utils/request"

// export function iSLogin(params) {
//   return request({
//     url: '/vue-admin-template/table/list',
//     method: 'get',
//     params
//   })
// }

// export function iSLogin() {
//   return Request({
//     url: '/api/user/is_login',
//     method: 'post'
//   })
// }


export function getData(params) {
  return Request({
    url: '/api/getData',
    method: 'get',
    params
  })
}
