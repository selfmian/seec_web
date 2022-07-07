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
    // /api/aa  ===> 127.0.0.1:2222/aa
    instance.get("/aa").then(res => console.log(res))
  },
};
</script>

<style lang="scss" scoped>

</style>
