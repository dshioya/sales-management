<template>
  <div class="store-list-table">
    <el-table :data="tableData" :max-height="maxHeight" style="width: 100%;">
      <el-table-column prop="code" label="店番号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="店名" width="180"> </el-table-column>
      <el-table-column prop="address" label="住所"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxHeight: null,
      tableData: [
        {
          id: 1,
          created_at: '2016-05-03T10:10:10+0900',
          code: '101',
          name: '本店',
          address: '鹿児島県鹿児島市○○1-2-3'
        },
        {
          id: 2,
          created_at: '2016-05-03T10:10:10+0900',
          code: '201',
          name: '星ヶ峯支店',
          address: '鹿児島県鹿児島市○○1-2-3'
        },
        {
          id: 3,
          created_at: '2016-05-03T10:10:10+0900',
          code: '202',
          name: '上之園支店',
          address: '鹿児島県鹿児島市○○1-2-3'
        }
      ]
    }
  },

  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.maxHeight = this.$el.clientHeight
    }
  }
}
</script>
