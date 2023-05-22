import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    companyList: [
      {
        id: "1",
        title: "치즈 참새관찰",
        code: "01",
        src: "01"
      },
      {
        id: "2",
        title: "치즈 자는중",
        code: "02",
        src: "02"
      },
      {
        id: "3",
        title: "몽구 LP에 기대어",
        code: "03",
        src: "03"
      },
      {
        id: "4",
        title: "몽구치즈 멋져",
        code: "04",
        src: "04"
      },
      {
        id: "5",
        title: "치즈 증명사진",
        code: "05",
        src: "05"
      },
      {
        id: "6",
        title: "몽구치즈 기절",
        code: "06",
        src: "06"
      },
      {
        id: "7",
        title: "치즈 다소곳",
        code: "07",
        src: "07"
      },
      {
        id: "8",
        title: "몽구 멍 산",
        code: "08",
        src: "08"
      },
      {
        id: "9",
        title: "몽구치즈 예쁜짓",
        code: "09",
        src: "09"
      },
      {
        id: "10",
        title: "몽구 주목",
        code: "10",
        src: "10"
      },
      {
        id: "11",
        title: "몽구 멍 산2",
        code: "11",
        src: "11"
      },
      {
        id: "12",
        title: "치즈 집중",
        code: "12",
        src: "12"
      },
      {
        id: "13",
        title: "몽구 사냥 전",
        code: "13",
        src: "13"
      },
      {
        id: "14",
        title: "몽구 사냥 함",
        code: "14",
        src: "14"
      },
      {
        id: "15",
        title: "몽구치즈 사랑해",
        code: "15",
        src: "15"
      }
    ],
    defaultLikesCount: 3,
    defaultLikeList: [{}, {}, {}],
    valueList: [],
    likeList: [],
    rollingList: [],
    finalChoiceCompany: ""
  },

  mutations: {
    SET_DEFAULT_LIKE_LIST(state) {
      for (let i = 0; i < state.defaultLikesCount; i++) {
        for (let a = 0; a < state.companyList.length; a++) {
          state.companyList[a].id == state.valueList[i]
            ? state.defaultLikeList.splice(i, 1, state.companyList[a])
            : state.valueList[i] == undefined
            ? state.defaultLikeList.splice(i, 1, {})
            : "";
        }
      }
    },

    SET_LIKES_LIST(state) {
      for (let i = 0; i < state.valueList.length; i++) {
        for (let a = 0; a < state.companyList.length; a++) {
          state.companyList[a].id == state.valueList[i]
            ? state.likeList.splice(i, 1, state.companyList[a])
            : "";
        }
      }
    },

    SET_ROLLING_LIST(state) {
      state.rollingList = [
        ...state.likeList,
        ...state.likeList,
        ...state.likeList
      ];
    },

    GET_COMPANY(state) {
      let copyRollingList = JSON.parse(JSON.stringify(state.rollingList));

      state.finalChoiceCompany =
        copyRollingList[Math.floor(Math.random() * copyRollingList.length)];

      state.finalChoiceCompany.final = true;

      state.rollingList.splice(-2, 1, state.finalChoiceCompany);
    }
  }
});
