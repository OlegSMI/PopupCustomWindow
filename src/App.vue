<template>
  <transition name="flash" v-show="this.$store.getters.getFlash">
    <flashMessage :status="this.$store.getters.getStatus">
      <template v-slot:success v-if="this.$store.getters.getStatus==='success'" >
        You have successfully subscribed to the newsletter
      </template>
      <template v-slot:error v-else-if="this.$store.getters.getStatus==='error'">
        You have already subscribed to the newsletter
      </template>
    </flashMessage>
  </transition>
  <transition name="pop">
    <div v-show="modalActive" class="main__component">
      <PopupTest :activity="modalActive" @close="togglePopup"/>
    </div>
  </transition>
  <button class="open_popup__component" @click="togglePopup">Open submit form</button>
</template>

<script>
import PopupTest from './components/v-popup-test.vue'
import FlashMessage from './components/v-flash-message.vue'

export default {
  name: 'App',
  components: {
    PopupTest,
    FlashMessage
  },
  data() {
    return {
      modalActive: false,
    }
  },
  methods: {
    togglePopup(){
      this.modalActive=!this.modalActive
    }
  }
}
</script>

<style lang="scss">
@import './assets/button_style.scss';
</style>
