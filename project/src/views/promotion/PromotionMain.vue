<template>
  <div class="promotion">
    <PromotionIntro> </PromotionIntro>
    <div class="contents">
      <div class="inner">
        <TheCardBox> </TheCardBox>
        <p class="description">
          <img
            src="@/assets/images/bookmark.png"
            class="description__bookmark"
            alt=""
          />
          안 귀여운 사진이 없죠?
          <img
            src="@/assets/images/bookmark.png"
            class="description__bookmark"
            alt=""
          />
          <br />
          요리조리 보고 선택해 주세요!
        </p>
      </div>
    </div>
    <TheFloatingButton @openPopup="openPopup"></TheFloatingButton>
  </div>
</template>

<script>
import PromotionIntro from "@/components/promotion/PromotionIntro";
import TheCardBox from "@/components/common/TheCardBox";
import TheFloatingButton from "@/components/common/TheFloatingButton";

export default {
  name: "PromotionMain",
  components: {
    PromotionIntro,
    TheCardBox,
    TheFloatingButton
  },
  data() {
    return {};
  },
  methods: {
    openPopup() {
      this.$emit("openPopup");
    }
  }
};
</script>

<style lang="scss"></style>
