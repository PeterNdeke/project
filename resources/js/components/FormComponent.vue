<template>
  <section class="messages-page">
    <div class="container">
      <div class="setup-container">
        <h2>Set up to your new account</h2>

        <form id="signup-form" class="signup-form">
          <div v-show="step === 1">
            <h3>
              <span class="title_text">Profile Setup</span>
            </h3>
            <fieldset>
              <div class="fieldset-content">
                <div class="form-select">
                  <label for="industry" class="form-label">Industry</label>
                  <select name="industry" id="industry" v-model="industry">
                    <option value>Select Industry</option>
                    <option value="Business Services">Business Services</option>
                    <option value="Banking">Banking</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="job-title" class="form-label">Current Job Title</label>
                  <input
                    type="text"
                    name="job"
                    id="job-title"
                    placeholder="Your Job Title"
                    v-model="job"
                  >
                  <div class="text-danger">{{errors.job?errors.job[0]:''}}</div>
                </div>
                <div class="form-group">
                  <label for="company" class="form-label">Current Job/Company</label>
                  <input type="text" name="company" id="company" v-model="company">
                  <div class="text-danger">{{errors.company?errors.company[0]:''}}</div>
                </div>

                <div class="form-group">
                  <label for="your_avatar" class="form-label">Profile Photo</label>
                  <div class="form-file">
                    <input type="file" @change="onChangeFileUpload" class="custom-file-input">
                    <span id="val"></span>
                    <span id="button">Select File</span>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary btn-lg float-right" @click.prevent="next()">Next</button>
              <div class="fieldset-footer">
                <span>Step 1 of 3</span>
              </div>
            </fieldset>
          </div>
          <div v-show="step === 2">
            <h3>
              <span class="title_text">Membership Plan</span>
            </h3>
            <fieldset>
              <h4>Select Your Membership Plan</h4>
              <div class="fieldset-content" style="padding-right: 0px;">
                <div class="form cf">
                  <div class="plan cf">
                    <input
                      type="radio"
                      name="plan"
                      id="standard-plan"
                      value="Standard"
                      v-model="picked"
                    >
                    <label class="free-label four col pricing" for="standard-plan">
                      <i class="fa fa-credit-card" aria-hidden="true"></i>
                      <h4>Standard Plan</h4>
                      <div class="pricing-value">
                        <span class="price bold">0</span>
                      </div>
                      <p>For settle companies looking to stay competitive in the market and growing with the technology</p>
                    </label>
                    <input
                      type="radio"
                      name="plan"
                      id="premium-plan"
                      value="premium"
                      v-model="picked"
                    >
                    <label class="basic-label four col pricing" for="premium-plan">
                      <i class="fa fa-credit-card" aria-hidden="true"></i>
                      <h4>Premium Plan</h4>
                      <div class="pricing-value">
                        <span class="price bold">29.99</span>
                      </div>
                      <p>For settle companies looking to stay competitive in the market and growing with the technology</p>
                    </label>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary btn-lg float-left" @click.prevent="prev()">Previous</button>
              <button class="btn btn-primary btn-lg float-right" @click.prevent="next()">Next</button>
              <div class="fieldset-footer">
                <span>Step 2 of 3</span>
              </div>
            </fieldset>
          </div>
          <div v-show="step === 3">
            <h3>
              <span class="title_text">Select Your Interest</span>
            </h3>
            <fieldset>
              <input type="checkbox" id="news" value="News" v-model="checkedNames">
              <label for="jack">News</label>
              <input
                type="checkbox"
                id="entrepreneurship"
                value="Entrepreneurship"
                v-model="checkedNames"
              >
              <label for="john">Entrepreneurship</label>
              <input type="checkbox" id="fashion" value="Fashion Trends" v-model="checkedNames">
              <label for="mike">Fashion Trends</label>

              <input type="checkbox" id="travel" value="Adventure Travel" v-model="checkedNames">
              <label for="jack">Adventure Travel</label>
              <input type="checkbox" id="home" value="Home Decorating" v-model="checkedNames">
              <label for="john">Home Decorating</label>
              <input type="checkbox" id="happiness" value="Happiness" v-model="checkedNames">
              <label for="mike">Happiness</label>

              <input type="checkbox" id="sports" value="Sports" v-model="checkedNames">
              <label for="jack">Sports</label>
              <input type="checkbox" id="wine" value="Wine Tasting" v-model="checkedNames">
              <label for="john">Wine Tasting</label>
              <input type="checkbox" id="book" value="Book Reviews" v-model="checkedNames">
              <label for="mike">Book Reviews</label>

              <input type="checkbox" id="crafting" value="Crafting" v-model="checkedNames">
              <label for="jack">Crafting</label>
              <input type="checkbox" id="photo" value="Photography" v-model="checkedNames">
              <label for="john">Photography</label>
              <input type="checkbox" id="technology" value="Technology" v-model="checkedNames">
              <label for="mike">Technology</label>

              <input type="checkbox" id="spirituality" value="Spirituality" v-model="checkedNames">
              <label for="jack">Spirituality</label>
              <input type="checkbox" id="photo" value="Photography" v-model="checkedNames">
              <button class="btn btn-primary btn-lg float-left" @click.prevent="prev()">Previous</button>

              <button
                class="btn btn-secondary btn-lg float-right"
                @click.prevent="submitFile()"
              >Submit</button>
              <div class="fieldset-footer">
                <span>Step 3 of 3</span>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!--messages-page end-->
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      step: 1,
      selectedFile: "",
      checkedNames: [],
      company: null,
      industry: null,
      job: null,
      errors: [],
      picked: null
    };
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    onChangeFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },

    submitFile() {
      let formData = new FormData();
      formData.append("image", this.selectedFile);
      formData.append("industry", this.industry);
      formData.append("job", this.job);

      formData.append("company", this.company);
      formData.append("interest", this.checkedNames);
      formData.append("plan", this.picked);

      axios
        .post("/api/account-setup", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          window.location.href = "/feed";
        })
        .catch(error => {
          if (error.response.status == 401) {
            console.log(error.response.data.errors);
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>
