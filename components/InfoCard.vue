<template>
  <div class="info-card">
    <div v-for="(item, index) in fields" :key="index" class="info-card__field">
      <b class="info-card__title">{{ item.title }}</b>
      <span class="info-card__value">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    fields: {
      type: Array,
      required: true,
      validator(prop) {
        return prop.every((item) => {
          return (
            Object.prototype.hasOwnProperty.call(item, 'title') &&
            Object.prototype.hasOwnProperty.call(item, 'value')
          )
        })
      },
    },
  },
}
</script>
