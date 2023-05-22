<template>
  <div class="floating">
    <button
      type="button"
      title="이동"
      class="floating__button"
      :class="isDisabled ? 'floating__button--disabled' : ''"
      :disabled="isDisabled"
      @click="openPopup"
    >
      <ul class="choice">
        <li :key="i" class="choice__item" v-for="(item, i) in defaultLikeList">
          <img
            v-if="item.src"
            :src="require(`../../assets/images/company/cat-${item.src}.jpeg`)"
            class="choice__img"
            :alt="item.title"
          />
          <span class="hidden">선택</span>
          <span v-if="getRestNumber && i == 0" class="choice__number"
            >+ {{ getNumberOfLikes - defaultLikesCount }}</span
          >
        </li>
      </ul>
      <span class="floating__title">
        {{ isDisabled ? "3개이상 선택하세요" : "받을래요. 사진!" }}</span
      >
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TheFloatingButton",
  computed: {
    ...mapState(["defaultLikesCount", "defaultLikeList", "valueList"]),
    getNumberOfLikes() {
      return this.valueList.length;
    },

    isDisabled() {
      return this.getNumberOfLikes >= this.defaultLikeList.length
        ? false
        : true;
    },

    getRestNumber() {
      return this.getNumberOfLikes > this.defaultLikeList.length ? true : false;
    }
  },
  methods: {
    openPopup() {
      this.$emit("openPopup");
    }
  }
};
</script>

<style scoped></style>
