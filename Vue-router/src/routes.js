import Home from './components/Home'
import User from './components/user/User'
// import UserStart from './components/user/UserStart'
// import UserEdit  from './components/user/UserEdit'
// import UserDetail from './components/user/UserDetail'
import Header from './components/Header'


//懒加载

const UserStart= (resolve)=>{
  require.ensure(['./components/user/UserStart'],()=>{
    resolve(require('./components/user/UserStart'))
  },'user')
}

const UserEdit= (resolve)=>{
  require.ensure(['./components/user/UserEdit'],()=>{
    resolve(require('./components/user/UserEdit'))
  },'user')
}

const UserDetail= (resolve)=>{
  require.ensure(['./components/user/UserDetail'],()=>{
    resolve(require('./components/user/UserDetail'))
  },'user')
}

export const routes=[
  {
    //path:"",component:Home,name:'home'
    path:"",components:{'top-header':Header,default:Home,'bottom-header':Header},name:'home'
  },
  {
    path:"/user",component:User,children:[
      {path:"",component:UserStart},
      {path:":id",component:UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('inside check')
          next()
        }
        },
      {path:":id/edit",component:UserEdit,name:"userEdit"}
    ]
  },
  {
    path:"/readMe",redirect:'/user'
  },
  {
    path:"*",redirect:{name:"home"}
  }
];



