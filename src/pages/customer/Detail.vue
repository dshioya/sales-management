<template>
  <q-page>
    <customer-header :customer="customer" />
  </q-page>
</template>

<script>
import CustomerHeader from 'components/customer/detail/Header'

export default {
  components: {
    CustomerHeader
  },

  data () {
    return {
      customer: {
        id: this.$route.params.id,
        no: '1010000000001',
        name: '山田 一郎'
      }
    }
  }
}
</script>
