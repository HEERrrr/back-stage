<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><setting /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>商品管理</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>用户管理</span>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><location /></el-icon>
        <span>其他</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">页面1</el-menu-item>
        <el-menu-item index="1-2">页面2</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo {
  height: 100vh;
  border: none;
  --el-menu-bg-color: #545c65;
}
</style>
