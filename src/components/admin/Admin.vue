<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <NewPizza/>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>榴莲pizza</td>
            <td>
              <button class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './newPizza/NewPizza'
export default {
 components: {
   NewPizza
 }
}
</script>

<style>

</style>