<template>
  <button
    class="btn"
    :class="type"
    :disabled="disabled"
    @click="click"
  >
    <!-- @slot Default to label prop -->
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<docs>

## Vue docs blocks 

This docs are inside `MyButton.vue` component.

### :smile: Usage

Buttons allow users to take actions, and make choices, with a single tap. Supports all default HTML Button properties. See Material Design Button for UI/UX information.

Button variants could be imported separately.

```js
import { OutlinedButton, ContainedButton, TextButton } from 'Button';
```

<!-- PROPS -->

</docs>

<script>
export default {
  props: {
    /**
     * Whether to disable button
     */
    disabled: {
      type: Boolean,
    },
    /**
     * Button type 222
     */
    type: {
      type: String,
      default: 'normal',
    },
    label: {
      type: String,
      required: false,
    },
  },
  methods: {
    click(ev) {
      /**
       * Passthrough click event
       * @type {Event}
       */
      console.log('ssss')
      this.$emit('click', ev)
    },
  },
}
</script>

<style scoped>
.btn {
  padding: 3px 10px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.btn:active {
  opacity: 0.9;
}

.btn.primary {
  color: #fff;
  background-color: #33f;
}

.btn:disabled {
  color: #777;
  background-color: #eee;
}
</style>
