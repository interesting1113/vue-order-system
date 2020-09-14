<template>
  <div>
    <div class="row">
      <div class="col-4">
        <!-- 导航 --> 
          <div class="list-group">
            <router-link class="nav-link" to="/history"> 
              <a class="list-group-item">历史订单</a>
            </router-link>
            <router-link  class="nav-link" to="/contact"> 
              <a class="list-group-item">联系我们</a>
            </router-link>
            <router-link  class="nav-link" to="/guide"> 
              <a class="list-group-item">点餐文档</a>
            </router-link>
            <router-link  class="nav-link" to="/delivery"> 
              <a class="list-group-item">快递信息</a>
            </router-link>
          </div>
       
      </div>
      <div class="col-8">
        <!-- 导航所对应的内容 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>