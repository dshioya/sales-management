<template>
  <el-dialog
    title="ユーザー情報"
    :visible.sync="visibleDialog"
    @close="$emit('update:visible', false)"
  >
    <div class="static-form-item">
      <label>氏名</label>
      <p>山田太郎</p>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visibleDialog: this.visible
    }
  },
  watch: {
    visible(newValue) {
      this.visibleDialog = newValue
    }
  }
}
</script>
