<template>
  <div class="page page__home">
    <div class="page__home__filters">
      <InputText
        v-model="searchFilter"
        name="todos-filter-title"
        data-qa="todos-filter-title"
        label="Filter by 'title'"
        placeholder="title"
      />
    </div>

    <TodoList v-if="formatTodosList.length" :list="formatTodosList" />

    <b v-else style="font-size: 3em">Nothing to show</b>

    <Pagination
      v-if="filteredTodoList.length > itemsPerShow"
      v-model="activePageNumber"
      :total-length="filteredTodoList.length"
      :items-per-show="itemsPerShow"
    />
  </div>
</template>

<script>
import Pagination from '../components/Pagination'
import InputText from '../components/inputs/Text'
import TodoList from '../components/TodoList'

const ITEMS_PER_SHOW = 7

export default {
  name: 'IndexPage',
  components: { TodoList, InputText, Pagination },
  async asyncData({ store }) {
    await store.dispatch('todos/load')
  },
  data() {
    return {
      searchFilter: '',
      activePageNumber: 1,
    }
  },
  computed: {
    showedTodoList() {
      const startSliceIndex = (this.activePageNumber - 1) * ITEMS_PER_SHOW

      return this.filteredTodoList.slice(
        startSliceIndex,
        startSliceIndex + ITEMS_PER_SHOW
      )
    },
    filteredTodoList() {
      if (this.searchFilter) {
        return this.$store.state.todos.list.filter((item) => {
          return ~item.title.indexOf(this.searchFilter)
        })
      }

      return this.$store.state.todos.list
    },
    itemsPerShow() {
      return ITEMS_PER_SHOW
    },
    formatTodosList() {
      return this.showedTodoList.map((item) => {
        return Object.keys(item).reduce((accumulator, itemKey) => {
          accumulator.push({
            title: itemKey,
            value: item[itemKey],
          })

          return accumulator
        }, [])
      })
    },
  },
  watch: {
    searchFilter() {
      this.activePageNumber = 1
    },
  },
}
</script>
