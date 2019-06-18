<template>
  <div>
    <div class="post-topbar">
      <div class="user-picy">
        <user-avatar></user-avatar>
      </div>
      <div class="post-st">
        <ul>
          <li>
            <a @click="openModal" href="#" title>Post a Project</a>
          </li>
          <li>
            <a class="post-jb active" href="#" title>Post a Job</a>
          </li>
        </ul>
      </div>
      <!--post-st end-->
    </div>
    <!--post-topbar end-->
    <div class="post-popup pst-pj">
      <div class="post-project">
        <h3>Post a project</h3>
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
                      @click.prevent="post"
                      :disabled="form.busy"
                      type="submit"
                      value="post"
                    >Post</button>
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
    <!--post-project-popup end-->

    <!--post-project-popup end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        title: "",
        category: "",
        skills: "",
        price_from: "",
        price_to: "",
        description: "",
        post_type: ""
      })
    };
  },
  methods: {
    openModal() {
      this.form.clear();
      $(".post-popup.pst-pj").addClass("active");
      $(".wrapper").addClass("overlay");
      return false;
    },
    post() {
      // Submit the form via a POST request
      this.form.post("/api/post").then(response => {
        // console.log(response);
        this.$store.commit("pushPost", response.data);
        this.form.reset();
        this.form.clear();
        $(".post-popup.pst-pj").removeClass("active");
        $(".wrapper").removeClass("overlay");
        toast.fire({
          type: "success",
          title: "Post Created in successfully"
        });
      });
    }
  },
  mounted() {
    console.log(this.avatar);
  }
};
</script>
