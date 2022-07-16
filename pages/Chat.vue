<template>
  <div>
    <ChatComp />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ChatComp from '../components/global/ChatComponent'

export default @Component({
  components: { ChatComp }
})

class Index extends Vue {

}
</script>
