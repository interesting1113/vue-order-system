<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../assets/披萨.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
             <div class="form-group">
              <label for="confirm-password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-block btn-success">登陆</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
     
    }
  },
  methods: {
    onSubmit() {
      axios.get('/users.json')
      .then(res => {
        //console.log(res.data);
        const data = res.data
        const users = []
        for(let key in data) {
          const user = data[key]
          //console.log(user)
          users.push(user)
        }
        //consle.log(uses)
        //实现过滤
        let result = users.filter((user) => {
          return user.email === this.email && user.password === this.password
        })
        //console.log(result)
        //判断result的长度是否大于0
        if(result != null && result.length > 0) {
          this.$router.push({name: 'Home'})
        }else {
          alert("账号或密码错误")
        }
      })
      
    }
  },
}
</script>

<style>

</style>