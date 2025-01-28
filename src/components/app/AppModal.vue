<script setup lang="ts">
  interface Props {
    modelValue: boolean;
    title: string;
  }

  withDefaults(defineProps<Props>(), {
    modelValue: false,
    title: '',
  });

  defineEmits<{
    'update:modelValue': [value: boolean];
  }>();
</script>

<template>
  <transition>
    <div v-if="modelValue">
      <div class="modal-backdrop fade show"></div>
      <div
        class="modal fade show d-block"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header">
                <h5 id="exampleModalLabel" class="modal-title">{{ title }}</h5>
                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  @click="$emit('update:modelValue', false)"
                ></button>
              </slot>
            </div>
            <div class="modal-body">
              <slot />
            </div>
            <div class="modal-footer">
              <slot name="actions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

  .v-enter-to,
  .v-leave-from {
    opacity: 1;
  }
</style>
