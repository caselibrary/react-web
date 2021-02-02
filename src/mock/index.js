//引入mockjs
import Mock from 'mockjs'
import defaultMock from './listData'
let mockArray=[
  ...defaultMock
]
mockArray.forEach(request=>{
  Mock.mock(request.url,request.type || 'get',request.response);
})
