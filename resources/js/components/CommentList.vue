<template>
  <ul>
    <comment
      v-for="comment in comments"
      v-bind:comment="comment"
      v-bind:collection="collection"
      :key="comment.id"
    ></comment>
  </ul>
</template>
<script>
export default {
  props: ["collection", "comments"],
  computed: {},
  beforeCreate: function() {
    this.$options.components.Comment = require("./Comment.vue").default;
  }
};
</script>
