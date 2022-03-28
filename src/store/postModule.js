export const postModule = {
  state: function () {
    return {
      posts: [],
      limit: 4,
      userName: "",
      userAge: "",
    };
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getLimit(state) {
      return state.limit;
    },
    getUserName(state) {
      return state.userName;
    },
    getUserAge(state) {
      return state.userAge;
    },
    getChildName(state) {
      return state.posts.childName;
    },
    getChildAge(state) {
      return state.posts.childAge;
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setUserName(state, name) {
      state.userName = name;
    },
    setUserAge(state, age) {
      state.userAge = age;
    },
    setChildName(state, name) {
      state.posts.childName = name;
    },
    setChildAge(state, age) {
      state.posts.childAge = age;
    },
    removePost(state, post) {
      state.posts = state.posts.filter((p) => p.id !== post.id);
    },
  },
  actions: {},
  namespaced: true,
};
