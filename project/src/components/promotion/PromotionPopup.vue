<template>
  <div
    v-if="isOpenPopup"
    class="popup"
    :class="isOpenPopup ? 'animation-effect' : ''"
  >
    <PromotionOutro></PromotionOutro>
    <div class="contents">
      <ul class="interest">
        <template v-for="(item, i) in rollingList">
          <li
            :key="i"
            class="interest__item"
            :class="item.final ? 'scale-expansion' : ''"
          >
            <span v-if="item.final" class="hidden">당첨 고양이</span>
            <img
              :src="require(`../../assets/images/company/cat-${item.src}.jpeg`)"
              class="interest__img"
              :alt="item.title"
            />
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PromotionOutro from "@/components/promotion/PromotionOutro";

export default {
  name: "PromotionPopup",
  components: {
    PromotionOutro
  },
  props: {
    isOpenPopup: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["rollingList", "finalChoiceCompany"])
  }
};
</script>

<style scoped></style>
