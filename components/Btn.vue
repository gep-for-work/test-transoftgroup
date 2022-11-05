<template>
  <button
    class="btn"
    :type="type"
    :disabled="isDisabled"
    @click="$emit('click', $event)"
    @submit="$emit('submit', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    type: {
      type: String,
      default: 'button',
      validator(prop) {
        return ['button', 'submit', 'reset'].includes(prop)
      },
    },
    isDisabled: {
      type: Boolean,
    },
  },
}
</script>
