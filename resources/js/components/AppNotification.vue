<template>
  <li class="nav-notifications-icon">
    <a href="#" title class="not-box-open">
      <span :style="{'color':colors}">
        <i class="pe pe-7s-bell"></i>
        {{all_nots_count}}
      </span>
    </a>
    <div class="notification-box">
      <div class="nt-title">
        <h4>Setting</h4>
        <a href="#" title>Clear all</a>
      </div>
      <div class="nott-list" v-for="item in this.all_nots" :key="item.id">
        <div class="notfication-details">
          <div class="noty-user-img">
            <img v-bind:src="item.data.avatar" alt>
          </div>
          <div class="notification-info">
            <h3>
              <a href="/notifications" title>{{item.data.name}}</a>
              {{item.data.message}}
            </h3>

            <span>{{item.created_at | myDate}}</span>
          </div>
          <!--notification-info -->
        </div>
      </div>
      <hr>

      <div class="view-all-nots">
        <a href="#" title>View All Notification</a>
      </div>
    </div>
    <!--notification-box end-->
  </li>
</template>

<script>
export default {
  // data() {
  //   return {
  //     read: {},
  //     unread: {},
  //     unreadCount: 0
  //   };
  // },
  mounted() {
    this.get_unread();
  },
  // computed: {
  //   // colors() {
  //   //   return this.unreadCount > 0 ? "red" : "#ffebee";
  //   // },
  //   all_nots_count() {
  //     return this.$store.getters.all_nots_count;
  //   }
  // },
  // created() {
  //   this.getNotifications();
  //   Echo.private("App.User." + "3").notification(notification => {
  //     // this.playSound();
  //     console.log(notification);
  //     //this.unread.unshift(notification);
  //     this.unreadCount++;
  //   });
  // },
  methods: {
    get_unread() {
      axios.get("/get_unread").then(nots => {
        nots.data.forEach(not => {
          this.$store.commit("add_not", not);
        });
      });
    }
    // getNotifications() {
    //   axios.post("/notifications").then(res => {
    //     this.read = res.data.read;
    //     this.unread = res.data.unread;
    //     this.unreadCount = res.data.unread.length;
    //   });
    // },
    // readIt(notification) {
    //   axios.post("/markAsRead", { id: notification.id }).then(res => {
    //     this.unread.splice(notification, 1);
    //     this.read.push(notification);
    //     this.unreadCount--;
    //   });
    // }
  },
  computed: {
    all_nots_count() {
      return this.$store.getters.all_nots_count;
    },

    all_nots() {
      return this.$store.getters.all_nots;
    },
    colors() {
      return this.all_nots_count > 0 ? "red" : "#ffebee";
    }
  }
};
</script>

<style>
</style>
