<template>
  <li>
    <div class="comment-list">
      <div class="bg-img">
        <img v-bind:src="comment.user.avatar" alt>
      </div>
      <div class="comment">
        <h3>{{ comment.user.name }}</h3>
        <span>
          <img src="images/clock.png" alt>
          {{comment.humanCreatedAt}}
        </span>
        <p>{{ comment.content }}</p>

        <a @click="replyToComment = comment" title>
          <i class="fa fa-reply-all"></i>Reply
        </a>
        <comment-form v-if="replyToComment == comment" :comment="comment"></comment-form>
      </div>
    </div>

    <comment-list
      v-if="collection[comment.id]"
      v-bind:comments="collection[comment.id]"
      v-bind:collection="collection"
    ></comment-list>
  </li>
</template>
<script>
import CommentList from "./CommentList.vue";
import CommentForm from "./CommentForm.vue";

export default {
  props: ["comment", "collection"],
  data() {
    return {
      replyToComment: false
    };
  },
  mounted() {},
  components: {
    "comment-list": CommentList,
    "comment-form": CommentForm
  }
};
</script>
