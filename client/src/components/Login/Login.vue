<template>
  <div>
      <h1>Login</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <!-- <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Login</router-link>
          </div> -->
        </div><br />

         <vue-telegram-login 
          mode="callback"
          telegram-login="fubokbot"
          @callback="loginCallBack" />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post._id">
                  <td>{{ post.title }}</td>
                  <td>{{ post.body }}</td>
                  <td><router-link :to="{name: 'memberPoints', params: { id: post._id }}" class="btn btn-primary">Login</router-link></td>
                  <!-- for use later
                     <td><button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button></td> 
                  -->
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  import {vueTelegramLogin} from 'vue-telegram-login'

  export default {
    name: 'Login',
    components: {vueTelegramLogin},
      data() {
        return {
          posts: []
        }
      },
      created() {
      let uri = 'https://www.instagram.com/web/search/topsearch/?context=blended&query=avengers';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      // deletePost(id)
      // {
      //   let uri = `http://localhost:4000/posts/delete/${id}`;
      //   this.axios.delete(uri).then(response => {
      //     this.posts.splice(this.posts.indexOf(id), 1);
      //   });
      // },
      loginCallBack (user) {
      // gets user as an input
      // id, first_name, last_name, username,
      // photo_url, auth_date and hash

      //TODO: store user id into memberInfo
      
      console.log(user)
    }
    }
  }
</script>