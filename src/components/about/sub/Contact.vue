<template>
  <div class="card text-dark bg-light mb-3">
      <div class="card-header">联系我们</div>
      <div class="card-body">
          <h4 class="cartd-title">联系我们</h4>
          <p class="card-text">pizza1113@gmail.com</p>
          <router-link :to="{name: 'PhoneNumber'}">电话</router-link>
      <router-link :to="{name: 'PersonName'}">联系人</router-link>
      <router-view></router-view>
      </div>      
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>