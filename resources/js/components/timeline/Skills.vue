<template>
  <div>
    <div class="user-profile-ov">
      <h3>
        <a href="#" title @click.prevent="openSkills">Skills</a>

        <a href="#" @click.prevent="openSkills">
          <i class="fa fa-plus-square"></i>
        </a>
      </h3>
      <ul>
        <li v-for="item in skills" :key="item.id">
          <a href="#" title>{{item.skill}}</a>
        </li>
      </ul>
    </div>
    <!--user-profile-ov end-->
    <div class="overview-box" id="skills-box">
      <div class="overview-edit">
        <h3>Skills</h3>
        <ul>
          <li v-for="item in skills" :key="item.id">
            <a href="#" title class="skl-name">{{item.skill}}</a>
            <a href="#" title class="close-skl" @click.prevent="removeSkill(item.id)">
              <i class="la la-close"></i>
            </a>
          </li>
        </ul>
        <form>
          <input
            type="text"
            name="skill"
            v-model="form.skill"
            placeholder="Skills"
            :class="{ 'is-invalid': form.errors.has('skill') }"
            @keyup.enter="addSkill"
          >
          <has-error :form="form" field="skill"></has-error>
          <button type="submit" class="save" @click.prevent="addSkill">Enter</button>

          <button type="submit" class="cancel" @click.prevent="closeSkills">Cancel</button>
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
    this.getSkills();
  },
  data() {
    return {
      loading: true,
      form: new Form({
        id: "",
        skill: ""
      })
    };
  },
  computed: {
    skills() {
      //return this.$store.state.posts;
      return this.$store.getters.all_skills;
    }
  },
  methods: {
    getSkills() {
      axios.get("/skills").then(response => {
        if (!response.data.error) {
          response.data.forEach(skill => {
            this.$store.commit("addSkill", skill);
          });
        }
      });
    },
    addSkill() {
      this.form
        .post("/skills")
        .then(response => {
          this.$store.commit("addSkill", response.data);

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
    openSkills() {
      $("#skills-box").addClass("open");
      //$(".wrapper").addClass("overlay");
      return false;
    },

    closeSkills() {
      $("#skills-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    }
  }
};
</script>

<style>
</style>
