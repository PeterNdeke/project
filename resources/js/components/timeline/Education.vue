<template>
  <div>
    <div class="user-profile-ov">
      <h3>
        <a href="#" title class="ed-box-open" @click.prevent="openEduBox">Education</a>
        <!-- <a href="#" title class="ed-box-open">
          <i class="fa fa-pencil"></i>
        </a>-->
        <a href="#" title @click.prevent="openEduBox">
          <i class="fa fa-plus-square"></i>
        </a>
      </h3>
      <div v-for="item in education" :key="item.id">
        <h4>
          {{item.degree}}
          <i class="fa fa-pencil" @click="openEduEdit(item)"></i>
        </h4>
        <h4>{{item.school}}</h4>
        <h5>{{item.degree}}</h5>
        <span>{{item.date_from}} - {{item.date_to}}</span>
      </div>
    </div>
    <!--user-profile-ov end-->
    <div class="overview-box" id="education-box">
      <div class="overview-edit">
        <h3>Education</h3>
        <form @submit.prevent="createEducation">
          <input
            type="text"
            name="school"
            v-model="form.school"
            placeholder="School / University"
            :class="{ 'is-invalid': form.errors.has('school') }"
          >

          <div class="datepicky">
            <div class="row">
              <div class="col-lg-6 no-left-pd">
                <div class="datefm">
                  <input
                    type="date"
                    name="date_from"
                    v-model="form.date_from"
                    placeholder="From"
                    class="datepicker"
                    :class="{ 'is-invalid': form.errors.has('date_from') }"
                  >
                  <i class="fa fa-calendar"></i>
                </div>
              </div>
              <div class="col-lg-6 no-righ-pd">
                <div class="datefm">
                  <input
                    type="date"
                    name="date_to"
                    v-model="form.date_to"
                    placeholder="To"
                    class="datepicker"
                    :class="{ 'is-invalid': form.errors.has('date_to') }"
                  >
                  <i class="fa fa-calendar"></i>
                </div>
              </div>
            </div>
          </div>
          <input
            type="text"
            name="degree"
            v-model="form.degree"
            placeholder="Degree"
            :class="{ 'is-invalid': form.errors.has('degree') }"
          >
          <textarea
            placeholder="Description"
            v-model="form.description"
            :class="{ 'is-invalid': form.errors.has('description') }"
          ></textarea>
          <button type="submit" class="save">Save</button>
          <button type="submit" class="save-add">Save & Add More</button>
          <button type="submit" class="cancel" @click.prevent="closeEduBox">Cancel</button>
        </form>
        <a href="#" title class="close-box">
          <i class="la la-close"></i>
        </a>
      </div>
      <!--overview-edit end-->
    </div>
    <!--overview-box end-->
    <!--user-profile-ov end-->
    <div class="overview-box" id="education-box-edit">
      <div class="overview-edit">
        <h3>Edit Education</h3>
        <form @submit.prevent="updateEducation">
          <input
            type="text"
            name="school"
            v-model="form.school"
            placeholder="School / University"
            :class="{ 'is-invalid': form.errors.has('school') }"
          >

          <div class="datepicky">
            <div class="row">
              <div class="col-lg-6 no-left-pd">
                <div class="datefm">
                  <input
                    type="date"
                    name="date_from"
                    v-model="form.date_from"
                    placeholder="From"
                    class="datepicker"
                    :class="{ 'is-invalid': form.errors.has('date_from') }"
                  >
                  <i class="fa fa-calendar"></i>
                </div>
              </div>
              <div class="col-lg-6 no-righ-pd">
                <div class="datefm">
                  <input
                    type="date"
                    name="date_to"
                    v-model="form.date_to"
                    placeholder="To"
                    class="datepicker"
                    :class="{ 'is-invalid': form.errors.has('date_to') }"
                  >
                  <i class="fa fa-calendar"></i>
                </div>
              </div>
            </div>
          </div>
          <input
            type="text"
            name="degree"
            v-model="form.degree"
            placeholder="Degree"
            :class="{ 'is-invalid': form.errors.has('degree') }"
          >
          <textarea
            placeholder="Description"
            v-model="form.description"
            :class="{ 'is-invalid': form.errors.has('description') }"
          ></textarea>
          <button type="submit" class="save">Save</button>
          <button type="submit" class="save-add">Save & Add More</button>
          <button type="submit" class="cancel" @click.prevent="closeEduEdit">Cancel</button>
        </form>
        <a href="#" title class="close-box">
          <i class="la la-close"></i>
        </a>
      </div>
      <!--overview-edit end-->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.get_education();
  },
  data() {
    return {
      loading: true,
      form: new Form({
        id: "",
        school: "",
        degree: "",
        description: "",
        date_from: "",
        date_to: ""
      })
    };
  },
  computed: {
    education() {
      //return this.$store.state.posts;
      return this.$store.getters.all_education;
    }
  },
  methods: {
    get_education() {
      axios.get("/education").then(response => {
        if (!response.data.error) {
          response.data.forEach(education => {
            this.$store.commit("addEducation", education);
          });
        }
      });
    },
    createEducation() {
      this.form
        .post("/education")
        .then(response => {
          this.$store.commit("addEducation", response.data);
          toast.fire({
            type: "success",
            title: "Education created successfully"
          });
          //this.exprience = push(response.data);
          this.closeEduBox();
          this.form.reset();
        })
        .catch(() => {});
    },
    updateEducation() {
      this.form.put("/update-education/" + this.form.id).then(response => {
        //console.log(response.data);
        this.$store.commit("updateEducation", {
          id: this.form.id,
          data: response.data.data
        });

        this.form.clear();
        this.closeEduEdit();
        toast.fire({
          type: "success",
          title: "Education Updated in successfully"
        });
      });
    },
    openEduBox() {
      $("#education-box").addClass("open");
      // $(".wrapper").addClass("overlay");
      return false;
    },
    openEduEdit(id) {
      this.form.reset();
      $("#education-box-edit").addClass("open");
      // $(".wrapper").addClass("overlay");
      this.form.fill(id);
      return false;
    },
    closeEduEdit() {
      this.form.reset();
      $("#education-box-edit").removeClass("open");
      // $(".wrapper").removeClass("overlay");

      return false;
    },
    closeEduBox() {
      $("#education-box").removeClass("open");
      // $(".wrapper").removeClass("overlay");
      return false;
    }
  }
};
</script>

<style>
</style>
