<template>
  <div>
    <common-app></common-app>
    <slot-app></slot-app>
    <controlled-app></controlled-app>
    <renderless-app></renderless-app>
  </div>
</template>

<script>
  import CommonApp from '../components/design/common/CommonApp.vue';
  import SlotApp from '../components/design/slots/SlotApp.vue';
  import ControlledApp from '../components/design/controlled/ControlledApp.vue';
  import RenderlessApp from '../components/design/renderless/RenderlessApp.vue';

  export default {
    components: {
      CommonApp,
      SlotApp,
      ControlledApp,
      RenderlessApp,
    },
  };
</script>

<style></style>
