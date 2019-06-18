<template>
  <div>
    <div class="user-profile-ov">
      <h3>
        <a href="#" @click="newModal">Overview</a>
        <a href="#" title>
          <i class="fa fa-pencil"></i>
        </a>
      </h3>
      <p>{{overview.overview}}</p>
    </div>
    <!--user-profile-ov end-->

    <div class="overview-box" id="overview-box">
      <div class="overview-edit">
        <h3>Overview</h3>
        <span>5000 character left</span>
        <form>
          <textarea></textarea>
          <button type="submit" class="save">Save</button>
          <button type="submit" class="cancel">Cancel</button>
        </form>
        <a href="#" title class="close-box">
          <i class="la la-close"></i>
        </a>
      </div>
      <!--overview-edit end-->
    </div>
    <!--overview-box end-->

    <!--overview-box end-->
    <!-- Modal -->
    <div
      class="modal fade"
      id="addNew"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addNewLabel">Add Overview</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="createOverview">
            <div class="modal-body">
              <div class="form-group">
                <textarea
                  v-model="form.overview"
                  cols="5"
                  rows="10"
                  name="overview"
                  placeholder="Overview"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('overview') }"
                ></textarea>
                <has-error :form="form" field="overview"></has-error>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.get_overview();
  },
  data() {
    return {
      overview: "",
      loading: true,
      form: new Form({
        id: "",
        overview: ""
      })
    };
  },
  methods: {
    get_overview() {
      axios.get("/overview").then(response => {
        this.overview = response.data;
      });
    },
    oveview() {
      //$("#overview-box").addClass("active");
      // $(".wrapper").addClass("overlay");
      // return false;
      $(".overview-box").addClass("active");
      $(".wrapper").addClass("overlay");
      return false;
    },
    createOverview() {
      this.form
        .post("/overview")
        .then(response => {
          $("#addNew").modal("hide");
          toast.fire({
            type: "success",
            title: "Overview created successfully"
          });
          this.overview = response.data;
        })
        .catch(() => {});
    },
    newModal() {
      // this.editmode = false;
      this.form.reset();
      $("#addNew").modal("show");
    },
    closeOverview() {
      $("#overview-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    }
  }
};
</script>

<style>
</style>
