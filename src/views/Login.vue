<template>
  <div class="home">
    <CHeader title="登录"/>
    <Contents msg="登录"/>
  </div>
</template>

<script>
import CHeader from '@/components/commons/header.vue'
import Contents from '@/components/login/contents.vue'

export default {
  name: 'login',
  components: {
    CHeader,
    Contents
  }
}
</script>
