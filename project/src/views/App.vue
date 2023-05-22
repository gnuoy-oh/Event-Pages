<template>
  <div class="container">
    <main>
      <h1 class="hidden">이벤트</h1>
      <PropmotionMain @openPopup="openPopup"></PropmotionMain>
      <PromotionPopup :is-open-popup="isOpenPopup"></PromotionPopup>
    </main>
  </div>
</template>

<script>
import PropmotionMain from "@/views/promotion/PromotionMain.vue";
import PromotionPopup from "@/components/promotion/PromotionPopup";
import { mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      isOpenPopup: false
    };
  },
  components: {
    PropmotionMain,
    PromotionPopup
  },
  computed: {
    ...mapMutations(["GET_COMPANY"])
  },
  methods: {
    openPopup() {
      this.isOpenPopup = true;
      this.$store.commit("GET_COMPANY");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
