<template>
  <div>
    <p class="text-center" v-if="loading">Loading</p>
    <p class="text center" v-if="!loading">
      <button class="btn btn-primary" v-if="status == 0" @click="add_connect">Connect</button>
      <button
        class="btn btn-primary"
        v-if="status === 'pending'"
        @click="accept_connect"
      >Accept Connection</button>
      <span class="text success" v-if="status ==='waiting'">Waiting for response</span>
      <span class="text success" v-if="status ==='friends'">you are now friends</span>
    </p>
  </div>
</template>
  
  
  

<script>
export default {
  props: ["profile_user_id"],
  data() {
    return {
      connect: "Connect",
      status: "",
      loading: true
    };
  },

  methods: {
    add_connect() {
      this.loading = true;
      axios.get("/add_connect/" + this.profile_user_id).then(res => {
        if (res.data == 1) {
          this.status = "waiting";
          toast.fire({
            type: "success",
            title: "Connection request sent"
          });
          this.loading = false;
        }
      });
    },

    accept_connect() {
      this.loading = true;
      axios.get("/accept_connect/" + this.profile_user_id).then(res => {
        if (res.data == 1) {
          this.status = "friends";
          toast.fire({
            type: "success",
            title: "you are now friends"
          });
          this.loading = false;
        }
      });
    },

    follow() {
      axios.post("/follow", { id: this.userId }).then(res => {
        if ((res.data = "successfull")) {
          this.status = "pending";
        }

        //console.log(res.data.data);
      });
    }
  },
  mounted() {
    // console.log(this.userId);

    axios
      .get("/check_relationship_status/" + this.profile_user_id)
      .then(res => {
        this.status = res.data.status;
        this.loading = false;
        console.log(res.data.status);
      });
  }
};
</script>

<style>
</style>
