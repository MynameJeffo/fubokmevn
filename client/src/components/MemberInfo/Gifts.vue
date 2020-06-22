<template>
  <div>
      <h1>Posts</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <!-- <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link> -->
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr>1</tr>
                <tr>2</tr>
                <tr>3</tr>
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
      created() {
      let uri = 'https://www.instagram.com/web/search/topsearch/?context=blended&query=avengers';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      
    }
  }
</script>