<template>
  <div>
    <div class="user-profile-ov st2">
      <h3>
        <a href="#" title class="exp-bx-open" @click.prevent="openExperienceBox">Experience</a>

        <a href="#" title class="exp-bx-open">
          <i class="fa fa-plus-square" @click.prevent="openExperienceBox"></i>
        </a>
      </h3>
      <div v-for="item in  experiences" :key="item.id">
        <h4>
          {{item.job_role}}
          <i class="fa fa-pencil" @click.prevent="openExperienceBoxEdit(item)"></i>
        </h4>
        <h5>{{item.company}}</h5>
        <p>
          {{item.date_from}} – {{item.date_to}}
          <br>
          {{item.location}}
        </p>
      </div>
    </div>
    <!--user-profile-ov end-->
    <div class="overview-box" id="experience-box">
      <div class="overview-edit">
        <h3>Experience</h3>
        <form @submit.prevent="createExperience">
          <div class="form-group">
            <input
              type="text"
              v-model="form.job_role"
              name="job_role"
              placeholder="Job Role"
              :class="{ 'is-invalid': form.errors.has('job_role') }"
            >
            <has-error :form="form" field="job_role"></has-error>
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="form.company"
              name="company"
              placeholder="Company"
              :class="{ 'is-invalid': form.errors.has('company') }"
            >
            <has-error :form="form" field="company"></has-error>
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="form.subject"
              name="subject"
              placeholder="Subject"
              :class="{ 'is-invalid': form.errors.has('subject') }"
            >
            <has-error :form="form" field="subject"></has-error>
          </div>
          <textarea
            v-model="form.experience"
            name="experience"
            :class="{ 'is-invalid': form.errors.has('experience') }"
          ></textarea>
          <input type="date" v-model="form.date_from" name="date_from">
          <has-error :form="form" field="date_from"></has-error>
          <input type="date" v-model="form.date_to" name="date_to">
          <input
            type="text"
            v-model="form.location"
            name="location"
            placeholder="Location"
            :class="{ 'is-invalid': form.errors.has('location') }"
          >
          <has-error class="text-danger" :form="form" field="location"></has-error>

          <button type="submit" class="save" :disabled="form.busy">Save</button>
          <button type="submit" class="save-add">Save & Add More</button>
          <button type="submit" class="cancel" @click.prevent="closeExperienceBox">Cancel</button>
        </form>
        <a href="#" title class="close-box">
          <i class="la la-close"></i>
        </a>
      </div>
      <!--overview-edit end-->
    </div>
    <!--overview-box end-->
    <div class="overview-box" id="experience-box-edit">
      <div class="overview-edit">
        <h3>Experience</h3>
        <form @submit.prevent="updateExperience">
          <div class="form-group">
            <input
              type="text"
              v-model="form.job_role"
              name="job_role"
              placeholder="Job Role"
              :class="{ 'is-invalid': form.errors.has('job_role') }"
            >
            <has-error :form="form" field="job_role"></has-error>
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="form.company"
              name="company"
              placeholder="Company"
              :class="{ 'is-invalid': form.errors.has('company') }"
            >
            <has-error :form="form" field="company"></has-error>
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="form.subject"
              name="subject"
              placeholder="Subject"
              :class="{ 'is-invalid': form.errors.has('subject') }"
            >
            <has-error :form="form" field="subject"></has-error>
          </div>
          <textarea
            v-model="form.experience"
            name="experience"
            :class="{ 'is-invalid': form.errors.has('experience') }"
          ></textarea>
          <input type="date" v-model="form.date_from" name="date_from">
          <has-error :form="form" field="date_from"></has-error>
          <input type="date" v-model="form.date_to" name="date_to">
          <input
            type="text"
            v-model="form.location"
            name="location"
            placeholder="Location"
            :class="{ 'is-invalid': form.errors.has('location') }"
          >
          <has-error class="text-danger" :form="form" field="location"></has-error>

          <button type="submit" class="save" :disabled="form.busy">Save</button>
          <button type="submit" class="save-add">Save & Add More</button>
          <button type="submit" class="cancel" @click.prevent="closeExperienceBoxEdit">Cancel</button>
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
    this.get_experience();
  },
  data() {
    return {
      loading: true,
      form: new Form({
        id: "",
        job_role: "",
        company: "",
        subject: "",
        experience: "",
        date_from: "",
        date_to: "",
        location: ""
      })
    };
  },
  computed: {
    experiences() {
      //return this.$store.state.posts;
      return this.$store.getters.all_experiences;
    }
  },
  methods: {
    get_experience() {
      axios.get("/experience").then(response => {
        if (!response.data.error) {
          response.data.forEach(experience => {
            this.$store.commit("addExperience", experience);
          });
        }
      });
    },

    createExperience() {
      this.form
        .post("/experience")
        .then(response => {
          $("#addNew").modal("hide");
          this.$store.commit("addExperience", response.data);
          toast.fire({
            type: "success",
            title: "Overview created successfully"
          });
          //this.exprience = push(response.data);
          this.closeExperienceBox();
          this.form.reset();
        })
        .catch(() => {});
    },
    updateExperience() {
      this.form.put("/update-experience/" + this.form.id).then(response => {
        //console.log(response.data);
        this.$store.commit("updateExperience", {
          id: this.form.id,
          data: response.data.data
        });

        this.form.clear();
        this.closeExperienceBoxEdit();
        toast.fire({
          type: "success",
          title: "Experience Updated in successfully"
        });
      });
    },
    openExperienceBox() {
      $("#experience-box").addClass("open");
      //$(".wrapper").addClass("overlay");
      return false;
    },
    openExperienceBoxEdit(id) {
      this.form.reset();

      $("#experience-box-edit").addClass("open");
      //$(".wrapper").addClass("overlay");
      this.form.fill(id);
      return false;
    },

    closeExperienceBox() {
      $("#experience-box").removeClass("open");
      // $(".wrapper").removeClass("overlay");
      // return false;
    },
    closeExperienceBoxEdit() {
      $("#experience-box-edit").removeClass("open");
      // $(".wrapper").removeClass("overlay");
      // return false;
    }
  }
};
</script>

<style>
</style>
