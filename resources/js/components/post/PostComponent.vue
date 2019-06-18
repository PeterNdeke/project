<style>
input[type="file"] {
  position: absolute;
  top: -500px;
}
div.file-listing img {
  max-width: 90%;
}
img {
  max-width: 150px;
  max-height: 150px;
}
span.remove-file {
  color: red;
  cursor: pointer;
}
</style>
<template>
  <div class="post-topbar">
    <div class="user-picy">
      <user-avatar></user-avatar>
    </div>
    <div class="post-st">
      <textarea
        v-model="postText"
        name="postText"
        class="form-control postText ui-autocomplete-input"
        cols="10"
        rows="3"
        required
        placeholder="What's going on? #Hashtag.. @Mention.. Link.."
        dir="auto"
        autocomplete="off"
        opened="1"
        style="height: 75px;"
      ></textarea>
      <div class="text-danger">{{errors.postText?errors.postText[0]:''}}</div>
      <div class="status-images row">
        <div v-for="(file, key) in files" :key="file.id" class="col-md-4">
          <img v-bind:ref="'image'+parseInt( key )">

          <span class="remove-file" v-on:click="removeFile( key )">Remove</span>
        </div>
      </div>
    </div>
    <!--post-st end-->

    <div class="post-st-file tools">
      <div class="pull-left">
        <div class="poster-left-select">
          <div class="publisher-hidden-option inputsm">
            <select class="form-control inputsm" v-model="postPrivacy">
              <option value>Everyone</option>
              <option value="Only me">Only me</option>

              <option value="Friends">My Friends</option>
            </select>
            <div class="text-danger">{{errors.postPrivacy?errors.postPrivacy[0]:''}}</div>
          </div>
        </div>
      </div>
      <div class="pull-left">
        <ul class="publishing-tools list-inline">
          <li class="uploadpic">
            <a href="#">
              <i class="la la-edit"></i>
            </a>
          </li>
          <li>
            <input
              type="file"
              name="image"
              ref="files"
              accept="image/*"
              multiple
              @change="imageUpload"
            >
            <i class="la la-image" v-on:click="addFiles()"></i>
          </li>

          <li class="uploadpic">
            <a href="#">
              <i class="la la-video-camera"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="pull-right">
        <button
          type="button"
          @click.prevent="submitFiles()"
          id="publisher-button"
          class="btn btn-primary"
        >
          <span>Post</span>
        </button>
      </div>
    </div>
    <!--post-st end-->
  </div>

  <!--post-topbar end-->
</template>

<script>
export default {
  data() {
    return {
      files: [],
      postText: "",
      postPrivacy: "",
      errors: []
    };
  },
  methods: {
    imageUpload() {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }
      this.getImagePreviews();
    },
    getImagePreviews() {
      for (let i = 0; i < this.files.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          let reader = new FileReader();
          reader.addEventListener(
            "load",
            function() {
              this.$refs["image" + parseInt(i)][0].src = reader.result;
            }.bind(this),
            false
          );
          reader.readAsDataURL(this.files[i]);
        }
      }
    },
    addFiles() {
      this.$refs.files.click();
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
    submitFiles() {
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
        formData.append("postText", this.postText);
        formData.append("postPrivacy", this.postPrivacy);
      }
      axios
        .post("/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.$store.commit("pushPost", response.data);
          toast.fire({
            type: "success",
            title: "Post Created in successfully"
          });
          (this.files = []), (this.postText = ""), (this.postPrivacy = "");
          this.errors = [];
          // this.$set("errors", "");
        })
        .catch(error => {
          if (error.response.status == 401) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>

<style>
</style>
