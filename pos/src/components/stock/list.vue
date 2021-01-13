
<template>
  <div class="content">
    <vs-row>
      <vs-col w="2">
        <vs-input
          border
          icon-after
          placeholder="Enter Search Text"
          v-model="searchTxt"
          @keydown.enter="search"
        >
          <template #icon>
            <i class='bx bx-search'></i>
          </template>
        </vs-input>
      </vs-col>
      <vs-col w="2">
        <stock></stock>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col w="8"
        class="left-div"
      >
        <h3>Stock List</h3>
        <vs-table v-model="selected">
          <template #thead>
            <vs-tr>
              <vs-th class="no">
                No
              </vs-th>
              <vs-th class="code">
                Code
              </vs-th>
              <vs-th class="name">
                Name
              </vs-th>
              <vs-th class="name">
                MMName
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th class="action">
                Action
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(row, i) in $vs.getPage(stocks, page, max)"
              :data="row"
              :is-selected="selected == row"
            >
              <vs-td class="no">
                {{ row.id }}
              </vs-td>
              <vs-td class="code">
                {{ row.code }}
              </vs-td>
              <vs-td class="name">
                {{ row.name }}
              </vs-td>
              <vs-td class="name">
                {{ row.mmname }}
              </vs-td>
              <vs-td>
                {{ row.email }}
              </vs-td>
              <vs-td class="action">
                <vs-row>
                  <vs-button
                    border
                    size="small"
                    @click="getStock(row)"
                  >
                    Edit
                  </vs-button>
                  <vs-button
                    border
                    danger
                    size="small"
                    @click="deleteStock(row)"
                  >
                    Delete
                  </vs-button>
                </vs-row>
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength(stocks, max)" />
          </template>
        </vs-table>
      </vs-col>
      <vs-col w="4"
        class="right-div"
      >
        <span class="data">
          <pre>
            <h3>Stock Detail</h3>
            <span class="label-text">Code :</span> {{ selected ? selected.code : '' }}
            <span class="label-text">Name :</span> {{ selected ? selected.name : '' }}
            <span class="label-text">Myanmar Name :</span> {{ selected ? selected.mmname : '' }}
          </pre>
        </span>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import stock from './create.vue'

export default {
  components: {
    'stock' : stock,
  },
  data:() => ({
    page: 1,
    max: 8,
    selected: null,
    stocks: [],
    searchTxt: ''
  }),
  methods: {
    getStockList() {
      this.stocks = this.$store.dispatch('getStockList')
    },
    getStock() {
      this.$router.push('/stockedit')
      this.$store.dispatch('getStock')
    },
    deleteStock(item) {
      // this.$store.dispatch('deleteStock')
      let i = this.stocks.map(item => item.id).indexOf(item.id);
      this.stocks.splice(i, 1)
    },
    search() {
      // var temp = []
      var temp = this.stocks.map(item => {
        if(
            item.name == this.searchTxt || 
            item.code == this.searchTxt || 
            item.email == this.searchTxt
          ){
          return item
        }
      })
      this.stocks = []
      this.stocks.push(temp)
    }
  },
  created() {
    // this.getStockList()
    this.stocks = this.$store.state.stock.stocks
  }
}
</script>
<style scoped>
.content {
  margin: 0px;
  border: 3px solid #000;
  height: 650px;
  padding: 5px;
} 
</style>

        