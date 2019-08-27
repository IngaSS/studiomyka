<template>
  <div class="cart-item">
    <div class="product-bio">
      <img :src="require('../img/' + cartItem.img)" alt="#" />
      <div class="product-desc">
        <!-- <div class="productDetails"> -->
        <p class="product-title">{{cartItem.h3}}</p>
        <p class="product-quantity">Количество: {{cartItem.quantity}} шт.</p>
        <p class="product-price">Итого: {{cartItem.quantity*cartItem.price}} руб.</p>
        <!-- </div> -->
      </div>
    </div>
    <div class="right-block">
      <button class="del-btn" @click="removeProduct(cartItem)">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartItem"],
  methods: {
    removeProduct(product) {
      this.$store.commit("removeProduct", product);
    }
  }
};
</script>

<style>
/* .product-desc {
  display: flex;
}

.productDetails {
  text-align: left;
}

.productDetails p {
  margin: 0 auto;
} */

.product-title, .product-quantity {
  color: white;
}

.cart-item {
  display: flex;
  justify-content: space-between;
}
.cart-item:not(:last-child) {
  margin-bottom: 20px;
}
.product-bio {
  display: flex;
  margin: 10% auto;
}
.cart-item img {
  align-self: flex-start;
  margin-right: 15px;
  width: 86px;
  height: 93px;
}

.product-price {
 color: white;
  font-size: 0.9em;
}
.product-desc {
  max-width: 150px;
}
.product-quantity {
  margin-top: 15px;
  font-size: 0.75em;
}
.right-block {
  text-align: left;
}
.del-btn {
  margin-top: 55px;
  margin-left: -40%;
  background-color: #2f2a2d;
  padding: 5px 15px;
  border: 1px solid transparent;
  color: #fafafa;
  border-radius: 5px;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
}
.del-btn:hover {
  background-color: #fafafa;
  color: #2f2a2d;
  border: 1px solid #2f2a2d;
}
</style>