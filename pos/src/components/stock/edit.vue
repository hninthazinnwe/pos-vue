<template>
  <div class="content">
    <div class="stock-fm">
      <vs-row>
        <vs-col w="12">
          <h4 class="not-margin">
            <b>Stock Edit</b>
          </h4>
          <div class="stock-fm">
            <vs-row>
              <vs-col w="3">
                <label>Code</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="stock.code" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Name</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="stock.name" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Myanmar Name</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="stock.mmname" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Phone</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="stock.phone" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Address</label>
              </vs-col>
              <vs-col w="3">
                <textarea type="text" v-model="stock.address" class="my-textarea"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Email</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="stock.email" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col offset="3" w="3">
                <vs-button
                  size="medium"
                  @click="updateStock"
                >
                  Update
                </vs-button>
              </vs-col>
              <vs-col w="3">
                <vs-button
                  size="medium"
                  @click="close"
                >
                  Close
                </vs-button>
              </vs-col>
            </vs-row>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  data:() => ({
    stock: {}
  }),
  created() {
    this.$store.dispatch('editStock')
    this.stock = this.$store.state.stock.stock
  },
  methods: {
    updateStock() {
      return this.$store.dispatch('updateStock')
    },
    close() {
      this.stock = {}
      this.$router.push('/stock')
    }
  }
}
</script>
<style scoped>
  .stock-fm {
    /* width: 700px; */
    margin : 20px 200px;
    padding: 20px 10px;
    box-shadow: #ddd;
    background: #eee;
  }
  .content {
    margin: 0px;
    border: 3px solid #000;
    height: 650px;
    padding: 5px;
  }
</style>