<template>
  <div class="pagination">
    <div class="pagination__wrap">
      <Btn
        :is-disabled="activeNumber === 1"
        class="pagination__item"
        @click="activeNumber--"
      >
        ←
      </Btn>

      <template v-if="totalNumbers >= 5">
        <select
          v-model="activeNumber"
          class="pagination__item pagination__item--numbers-list"
        >
          <option v-for="index in totalNumbers" :key="index" :value="index">
            {{ index }}
          </option>
        </select>
      </template>

      <template v-else>
        <Btn
          v-for="number in totalNumbers"
          :key="number"
          class="pagination__item"
          :class="{ 'pagination__item--active': number === activeNumber }"
          @click="activeNumber = number"
        >
          {{ number }}
        </Btn>
      </template>

      <Btn
        :is-disabled="activeNumber === totalNumbers"
        class="pagination__item"
        @click="activeNumber++"
      >
        →
      </Btn>
    </div>
  </div>
</template>

<script>
import Btn from './Btn'
const MODEL_EVENT_NAME = 'update-pagination'

export default {
  name: 'Pagination',
  components: { Btn },
  model: {
    prop: 'model',
    event: MODEL_EVENT_NAME,
  },
  props: {
    model: {
      type: Number,
      default: 1,
    },
    totalLength: {
      type: Number,
      required: true,
      validator(prop) {
        return !isNaN(prop) && Number.isInteger(prop) && prop > 0
      },
    },
    itemsPerShow: {
      type: Number,
      required: true,
      validator(prop) {
        return !isNaN(prop) && Number.isInteger(prop) && prop > 0
      },
    },
  },
  computed: {
    activeNumber: {
      get() {
        return this.model
      },
      set(payload) {
        this.$emit(MODEL_EVENT_NAME, payload)
      },
    },
    totalNumbers() {
      return Math.ceil(this.totalLength / this.itemsPerShow)
    },
  },
}
</script>
