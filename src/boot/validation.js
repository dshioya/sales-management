import Vue from 'vue'

Vue.prototype.$validationRules = {
  required (value) {
    if (value !== 0) {
      value = value || ''
    }
    return String(value).length > 0 || '必須項目です'
  }
}
