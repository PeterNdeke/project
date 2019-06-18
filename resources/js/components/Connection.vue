<template>
  <li class="nav-notifications-icon">
    <a href="#" title class="not-box-open">
      <span>
        <i class="pe pe-7s-add-user"></i>
        <span class="badge">{{pending_count}}</span>
      </span>
    </a>
    <div class="notification-box request-box">
      <div class="nt-title">
        <h4>Invitations</h4>
        <a href="explore.html" title>Find Connections</a>
      </div>
      <div class="nott-list">
        <div class="row request-usd" v-for="item in pending" :key="item.id">
          <div class="col-2">
            <img v-bind:src="item.avatar" alt>
          </div>
          <div class="col-6 request-text">
            <h4>
              <a href="user-profile.html" title>{{item.name}}</a>
            </h4>
            <span>21 mutual friends</span>
          </div>
          <div class="col-4 request-button">
            <span>
              <a
                href="#"
                class="btn btn-primary btn-sm"
                title="Confirm"
                @click.prevent="accept_connect(item.id)"
              >Accept</a>
            </span>
            <span>
              <a
                href="#"
                class="btn btn-primary btn-sm"
                title="Remove"
                @click.prevent="decline_connect(item.id)"
              >Decline</a>
            </span>
          </div>
        </div>

        <div class="view-all-nots">
          <a href="#" title>See All</a>
        </div>
      </div>
      <!--nott-list end-->
    </div>
    <!--notification-box end-->
  </li>
</template>

<script>
export default {
  mounted() {
    this.get_pending();
    this.get_pending_count();
  },
  data() {
    return {
      pending_count: 0,
      status: ""
    };
  },
  computed: {
    pending() {
      //return this.$store.state.posts;
      return this.$store.getters.get_all_pending;
    }
  },
  methods: {
    get_pending() {
      axios.get("/friend-request").then(response => {
        if (!response.data.error) {
          response.data.forEach(pending => {
            this.$store.commit("add_pending", pending);
          });
        }
      });
    },
    get_pending_count() {
      axios.get("friend_request_count").then(response => {
        this.pending_count = response.data;
      });
    },
    accept_connect(id) {
      axios.get("/accept_connect/" + id).then(res => {
        if (res.data == 1) {
          this.status = "friends";
          this.pending_count--;

          toast.fire({
            type: "success",
            title: "you are now friends"
          });
          this.get_pending();
        }
      });
    },
    decline_connect(id) {
      axios.get("/decline_connect/" + id).then(res => {
        if (res.data == 1) {
          this.status = "Connect";
          this.pending_count--;
          toast.fire({
            type: "success",
            title: "Friend Request Successfully removed"
          });
          this.get_pending();
        }
      });
    }
  }
};
</script>

<style>
</style>
