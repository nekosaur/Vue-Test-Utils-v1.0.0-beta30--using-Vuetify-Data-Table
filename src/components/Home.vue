<template>
  <!-- <foo></foo> -->
  <test></test>
</template>

<script>
// import GetExistingUsers from '../services/service.getExistingUsers';
import Test from './Test.vue';
import { VDataIterator } from 'vuetify/lib/components';
import Foo from './Foo';

export const HomeObject = {
  name: 'Home',
  components: {
    Test,
    VDataIterator,
    Foo,
  },
};

export default HomeObject;
</script>

<style lang="scss" scoped>
#title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
}
</style>
