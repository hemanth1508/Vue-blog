<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <p>Categories:</p>
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get(
        "https://blog-project-7f207.firebaseio.com/posts/" + this.id + ".json"
      )
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = Math.random.toString(16).slice(2, 8);
      }
    }
  }
};
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
  text-align: justify;
}
</style>
