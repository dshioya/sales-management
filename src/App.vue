<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script >
export default {
  name: 'App',

  meta: {
    titleTemplate: title => {
      if (title) {
        return `${title} - 販売管理システム`
      } else {
        return '販売管理システム'
      }
    }
  }
}
</script>
