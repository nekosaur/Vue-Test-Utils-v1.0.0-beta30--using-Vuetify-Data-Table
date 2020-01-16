<template>
  <div id="user-search">
    <div id="search-box">
        <v-autocomplete
          v-model="selectedUser"
          :items="users"
          :search-input.sync="search"
          item-text="displayName"
          item-value="login"
          cache-items
          label="Seach User..."
        >
          <template v-slot:selection="{item}">{{item.displayName}}</template>
          <template v-slot:item="{ item }">
            <v-list-item-content>
              <v-list-item-title>{{item.displayName}}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </div>
      <v-btn @click="addUserToTable">Add User</v-btn>
    </div>
</template>

<script>
import getUsersFromDatabase from '../services/service.getUsersFromDatabase';

export default {
  methods: {
    updateUsers(searchText) {
      this.loading = true;
      this.users = [];
      const databaseUsers = getUsersFromDatabase(searchText);
      databaseUsers.then(users => this.users.push(...users));
    },
    addUserToTable(){
      let user = this.users.find(u => u.login === this.selectedUser);
      this.$emit('addUserToTable', user);
      this.selectedUser = null;
    }
  },
  watch: {
    search(val) {
      val && val !== this.selectedUser && this.updateUsers(val);
    }
  },
  data: ()=>({
    users: [],
    selectedUser: null,
    search:null
  })
};
</script>
