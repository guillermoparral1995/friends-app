<template>
  <main>
    <nav>
      <router-link to="/profile"><profile-icon></profile-icon></router-link>
      <router-link to="/"><home-icon></home-icon></router-link>
    </nav>
    <router-view></router-view>
  </main>
</template>

<script>
import HomeIcon from "./components/HomeIcon.vue";
import ProfileIcon from "./components/ProfileIcon.vue";

export default {
  data: () => {
    return {};
  },
  components: {
    HomeIcon,
    ProfileIcon,
  },
};
</script>

<style lang="scss">
body {
  padding: 20px;
  background-color: #eee;
}

nav {
  border: 1px solid #ccc;

  svg {
    width: 20px;
  }
}
</style>