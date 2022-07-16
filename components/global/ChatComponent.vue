<template>
  <div>
    <div class="container">
      <div id="glomareChat">
        <div>
          <div>
            <h4 class="text-center">
              {{ title }}
            </h4>
            <br>
            <div id="status" />
            <div id="chat">
              <v-form v-if="isChatOpen" v-model="valid">
                <v-container>
                  <v-row>
                    <v-text-field
                      id="username"
                      v-model="name"
                      :rules="nameRules"
                      :counter="10"
                      label="First name"
                      required
                      placeholder="Enter name..."
                    />

                    <v-btn
                      id="btnSendName"
                      class="ma-2"
                      outlined
                      color="indigo"
                      @click.prevent="sendNameInChat"
                    >
                      Send
                    </v-btn>
                  </v-row>
                </v-container>
              </v-form>

              <div v-else>
                <div id="messages">
                  <ul>
                    <li v-for="message of messages" :key="message.text">
                      {{ message.name }}: {{ message.text }}
                    </li>
                  </ul>
                </div>

                <v-textarea
                  id="textarea"
                  v-model="text"
                  solo
                  name="textarea"
                  rows="2"
                  row-height="15"
                  placeholder="Enter message..."
                />

                <div class="btn-chat">
                  <v-btn
                    id="send"
                    class="ma-2"
                    outlined
                    color="indigo"
                    @click.prevent="sendMessage"
                  >
                    Send
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import io from 'socket.io-client'

const { State, Mutation } = namespace('global')

export default @Component({
  data: () => ({
    title: 'GloMaRe Chat',
    name: '',
    text: '',
    messages: [],
    socket: io(),
    isChatOpen: true,
    restApiUrl: 'http://localhost:3333',

    valid: false,
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ]
  })
})

class Index extends Vue {
    @State isLogin
    @Mutation changeStatusAuth

    sendMessage () {
      if (this.validateInput()) {
        const message = {
          name: this.name,
          text: this.text
        }
        this.socket.emit('msgToServer', message)
        this.text = ''
      }
    }

    receivedMessage (message) {
      this.messages.push(message)
    }

    validateInput () {
      return this.name.length > 0 && this.text.length > 0
    }

    sendNameInChat () {
      this.isChatOpen = false
    }

    mounted () {
      this.socket = io(this.restApiUrl)
      this.socket.on('msgToClient', (message) => {
        this.receivedMessage(message)
      })
    }
}
</script>

<style lang="scss" scoped>
  #messages {
    height: 300px;
    overflow-y: scroll;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    width: 100%;
    margin-bottom: 25px;
    padding: 20px;
  }

  #glomareChat {
    margin-top: 2rem;
  }

  .btn-chat{
    display: flex;
    justify-content: flex-end;
  }
</style>
