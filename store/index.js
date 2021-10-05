const cookieparser = process.server ? require('cookieparser') : undefined
// 在服务端渲染期间运行都是同一个实例
//为了防止数据冲突，务必要把state定义成一个函数，返回一个函数对象
export const state = ()=>{ 
    return{ 
        //当前登录用户登录状态
        user:null
    }
}

export const mutations = { 
    setUser(state,data){
        state.user = data
    }
}

export const actions = { 
    //nuxtServerInit是一个特殊得action方法
    //这个action会在服务端渲染期间自动调用
    //作用：初始化容器数据，传递数据给客户端使用
    nuxtServerInit ({ commit }, { req }) {
        let user = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            user = JSON.parse(parsed.user)
          } catch (err) {
            //   console.log(err,'err')
            // No valid cookie found
          }
        }
        commit('setUser', user)
      }
}