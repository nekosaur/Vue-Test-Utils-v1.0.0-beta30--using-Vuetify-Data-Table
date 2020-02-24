<script>
import Foo from './Foo';
import Bar from './Bar';

export default {
  components: {
    Foo,
    Bar
  },
  render (h) {
    return h('div', [
      h(Foo),
      h(Bar)
    ]);
  }
};
</script>

<style>

</style>