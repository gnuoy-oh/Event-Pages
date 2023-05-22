<template>
  <ul class="card">
    <li v-for="(item, i) in companyList" :key="i" class="card__item">
      <div class="card-checkbox">
        <input
          :id="item.id"
          :value="item.id"
          type="checkbox"
          class="card-checkbox__input"
          v-model="valueList"
          name="company"
        />
        <label :for="item.id" class="card-checkbox__label">
          <span class="hidden">{{ item.title }}</span>
          <img
            :src="require(`../../assets/images/company/cat-${item.src}.jpeg`)"
            alt=""
          />
        </label>
      </div>
      <span class="card__title">{{ item.title }}</span>
      <span class="card__desc">{{ item.code }}</span>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "TheCardBox",
  computed: {
    ...mapState(["companyList", "valueList"]),
    ...mapMutations([
      "SET_DEFAULT_LIKE_LIST",
      "SET_LIKES_LIST",
      "SET_ROLLING_LIST"
    ]),
    valueList: {
      set(value) {
        this.$store.state.valueList = value;
        this.$store.commit("SET_DEFAULT_LIKE_LIST");
        this.$store.commit("SET_LIKES_LIST");
        this.$store.commit("SET_ROLLING_LIST");
      },
      get() {
        return this.$store.state.valueList;
      }
    }
  }
};
</script>

<style scoped></style>
