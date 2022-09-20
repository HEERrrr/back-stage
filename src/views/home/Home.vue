<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header style="background-color: #333333">Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aside from "components/Aside.vue";
export default {
  name: "Home",
  components: {
    Aside,
  },
};
</script>
<style scoped>
.common-layout {
  /* width: 100%; */
  /* height: 100%; */
}
</style>
