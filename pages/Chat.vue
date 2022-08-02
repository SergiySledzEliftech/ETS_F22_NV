<template>
  <div>
    <ChatComp />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import ChatComp from '../components/global/ChatComponent';

export default @Component({
  components: { ChatComp },
  auth: false
})

class Chat extends Vue {

}
</script>
