<template>
   <div class="editor-page">
    <div class="container page">
      <div class="row">
  
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                  <input type="text" class="form-control form-control-lg" placeholder="Article Title" v-model="articlefrom.title">
              </fieldset>
              <fieldset class="form-group">
                  <input type="text" class="form-control" placeholder="What's this article about?" v-model="articlefrom.description">
              </fieldset>
              <fieldset class="form-group">
                  <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)" v-model="articlefrom.body"></textarea>
              </fieldset>
              <fieldset class="form-group">
                  <input type="text" class="form-control" placeholder="Enter tags" v-model="articlefrom.tagList"><div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="publisharticle">
                  Publish Article
              </button>
            </fieldset>
          </form>
        </div>
  
      </div>
    </div>
  </div>
</template>

<script>
import {publishArticle} from '@/api/article'
export default {
    middleware:'authenticated',
    name:"EditorIndex",
    data(){ 
      return{
         articlefrom:{
            title:'',
            description:'',
            body:'',
            tagList:[]
         }
      }
    },
    methods:{ 
      async publisharticle(){ 
        console.log(this.articlefrom)
       const {data} = await publishArticle({article:this.articlefrom})
       console.log(data,'data')
       this.$router.push({
          path:`/article/${data.article.slug}`,
          // query: data.article.slug
       })

      }
    }
}
</script>

<style>

</style>