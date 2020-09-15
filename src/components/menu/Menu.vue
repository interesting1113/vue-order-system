<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
    <table class="table">
      <thead class="thead-default">
        <tr>
          <th>尺寸</th>
          <th>价格</th>
          <th>加入</th>
        </tr>
      </thead>
      <tbody v-for="item in getMenuItems" :key="item.name">
        <tr>
          <td><strong>{{ item.name }}</strong></td>
        </tr>
        <tr v-for="option in item.options" :key="option.size">
          <td>{{ option.size }}寸</td>
          <td>{{option.price}}RMB</td>
          <td><button class="btn btn-sm btn-outline-success" @click="addToCart(item, option)">+</button></td>
        </tr>
      </tbody>
    </table>
  </div> 
  <!-- 购物车 -->
  <div class="col-md-4 col-sm-12">
    <div v-if="cart.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in cart" :key="item.name">
            <tr>
              <td>
                <button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
                <span>{{ item.quantity }}</span>
                <button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{ item.name }}{{ item.size }}</td>
              <td>{{ item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价： {{ total + "RMB"}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>
      {{ cartText}}
    </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      cartText: "购物车里没有任何商品",
      getMenuItems: {
        1: {
          'name': '榴莲pizza',
          'description': '这是喜欢榴莲朋友的最佳选择',
          'options': [{
            'size': 9,
            'price': 38
          },
          {
           'size': 12,
            'price': 48 
          }]
        },
        2: {
          'name': '芝士pizza',
          'description': '浓浓芝士香，始于瞬间爆棚',
          'options': [{
            'size': 9,
            'price': 38
          },
          {
           'size': 12,
            'price': 48 
          }]
        },
        3: {
          'name': '夏威夷pizza',
          'description': '众多人的首选',
          'options': [{
            'size': 9,
            'price': 36
          },
          {
           'size': 12,
            'price': 46 
          }]
        }

      }
    }
  },
  computed: {
    total() {
      let totalCost = 0

      for(let index in this.cart) {
        let individualItem = this.cart[index]
        totalCost += individualItem.quantity * individualItem.price
      }
      return totalCost
    }
  },
  methods: {
    addToCart(item, option) {
      let cart = {   
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      }

      if(this.cart) {
        //过滤
        let result = this.cart.filter((cart) => {
          return (cart.name === item.name && cart.price === option.price)
        })
        if(result != null && result.length > 0) {
          result[0].quantity++
        }else {
          this.cart.push(cart)
        }
      }else {
          this.cart.push(cart)
      }

    
    },
    decreaseQuantity(item) {
      
      if(item.quantity <= 0) {
        this.removeFromCart(item)
      }
      item.quantity --
      
    },
    increaseQuantity(item) {
      item.quantity ++
    },
    removeFromCart(item) {
      this.cart.splice(this.cart.indexOf(item), 1)
    }
  }
}
</script>

<style>

</style>