<template>
  <div>
    <div class="post-bar" v-for="post in posts" :key="post.slug">
      <div class="post_topbar">
        <div class="usy-dt">
          <img v-bind:src="post.user.avatar" alt>
          <div class="usy-name">
            <h3>{{post.user.name}}</h3>
            <span>
              <img src="images/clock.png" alt>
              {{post.humanCreatedAt}}
            </span>
          </div>
        </div>
        <div class="ed-opts">
          <a @click.prevent="openTools" title>
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
      <div class="epi-sec">
        <ul class="descp">
          <li>
            <img src="images/icon8.png" alt>
            <span>{{post.user.job_role}}</span>
          </li>
          <li>
            <img src="images/icon9.png" alt>
            <span>India</span>
          </li>
        </ul>
        <ul class="bk-links">
          <li>
            <a href="#" title>
              <i class="la la-bookmark"></i>
            </a>
          </li>
          <li>
            <a href="#" title>
              <i class="la la-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="job_descp">
        <h3>{{post.title}}</h3>
        <ul class="job-dt">
          <li>
            <a href="#" title>Full Time</a>
          </li>
          <li>
            <span>${{post.price_from}} / hr</span>
          </li>
        </ul>
        <p>
          <read-more :text="post.description" more-str="read more" less-str="read less" link="#"></read-more>
        </p>
        <skills-component :skills="post.skills"></skills-component>
      </div>
      <div class="job-status-bar">
        <ul class="like-com">
          <like :content="post"></like>
          <li>
            <a href="#" title class="com">
              <img src="images/com.png" alt>
              Comment {{post.commentscount}}
            </a>
          </li>
        </ul>
        <a>
          <i class="la la-eye"></i>Views 50
        </a>
      </div>
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

      <!--comment-section end-->
    </div>

    <div class="post-popup job_post">
      <div class="post-project">
        <h3>Update post</h3>
        <div class="post-project-fields">
          <form>
            <div class="row">
              <div class="col-lg-12">
                <input
                  v-model="form.title"
                  type="text"
                  name="title"
                  placeholder="Title"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('title') }"
                >
                <has-error :form="form" field="title"></has-error>
              </div>
              <div class="col-lg-12">
                <div class="inp-field">
                  <select
                    v-model="form.category"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('category') }"
                  >
                    <has-error :form="form" field="category"></has-error>
                    <option>Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <input
                  type="text"
                  v-model="form.skills"
                  name="skills"
                  placeholder="Skills"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('skills') }"
                >
                <has-error :form="form" field="skills"></has-error>
              </div>
              <div class="col-lg-12">
                <div class="price-sec">
                  <div class="price-br">
                    <input
                      type="text"
                      name="price"
                      v-model="form.price_from"
                      placeholder="Price_from"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('price_from') }"
                    >
                    <has-error :form="form" field="price_from"></has-error>
                    <i class="la la-dollar"></i>
                  </div>
                  <span>To</span>
                  <div class="price-br">
                    <input
                      type="text"
                      name="price_to"
                      v-model="form.price_to"
                      placeholder="Price"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('price_to') }"
                    >
                    <has-error :form="form" field="price_to"></has-error>
                    <i class="la la-dollar"></i>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <textarea
                  name="description"
                  v-model="form.description"
                  placeholder="Description"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('description') }"
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
  <!--post-topbar end-->

  <!--post-bar end-->
</template>

<script>
import CommentList from "./CommentList.vue";
export default {
  props: ["userId"],
  data() {
    return {
      post: {
        reply: ""
      },
      form: new Form({
        title: "",
        category: "",
        skills: "",
        price_from: "",
        price_to: "",
        description: "",
        post_type: "",
        id: ""
      })
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  components: {
    "comment-list": CommentList
  },
  mounted() {
    this.getPosts();
    // console.log(post.comments);
    //  this.getComments();
  },
  methods: {
    openEdit(post) {
      this.form.reset();
      $(".post-popup.job_post").addClass("active");
      $(".wrapper").addClass("overlay");
      this.form.fill(post);
      console.log(post);
    },
    openTools(post) {
      $(".ed-options").toggleClass("active");

      return false;
    },
    updatePost() {
      // Submit the form via a POST request
      this.form.put("api/post/" + this.form.id).then(response => {
        //console.log(response.data);
        // this.$store.commit("pushPost", response.data);
        // this.form.reset();
        this.form.clear();
        $(".post-popup.job_post").removeClass("active");
        $(".wrapper").removeClass("overlay");
        this.getPosts();
        this.openTools();
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
              .delete("api/post/" + id)
              .then(() => {
                swal.fire("Deleted!", "Your file has been deleted.", "success");

                Fire.$emit("AfterCreate");
                // this.getPosts();
              })
              .catch(() => {
                swal("Failed!", "There was something wronge.", "warning");
              });
          }
        });
    },
    getPosts() {
      axios.get("/api/post").then(response => {
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
    },
    listen() {
      Echo.private("App.User." + 3).notification(notification => {
        //this.content.unshift(notification.comment);
        console.log(notification.type);
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
