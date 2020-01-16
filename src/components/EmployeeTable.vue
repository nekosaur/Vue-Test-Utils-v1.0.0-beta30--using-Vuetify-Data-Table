<template>
  <v-data-table
    id="permission-table"
    v-model="selected"
    :headers="headers"
    :items="value"
    :items-per-page="10"
    class="elevation-1"
  >
   
  </v-data-table>
</template>

<script>
import Vue from 'vue';

export const EmployeeTableObject = () => ({
  name: 'PermissionTable',
  props: {
    value: Array
  },
  data: () => ({
    selected: [],
    headers: [
      { text: 'Name', value: 'displayName', sortable: true },
      { text: 'Department', value: 'department', sortable: true }
    ],
  })
});

export default EmployeeTableObject();
export const EmployeeTable = Vue.component();

</script>

<style lang="scss" scoped>
#permission-table {
  width: 100%;
}

.cb-center {
  margin-left: auto;
}

.icon-clickable {
  cursor: pointer;
  color: #222;

  :hover {
    color: orange;
    transition: color 200ms ease-out;
  }
}
</style>
