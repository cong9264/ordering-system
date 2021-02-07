<template>
  <div class="food">
    <!-- 查看菜品 -->
    <el-table :data="foodList" height="500" border style="width: 100%">
      <el-table-column prop="name" label="菜品名称" width="180"> </el-table-column>
      <el-table-column prop="material" label="菜品材料" width="180"> </el-table-column>
      <el-table-column prop="price" label="菜品价格"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      foodList: [{
          name: '菜品名称1',
          material: '材料材料材料材料材料材料材料材料材料材料',
          price: 8
        }, {
          name: '菜品名称2',
          material: '材料材料材料材料材料材料材料材料材料材料',
          price: 8
        }, {
          name: '菜品名称3',
          material: '材料材料材料材料材料材料材料材料材料材料',
          price: 8
        }, {
          name: '菜品名称4',
          material: '材料材料材料材料材料材料材料材料材料材料',
          price: 8
        }, {
          name: '菜品名称5',
          material: '材料材料材料材料材料材料材料材料材料材料',
          price: 8
        }, {
          name: '菜品名称6',
          material: '材料材料材料材料材料材料材料材料材料材料',
          price: 8
        }, {
          name: '菜品名称7',
          material: '材料材料材料材料材料材料材料材料材料材料',
          price: 8
        }]
    }
  }
};
</script>

<style lang="less" scoped>
</style>