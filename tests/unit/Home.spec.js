import { createLocalVue, mount } from '@vue/test-utils';
import Home from '@/components/Home.vue';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

const localVue = createLocalVue();
Vue.use(Vuetify);
global.requestAnimationFrame = cb => cb();

describe('Home.vue', () => {
  let vuetify;

  it('Snackbar should be displayed upon problems in adding user to the table', async() => {
    //Arrange
    vuetify = new Vuetify();

    mount(Home, {
      localVue,
      vuetify
    });

    await Vue.nextTick();
  });

});
