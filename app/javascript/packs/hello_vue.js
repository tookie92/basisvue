import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  var element = document.getElementById("client-form")

  if (element != null) {
    var client = JSON.parse(element.dataset.client)

    var app = new Vue({
      el: element,
      data: function() {
        return { client: client }
      },
      methods: {
        saveUser() {
          this.$http.post('/clients', { client: this.client }).then(response => {
            Turbolinks.visit(`/clients/${response.body.id}`)
          }, response => {
            console.log(response)
          })
        }
      }
    });
  }
});
