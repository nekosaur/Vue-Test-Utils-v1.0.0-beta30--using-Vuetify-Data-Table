import { expect } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import Home, { HomeObject } from '@/components/Home.vue';
import Vue from 'vue';
import sinon from 'sinon';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
Vue.use(Vuetify);
global.requestAnimationFrame = cb => cb();

describe('Home.vue', () => {
  let vuetify;
  let getExistingUsers;

  let existingUsers = [{
    displayName: 'Mustermann Max',
    department : 'HR',
    login: '001',
    _id: '001'
  },{
    displayName: 'Mustermann Peter',
    department : 'Marketing',
    login: '002',
    _id: '002'
  }];

  let selectedUser = {
    displayName: 'Mustermann Peter',
    department : 'Marketing',
    login: '002',
    _id: '002'
  };


  it('Snackbar should be displayed upon problems in adding user to the table', async() => {
    //Arrange
    vuetify = new Vuetify();
    getExistingUsers = sinon.stub();
    
    const expectedMessage = 'User already exisits !';    
    getExistingUsers.resolves(existingUsers);
    const homeObject =  HomeObject(getExistingUsers);
    const home = Object.assign(Home, homeObject);

    const homeComponent = mount(home, {
      localVue,
      vuetify
    });
    
    await Vue.nextTick();

    //Act
    await homeComponent.vm.addUserToTable(selectedUser);

    //Assert
    expect(homeComponent.find('.v-snack').isVisible()).to.be.equal(true);
    expect(homeComponent.find('.v-snack__content').text()).to.be.equal(expectedMessage);
  });

});
