<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
  
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{isLogin?'Sign in':'Sign up'}}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="isLogin" to="/register">Have an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>
  
          <ul class="error-messages">
            <template v-for="(message,field) in errors">
                   <li v-for="(items,index) in message" :key="index">{{field}}{{items}}</li>
            </template>
          </ul>
  
          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" required>
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email" required>
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" required>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{isLogin?'Sign in':'Sign up'}}
            </button>
          </form>
        </div>
  
      </div>
    </div>
  </div>
</template>

<script>
import {login,register} from '@/api/user'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware:'notAuthenticated', 
   name:"LoginIndex",
   computed:{ 
       isLogin(){
           return this.$route.name === 'login'
       }
   },
   data(){
     return{ 
       user:{ 
         username:'',
         email:'',
         password:''
       },
       errors:{

       }
     }
   },
   methods:{ 
     async onSubmit(){ 
       try{
         const {data} = this.isLogin ?  await login({
           user:this.user
         }): await register({
           user:this.user
         })
         //保存登录状态
         this.$store.commit('setUser',data.user)
         //为了防止刷新页面数据丢失，我们需要把数据持久化
         Cookie.set('user',JSON.stringify(data.user))
          this.$router.push('/')
       }catch(err){
        //  console.dir(err)
         this.errors = err.response.data.errors
         console.log(this.errors)
       }
     }
   }
}
</script>

<style>

</style>