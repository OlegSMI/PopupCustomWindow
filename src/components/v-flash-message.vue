<template>
  <div class="flash_message__component" :class="status==='error' ? 'error' : status==='success'? 'success' : ''" >
    <slot name="success"></slot>
    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
    props: ['status'],
}
</script>
