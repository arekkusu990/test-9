<template>
  <div class="my-input">
    <div class="flex-1">
      <input
        :id="id"
        type="text"
        :value="modelValue"
        class="my-input__input"
        :class="inputClasses"
        @input="onInput"
      />

      <template v-if="label">
        <label :for="id" class="my-input__label" @click="onLabelClick">
          {{ label }}
        </label>
      </template>
    </div>

    <template v-if="clearable && modelValue.length">
      <div class="dsa">
        <button class="my-input__clear-button" @click="onCancel">
          Annulla
        </button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: { type: String, required: true },
    id: { type: String, required: false, default: null },
    label: { type: String, required: false, default: null },
    clearable: { type: Boolean, required: false, default: false }
  },
  data() {
    return {};
  },
  computed: {
    inputClasses() {
      let result = [];

      if (this.modelValue) result.push("my-input__input--filled");

      return result;
    }
  },
  created() {},
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.currentTarget.value);
    },
    onCancel() {
      console.log("oncancel");
      this.$emit("update:modelValue", "");
    },
    onLabelClick(event) {
      event.target.previousElementSibling.focus();
    }
  }
};
</script>

<style scoped>
.my-input {
  @apply relative bg-white flex flex-row items-center space-x-4 border border-gray-400 rounded px-3 py-3 pt-5 pb-2;
}

.my-input__input {
  @apply w-full appearance-none focus:outline-none;
  transition: border 0.2s ease-in-out;
  min-width: 280px;
}

.my-input__label {
  @apply absolute mb-0 -mt-2 pt-4 pl-3 text-gray-400 text-base mt-2 cursor-text;
  transition: all 0.2s ease-out;
  top: 0.4rem;
  left: 0;
}

.my-input__clear-button {
  @apply py-1 px-2 bg-green-600 font-medium text-white rounded transition duration-300 hover:bg-green-700;
}

.my-input__input:focus + .my-input__label,
.my-input__input:active + .my-input__label,
.my-input__input--filled + .my-input__label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  top: -0.1rem;
  color: #667eea;
}
</style>
