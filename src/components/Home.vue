<template>
  <div class="home-header">
    <div class="project-name">
      <h1>
        <a>vue-ssr-webpack4</a>
      </h1>
    </div>
    <div class="project-link">
      <nav>
        <a
          v-for="item in myLink"
          :title="item.title"
          :class="{ 'nav-link-active': item.name === currentName }"
          class="nav-link" 
          @click="changeActive(item.name)"
        >{{ item.name }}</a>
      </nav>
    </div>
    <div class="search-wrap">
      <div class="search-operation">
        <input class="search-input" type="text" placeholder="搜索音乐、MV、歌单">
        <button class="search-button">
          <i class="fa fa-search btn-icon"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      myLink: [
        {
          name: "音乐",
          title: "api来自QQ音乐",
        },
        {
          name: "更多",
          title: "",
        }
      ],
      currentName: '音乐',
    };
  },
  mounted(){
    this.getHotKey();
  },
  methods: {
    changeActive(n){
      this.currentName = n;
      // TODO路由切换
    },
    getHotKey(){
      
    },
  },
  asyncData({ store }) {}
};
</script>

<style lang="sass" scoped>
  .home-header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-round;
    border-bottom: solid 1px #f2f2f2;
    .project-name{
      flex: 0 0 330px;
      h1{
        line-height: 90px;
        text-align: center;
        a{
          text-transfrom: uppercase;
        }
      }
    }
    .project-link{
      min-width: 300px;
      nav{
        display: flex;
        .nav-link{
          flex-shrink: 0;
          padding: 0 25px;
          line-height: 90px;
          height: 90px;
          text-align: center;
          font-size: 18px;
          &:hover{
            color: #31c27c;
          }
        }
        .nav-link-active{
          background-color: #31c27c;
          color: #fff !important;
        }
      }
     
    }
    .search-wrap{
      .search-operation{
        margin-top: 27px;
        border: 1px solid #c9c9c9;
        padding-left: 11px;
        border-radius: 3px;
        .search-input{
          width: 174px;
          height: 36px;
          line-height: 36px;
          border: 0 none;
          font-size: 14px;
          transition: width .6s;
        }
         @media (max-width: 880px){
          .search-input{
            width: 0;
            visibility: hidden;
          }
        }
        .search-button{
          border: 0 none;
          width: 38px;
          height: 36px;
          .btn-icon{
            font-size: 18px;
            opacity: 0.5;
          }
        }
      }
      @media (max-width: 880px){
        .search-operation{
          padding-left: 0;
        }
      }
    }
  }
</style>


