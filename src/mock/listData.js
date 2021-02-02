let data=[]
let total=500
for(var i=1;i<=total;i++){
data.push({
    label:'第 '+i+' 行',
    value:i
})
}
 function getParameter(url)
 {
     let obj={}
     for (let i of url.split('?')[1].split('&')) {
      obj[i.split("=")[0]] = i.split("=")[1];  //对数组每项用=分解开，=前为对象属性名，=后为属性值
    }
    return obj
 }

module.exports = [
  // user login
  {
    url: new RegExp('/api/getData') ,
    type: 'get',
    response: _ => {
    let {page,limit}=getParameter(_.url)
    // // 获取分页数据   limit,page,total
    // let total=500
    console.log(page)
    return {
      code: 0,
      data:  data.slice((page-1)*limit,page*limit),
      total
    }
    
  }
}
  // {
  //   url: '/api/user/is_login',
  //   type: 'post',
  //   response: config => {
  //     let token=localStorage.getItem('accessToken')
  //     if (token) {
  //       return {
  //         code: 0,
  //         message: '已登录！',
  //         data: JSON.parse(token)
  //       }
  //     } else {
  //       return {
  //         code: 1,
  //         message: '登录失效！',
  //       }
  //     }
  //   }
  // },
]
