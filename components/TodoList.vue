<template>
  <div class="todo-list">
    <div class="todo-list__wrap">
      <InfoCard
        v-for="(infoItem, index) in list"
        :key="index"
        :fields="infoItem"
        class="todo-list__item"
      />
    </div>
  </div>
</template>

<script>
import InfoCard from './InfoCard'

export default {
  name: 'TodoList',
  components: { InfoCard },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>
