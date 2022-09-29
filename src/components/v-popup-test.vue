<template>
  <div class="general__component">
    <div class="decoration__component">
      <div class="close__component" @click="closeModal">
        <span></span>
      </div>
      <div class="purple__rectangle__1"></div>
      <div class="purple__rectangle__2"></div>
      <div class="image__component">
        <div class="img"></div>
      </div>
    </div>
    <div class="form__component">
      <div class="procents__num">
        <h1>10%</h1>
        <h3>off</h3>
      </div>
      <div class="order__description">
        <h1>your first order</h1>
        <div class="purple__rectangle__3"></div>
        <span>Subscrive to recieve 10% off promocode plus exclusive offers and deals</span>
      </div>
      <div class="email__form__component">
        <form @submit.prevent="checkSubmitForm">
          <span>Email-address</span>
          <input type="email" placeholder="Enter email" v-model="email_user" required>
          <button type="submit">Subscribe!</button>
          <div class="checkbox__component">
            <input type="checkbox" class="checkbox__input" id="checkbox_id" v-model="checked">
            <label for="checkbox_id" class="label__input">I’m agree with privacy policy</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupComponent',
  props: ['activity'],
  data() {
    return {
      checked: false,
      email_user: ''
    }
  },
  methods: {
    checkSubmitForm() {
      for (let i of this.$store.getters.getEmails){
        if (this.email_user === i) {
          console.log('Email is already setted!')
          this.$store.dispatch('setStatus', 'error')
          this.email_user = ''
          this.$store.dispatch('setFlash', true)
          setTimeout(() => this.$store.dispatch('setFlash', false), 3000)
          return
        }
      }
      this.$store.dispatch('setEmails', this.email_user)
      this.$store.dispatch('setStatus', 'success')
      this.$store.dispatch('setFlash', true)
      setTimeout(() => this.$store.dispatch('setFlash', false), 3000)
      this.email_user = ''
    },
    closeModal(){
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss">
@import '../assets/popup_style.scss';
</style>