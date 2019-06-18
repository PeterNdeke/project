
<template>
  <div>
    <ul class="skill-tags" v-for="skill in this.getSkills()" :key="skill">
      <li>
        <a href="#" title>{{skill}}</a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      props: ""
    };
  },
  props: ["skills"],

  mounted() {
    //console.log(this.getSkills());
  },
  methods: {
    getSkills() {
      let names = this.skills;
      let nameArr = names.split(",");
      return nameArr;
    }
  }
};
</script>
>



