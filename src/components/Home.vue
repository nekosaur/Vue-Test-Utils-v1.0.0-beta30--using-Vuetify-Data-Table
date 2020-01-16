<template>
  <v-container>
    <div id="title">Employee Information</div>
    <div class="row">
      <user-search @addUserToTable="addUserToTable" />
    </div>
    <div class="row">
      <employee-table v-model="users"/>
    </div>

    <div class="snackbar">
      <v-snackbar v-model="isSnackbarActive">{{ snackbarMessage }}
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import GetExistingUsers from '../services/service.getExistingUsers';
import EmployeeTable from './EmployeeTable';
import UserSearch from './UserSearch';
import Vue from 'vue';

export const HomeObject = (getExistingUsers = GetExistingUsers) => ({
  name: 'Home',
  components: {
    EmployeeTable,
    UserSearch
  },
  data: () => ({
    currentRealmTitle: 'Endmontage',
    users: [],
    isSnackbarActive: false,
    snackbarMessage: 'User already exisits !'
  }),
  async created() {
    const initialUsers = await getExistingUsers();
    this.users.push(...initialUsers);  
  }, 
  methods: {  
    async addUserToTable(User) {
      let tableItem = User; 
      if (!this.users.filter(u => u._id === tableItem._id).length > 0 && tableItem._id) {
        try {
          this.users.push(tableItem);
        } catch (err) {
          throw err;
        }
      }
      else if (this.users.filter(u => u._id === tableItem._id).length > 0){
        this.isSnackbarActive = true;
      }
    }
  }
});

export default HomeObject();
export const Home = Vue.component;
</script>

<style lang="scss" scoped>
#title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
}
</style>
