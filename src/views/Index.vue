<template>
  <div>
    <h3>数据的增删改查</h3>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" prop="date" align="center" width="100px">
      </el-table-column>
      <el-table-column label="姓名" prop="name" align="center" width="100px">
      </el-table-column>
      <el-table-column label="地址" prop="address" align="center" width="350px">
        <template  slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
      </el-table-column>
      <el-table-column label="修改" align="right" width="300px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import instance from "../api/api"
export default {
  name: "Index",
  data() {
    return {
      search: "",
      tableData: [],
    };
  },
  created(){
    this.getAll()
  },
  methods: {
    handleEdit() {},
    handleDelete(scope) {
      console.log(scope);
      this.deleteFn(scope.$index)
    },
    async deleteFn(index){
      // 删除业务
      let {data} = await instance.delete("/delete",{params:{index}})
      console.log(data);
      this.getAll()
    },
    // 请求数据的业务
    async getAll(){
        let {data} = await instance.get("/all")
        console.log(data);
        this.tableData = data.data
    }
  },
};
</script>

<style lang="scss" scoped>
</style>