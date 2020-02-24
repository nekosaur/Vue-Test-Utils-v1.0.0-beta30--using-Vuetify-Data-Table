export default {
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
        console.log('Bar watch');
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
    console.log('Bar render');
    return h('div', ['bar']);
  },
};
