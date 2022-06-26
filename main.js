const app = new Vue({
    el: '#app',
    data: {
      albums: [],
    },
    methods: {},
    created() {
      axios
        .get('http://localhost:8888/php-ajax-dischi/server/api.php')
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });