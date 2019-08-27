<template>
  <div class="cart-block" v-show="showCart">
    <p v-if="!Cart.length">Cart is empty</p>
    <CartItem
      v-for="product of Cart"
      :key="product.id_product"
      :img="imgCart"
      :cartItem="product"
      :removeProduct="removeProduct"
    ></CartItem>
  </div>
</template>

<script>
import CartItem from "./CartItem";
export default {
  name: "Cart",
  props: ["removeProduct"],
  components: {
    CartItem
  },
  data() {
    return {
      imgCart: "https://placehold.it/50x100",
      showCart: false,
      
    };
  },
  computed: {
    Cart() {
      return this.$store.getters.cart;
    },
  },
};
</script>