<template>
  <div>
    <div class="user-profile-ov">
      <h3>
        <a href="#" title @click.prevent=" openLocation">Location</a>

        <a href="#" title @click.prevent=" openLocation">
          <i class="fa fa-plus-square"></i>
        </a>
      </h3>
      <h4>{{location.country}}</h4>
      <p>{{location.city}}</p>
    </div>
    <!--user-profile-ov end-->
    <div class="overview-box" id="location-box">
      <div class="overview-edit">
        <h3>Location</h3>
        <form @submit.prevent="addLocation">
          <div class="datefm">
            <select name="country" v-model="form.country">
              <option>Country</option>
              <option value="pakistan">Pakistan</option>
              <option value="england">England</option>
              <option value="india">India</option>
              <option value="usa">United Sates</option>
            </select>
            <has-error :form="form" field="country"></has-error>
            <i class="fa fa-globe"></i>
          </div>
          <div class="datefm">
            <select name="city" v-model="form.city">
              <option>City</option>
              <option value="london">London</option>
              <option value="new-york">New York</option>
              <option value="sydney">Sydney</option>
              <option value="chicago">Chicago</option>
            </select>
            <has-error :form="form" field="city"></has-error>
            <i class="fa fa-map-marker"></i>
          </div>
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
  </div>
</template>

<script>
export default {
  mounted() {
    this.getLocation();
  },
  data() {
    return {
      location: "",
      loading: true,
      form: new Form({
        id: "",
        country: "",
        city: ""
      })
    };
  },

  methods: {
    getLocation() {
      axios.get("/location").then(response => {
        if (!response.data.error) {
          this.location = response.data;
        }
      });
    },
    addLocation() {
      this.form
        .post("/location")
        .then(response => {
          this.location = response.data;
          toast.fire({
            type: "success",
            title: "Location created successfully"
          });
          this.closeLocation();
          this.form.reset();
        })
        .catch(() => {});
    },
    removeSkill(id) {
      this.form
        .delete("/skill/" + id)
        .then(() => {
          this.$store.commit("removeSkill", id);
        })
        .catch(() => {});
    },
    openLocation() {
      $("#location-box").addClass("open");
      //$(".wrapper").addClass("overlay");
      return false;
    },

    closeLocation() {
      $("#location-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    }
  }
};
</script>

<style>
</style>
