<template>
  <div>
    <div class="posty" v-for="post in posts" :key="post.slug">
      <div class="post-bar no-margin">
        <div class="post_topbar">
          <div class="usy-dt">
            <a href="user-profile.html" title>
              <img v-bind:src="post.user.avatar" alt>
            </a>
            <div class="usy-name">
              <h3>
                <a href="user-profile.html" title>{{post.user.name}}</a>
                <span class="following">following</span>
              </h3>
              <p>{{post.user.job_role}}</p>
              <span>
                <img src="images/clock.png" alt>
                {{post.humanCreatedAt}}
              </span>
            </div>
          </div>
          <div class="ed-opts">
            <a href="#" @click="openTools" title class="ed-opts-open">
              <i class="la la-ellipsis-v"></i>
            </a>
            <ul class="ed-options">
              <li>
                <a @click.prevent="openEdit(post)" href="#" title>Edit Post</a>
              </li>
              <li>
                <a @click.prevent="deletePost(post.id)" href="#" title>Delete Post</a>
              </li>
              <li>
                <a href="#" title>Unsaved</a>
              </li>
              <li>
                <a href="#" title>Unbid</a>
              </li>
              <li>
                <a href="#" title>Close</a>
              </li>
              <li>
                <a href="#" title>Hide</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="job_descp">
          <p>
            <read-more :text="post.content" more-str="read more" less-str="read less" link="#"></read-more>
          </p>
        </div>
        <div class="media-wrapper" v-for="item in post.post_files" :key="item.id">
          <img
            v-bind:src="'http://127.0.0.1:8000/storage/'+item.file"
            alt
            class="img-responsive post-image"
          >
        </div>

        <div class="job-status-bar">
          <ul class="like-com">
            <like :content="post"></like>
            <li>
              <a href="#" title class="com">
                <i class="pe pe-7s-comment"></i>
                {{post.commentscount}} Comment
              </a>
            </li>
            <li>
              <a href="#" title class="com">
                <i class="pe pe-7s-share"></i> Share
              </a>
            </li>
          </ul>
          <a>
            <i class="la la-eye"></i>Views 50
          </a>
        </div>
      </div>
      <!--post-bar end-->
      <div class="comment-section">
        <div class="comment-sec">
          <comment-list
            v-if="post.comments"
            :collection="post.comments"
            :comments="post.comments.root"
          ></comment-list>

          <!--comment-sec end-->
        </div>
        <div class="post-comment">
          <div class="cm_img">
            <user-avatar></user-avatar>
          </div>
          <div class="comment_box">
            <form>
              <input type="text" v-model="post.reply" placeholder="Post a comment">
              <button type="submit" @click.prevent="comment(post)">Send</button>
            </form>
          </div>
        </div>
      </div>
      <!--comment-section end-->
    </div>
    <div class="post-popup job_post">
      <div class="post-project">
        <h3>Update post</h3>
        <div class="post-project-fields">
          <form>
            <div class="row">
              <div class="col-lg-12">
                <textarea
                  name="content"
                  v-model="form.content"
                  placeholder="whats on mind"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('content') }"
                ></textarea>
                <has-error :form="form" field="description"></has-error>
              </div>
              <div class="col-lg-12">
                <ul>
                  <li>
                    <button
                      class="active"
                      :disabled="form.busy"
                      @click.prevent="updatePost"
                      type="submit"
                      value="post"
                    >Update</button>
                  </li>
                  <li>
                    <a href="#" title>Cancel</a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <!--post-project-fields end-->
        <a href="#" title>
          <i class="la la-times-circle-o"></i>
        </a>
      </div>
      <!--post-project end-->
    </div>
  </div>
  <!--posty end-->
</template>

<script>
import CommentList from "../CommentList.vue";
export default {
  data() {
    return {
      post: {
        reply: ""
      },
      form: new Form({
        content: "",

        id: ""
      })
    };
  },
  computed: {
    posts() {
      //return this.$store.state.posts;
      return this.$store.getters.all_posts;
    }
  },
  components: {
    "comment-list": CommentList
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    openTools(post) {
      //$(".ed-options").toggleClass("active");

      // return false;
      $(this)
        .next(".ed-options")
        .toggleClass("active");
      return false;
    },
    openEdit(post) {
      this.form.reset();
      $(".post-popup.job_post").addClass("active");
      // $(".wrapper").addClass("overlay");
      this.form.fill(post);
      console.log(post);
    },
    updatePost() {
      // Submit the form via a POST request
      this.form.put("post/" + this.form.id).then(response => {
        //console.log(response.data);
        this.$store.commit("updatePost", {
          id: this.form.id,
          data: response.data.data
        });
        // this.form.reset();
        this.form.clear();
        $(".post-popup.job_post").removeClass("active");
        $(".wrapper").removeClass("overlay");
        // this.getPosts();
        //this.openTools();
        toast.fire({
          type: "success",
          title: "Post Updated in successfully"
        });
      });
    },
    deletePost(id) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          // Send request to the server
          if (result.value) {
            this.form
              .delete("post/" + id)
              .then(() => {
                this.$store.commit("deletePost", id);
                swal.fire("Deleted!", "Your file has been deleted.", "success");

                //Fire.$emit("AfterCreate");
                // this.getPosts();
              })
              .catch(() => {
                this.$store.commit("deletePost", id);
                swal.fire("Failed!", "There was something wronge.", "warning");
              });
          }
        });
    },
    getPosts() {
      axios.get("/activities").then(response => {
        if (!response.data.error) {
          response.data.data.forEach(post => {
            this.$store.commit("pushPost", post);
          });
        }
      });
    },
    comment(post) {
      axios
        .post("/api/comment", { content: post.reply, post_id: post.id })
        .then(response => {
          if (!response.data.error) {
            post.reply = "";
            let payLoad = {
              post_id: post.id,
              comments: response.data.data
            };
            this.$store.commit("updateComments", payLoad);
            // this.comment = payLoad;
          }
        });
    }
  },
  created() {
    Fire.$on("AfterCreate", () => {
      location.reload();
      // this.getPosts();
      this.openTools();
    });
    //    setInterval(() => this.loadUsers(), 3000);
  }
};
</script>

<style>
</style>
