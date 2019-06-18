<template>
  <li>
    <a @click="likeit()">
      <i class="la la-heart" :style="{'color':colors}"></i> Like
    </a>
    <div v-for="like in content.like" :key="like.id">
      <img :src="like.user.avatar" alt width="40px" height="40px" class="avatar-like">
    </div>

    <span>{{this.count}}</span>
  </li>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      liked: this.content.liked,
      count: this.content.count
    };
  },
  computed: {
    colors() {
      return this.liked ? "red" : "#ffebee";
    }
  },

  created() {
    Echo.channel("likeChannel").listen("LikeEvent", e => {
      if (this.content.id == e.id) {
        e.type == 1 ? this.count++ : this.count--;
      }
    });
  },

  methods: {
    likeit() {
      this.liked ? this.decr() : this.incr();
      this.liked = !this.liked;
    },
    incr() {
      axios.post(`/likeit/${this.content.id}`).then(res => {
        this.$store.commit("update_post_likes", {
          id: this.content.id,
          like: res.data
        });
        this.count++;
        toast.fire({
          type: "success",
          title: "You successfully liked the post!"
        });
      });
    },
    decr() {
      axios.delete(`/likeit/${this.content.id}`).then(res => {
        this.$store.commit("unlike_post", {
          post_id: this.content.id,
          like_id: res.data
        });
        this.count--;
        toast.fire({
          type: "success",
          title: "You successfully unliked the post!"
        });
      });
    }
  },
  mounted() {
    //console.log("Component mounted.");
  }
};
</script>
<style>
.avatar-like {
  border-radius: 50%;
}
</style>
