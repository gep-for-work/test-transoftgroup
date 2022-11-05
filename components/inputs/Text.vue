<template>
  <label class="form__item input-text">
    <span v-if="label" class="form__label">{{ label }}</span>

    <input
      ref="input"
      v-model="input"
      type="text"
      :name="name"
      :inputmode="type === 'number' ? 'numeric' : type"
      :data-qa="dataQa"
      :disabled="isDisabled"
      :readonly="isReadonly"
      :placeholder="placeholder"
      :autocomplete="isAutocomplete ? 'on' : 'off'"
      class="form__item__input form__input"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @keyup="$emit('keyup', $event)"
      @keydown="$emit('keydown', $event)"
    />

    <transition>
      <div class="form__error">
        <slot />
      </div>
    </transition>
  </label>
</template>

<script>
const MODEL_EVENT_NAME = 'update-input-text'

export default {
  name: 'InputText',
  model: {
    prop: 'model',
    event: MODEL_EVENT_NAME,
  },
  props: {
    model: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator(prop) {
        return [
          'url',
          'tel',
          'text',
          'email',
          'search',
          'number',
          'decimal',
          'password',
        ].includes(prop)
      },
    },
    name: {
      type: String,
      required: true,
      validator(prop) {
        return !!prop
      },
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    isAutocomplete: {
      type: Boolean,
      default: true,
    },
    isDisabled: {
      type: Boolean,
    },
    isReadonly: {
      type: Boolean,
    },
    dataQa: {
      type: String,
      required: true,
      validator(prop) {
        return !!prop
      },
    },
  },
  computed: {
    input: {
      get() {
        return this.model
      },
      set(payload) {
        this.$emit(MODEL_EVENT_NAME, payload)
      },
    },
  },
}
</script>
