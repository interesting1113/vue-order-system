<template>
  <header>
      <nav class="navbar navbar-default">
         <a href="/" class="navbar-brand">Pizza点餐系统</a>
          <ul class="nav navbar-nav">
              <li><router-link to="/" class="nav-link">主页</router-link></li>
              <li><router-link to="/menu" class="nav-link">菜单</router-link></li>
              <li><router-link to="/admin" class="nav-link">管理</router-link></li>
              <li><router-link to="/about" class="nav-link">关于我们</router-link></li>
          </ul>
           <ul class="nav navbar-nav">
              <li><router-link to="/login" class="nav-link">登陆</router-link></li>
              <li><router-link to="/register" class="nav-link">注册</router-link></li>
             
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
    data() {
        return {
           
        
        }
    }
}
</script>

<style>

</style>