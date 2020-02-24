import Vue from 'vue';
export default Vue.extend({
  name: 'foo',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    return {
      internalOptions: {},
    };
  },
  watch: {
    options: {
      handler () {
        console.log('Foo watch');
        this.update();
      },
      immediate: true,
    }
  },
  methods: {
    update () {
      this.internalOptions = {
        ...this.internalOptions,
      };
    }
  },
  render (h) {
    console.log('Foo render');
    return h('div', ['foo']);
  },
});
