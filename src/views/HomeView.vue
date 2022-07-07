<template>
  <div class="">
    首页
  </div>
</template>

<script>
import instance from "@/api/api"
export default {
  name: "HomeView",
  created() {
    instance.get("").then(res => console.log(res))
  },
};
</script>

<style lang="scss" scoped>

</style>
