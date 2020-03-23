<script>
  import axios from 'axios';

  export default {
    props: {
      url: {
        type: String,
        default: () => ''
      }
    },
    data: () => ({
      response: null,
      loading: true
    }),
    created() {
      axios
        .get(this.url)
        .then((response) => {
          this.response = response.data;
          this.loading = false;
        })
        .catch((e) => console.error(e));
    },
    render() {
      return this.$scopedSlots.default({
        response: this.response,
        loading: this.loading
      });
    }
  };
</script>
