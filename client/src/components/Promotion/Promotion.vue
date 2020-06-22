<template>
  <div>
      <h1>Promotion</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <!-- show only when its admin -->
            <!-- <router-link :to="{ name: 'create' }" class="btn btn-primary">Upload Promotion</router-link> -->
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
                <!-- <tr v-for="post in posts" :key="post._id">
                  <td>Promo</td> -->
                  <!-- <td>{{ post.title }}</td>
                  <td>{{ post.body }}</td> -->
                  <!-- <td><router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button></td> -->
                <!-- </tr> -->
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    beforeMount() {

    },
    created() {
      // let uri = 'http://localhost:4000/posts';
      // this.axios.get(uri).then(response => {
      //   this.posts = response.data;
      // });
    },
    methods: {

    }
  }
</script>