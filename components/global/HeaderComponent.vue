<template>
  <div class="header-wrap container">
    <!-- Serhii-->
    <!-- # Responsive Navbar Menu-->
    <!-- https://www.cssscript.com/responsive-single-level-dropdown-menu/-->

    <!-- Section: Header -->
    <header class="header">
      <section class="header-container">
        <div class="wrapper">
          <a href="/" class="brand">GloMaRe</a>

          <span id="overlay" class="overlay" />
          <nav id="navbar" class="navbar">
            <ul class="menu">
              <li class="menu-item menu-item-child">
                <a href="#" data-toggle="sub-menu">Catalog<i class="expand" /></a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="#">Basic</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Standard</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Premium</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Professional</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item menu-item-child">
                <a href="#" data-toggle="sub-menu">Services<i class="expand" /></a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="#">Design Project</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Development Project</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Branding Project</a>
                  </li>
                  <li class="menu-item">
                    <a href="#">Others Project</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a href="#">About</a>
              </li>
            </ul>

            <div class="header-social-mobile">
              <div class="header-social">
                <a class="header-viber" href="#">
                  <img src="~/assets/img/viber.png">
                </a>
                <a class="header-telegram" href="#">
                  <img src="~/assets/img/telegram.png">
                </a>
                <a class="header-watsapp" href="#">
                  <img src="~/assets/img/whatsapp.png">
                </a>
              </div>
            </div>

            <div class="login-profile-mobile">
              <div class="login-profile">
                <v-btn
                  v-if="isLogin"
                  class="ma-2"
                  outlined
                  color="indigo"
                >
                  Profile
                </v-btn>
                <v-btn
                  v-else
                  class="ma-2 btn-red"
                  outlined
                  color="indigo"
                >
                  Sign in
                </v-btn>
              </div>
            </div>
          </nav>

          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <div class="header-city" v-bind="attrs" v-on="on">
                {{ selectedCity }}
              </div>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in itemsCity"
                :key="index"
                class="header-city-item"
                @click="changeCity"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <div class="header-social">
            <a class="header-viber" href="#">
              <img src="~/assets/img/viber.png">
            </a>
            <a class="header-telegram" href="#">
              <img src="~/assets/img/telegram.png">
            </a>
            <a class="header-watsapp" href="#">
              <img src="~/assets/img/whatsapp.png">
            </a>
          </div>
          <!--          <v-btn v-if="isLogin" class="btn_primary" depressed color="primary">-->
          <!--            Sign in-->
          <!--          </v-btn>-->

          <div class="login-profile">
            <v-btn
              v-if="isLogin"
              class="ma-2"
              outlined
              color="indigo"
            >
              Profile
            </v-btn>
            <v-btn
              v-else
              class="ma-2 btn-red"
              outlined
              color="indigo"
            >
              Sign in
            </v-btn>
          </div>

          <button id="burger" type="button" class="burger">
            <span class="burger-line" />
            <span class="burger-line" />
            <span class="burger-line" />
            <span class="burger-line" />
          </button>
        </div>
      </section>
    </header>
  </div>
</template>
<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import TestComp from '../../components/TestComponent'

const { State, Mutation } = namespace('global')

export default @Component({
  components: { TestComp },
  data: () => ({
    itemsCity: [
      { title: 'Kyiv' },
      { title: 'Kharkiv' },
      { title: 'Chernivtsi' },
      { title: 'Poltava' },
      { title: 'Dnipro' }
    ]
  })
})

class Index extends Vue {
  // При першому завантаженні сторінки назву міста завантажуємо з VUEX store
  @State selectedCity
  @Mutation changeCity

  @State isLogin
  @Mutation changeStatusAuth

  title = 'Welcome to the ETS_F22_NV project!';

  mounted () {
    this.$nextTick(function () {
      // Код, который будет запущен только после
      // отрисовки всех представлений
      console.log('Start')
      const navbarMenu = document.getElementById('navbar')
      const burgerMenu = document.getElementById('burger')
      const overlayMenu = document.getElementById('overlay')

      // Toggle Menu Function
      burgerMenu.addEventListener('click', toggleMenu)
      overlayMenu.addEventListener('click', toggleMenu)

      function toggleMenu () {
        navbarMenu.classList.toggle('active')
        overlayMenu.classList.toggle('active')
      }

      // Collapse SubMenu Function
      navbarMenu.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
          e.preventDefault()
          const menuItemHasChildren = e.target.parentElement

          // If menu-item-child is Expanded, then Collapse It
          if (menuItemHasChildren.classList.contains('active')) {
            collapseSubMenu()
          } else {
            // Collapse the Existing Expanded menu-item-child
            if (navbarMenu.querySelector('.menu-item-child.active')) {
              collapseSubMenu()
            }
            // Expanded the New menu-item-child
            menuItemHasChildren.classList.add('active')
            const subMenu = menuItemHasChildren.querySelector('.sub-menu')
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
          }
        }
      })

      function collapseSubMenu () {
        navbarMenu.querySelector('.menu-item-child.active .sub-menu').removeAttribute('style')
        navbarMenu.querySelector('.menu-item-child.active').classList.remove('active')
      }

      // Fixed Resize Screen Function
      window.addEventListener('resize', () => {
        if (this.innerWidth > 992) {
          // If navbarMenu is Open, then Close It
          if (navbarMenu.classList.contains('active')) {
            toggleMenu()
          }

          // If menu-item-child is Expanded, then Collapse It
          if (navbarMenu.querySelector('.menu-item-child.active')) {
            collapseSubMenu()
          }
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .header-wrap {
    padding: 32px 12px;

    *,
    *::before,
    *::after {
      padding: 0;
      margin: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      list-style: none;
      list-style-type: none;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }

    .header-container {
      max-width: 1185px;
      height: auto;
      margin: 0 auto;
      padding: 0 12px;

      @media (min-width: 960px) {
        max-width: 900px;
      }
      @media (min-width: 1264px) {
        max-width: 1185px;
      }
      @media (min-width: 1904px) {
        max-width: 1785px;
      }
    }

    .brand {
      font-size: 1.625rem;
      font-weight: 600;
      line-height: 1.25;
      letter-spacing: -1px;
      color: $primary;
      margin-bottom: 0;
      margin-right: 20px;

      &:hover {
        opacity: 0.85;
      }

      @media only screen and (max-width: 992px) {
        font-size: 1.4rem;
      }
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      z-index: 100;
      margin: 0 auto;
      background: white;
      -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .header .wrapper {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      /*gap: 2rem;*/
      max-width: 100%;
      height: 4rem;
      margin: 0 auto;
    }

    .header .menu > .menu-item {
      position: relative;
      display: inline-block;
      margin: 0 0.45rem;
    }

    .header .menu > .menu-item > a {
      display: block;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      line-height: inherit;
      padding: 1rem 0;
      border: none;
      outline: none;
      color: black;
      text-transform: capitalize;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      margin-bottom: 0;
    }

    .header .menu > .menu-item > a .expand {
      position: relative;
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      margin-left: 0.35rem;
      pointer-events: none;
      border: none;
      outline: none;
    }

    .header .menu > .menu-item > a .expand:before, .header .menu > .menu-item > a .expand:after {
      position: absolute;
      -webkit-box-sizing: inherit;
      box-sizing: inherit;
      content: "";
      top: 50%;
      left: 50%;
      width: 10px;
      height: 4px;
      /*height: 2px;*/
      /*background: black;*/
      background-image: url("~assets/img/arrow-dark.png");
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    .header .menu > .menu-item:hover > a {
      color: $primary;
    }

    .header .menu > .menu-item:hover > a .expand::before, .header .menu > .menu-item:hover > a .expand::after {
      color: $primary;
      background-image: url("~assets/img/arrow-red.png");

      /*
     -webkit-transform: translate(-50%, -50%) rotate(-90deg);
     transform: translate(-50%, -50%) rotate(-90deg);
        */
   }

   /*
   .header .menu > .menu-item > a .expand::after {
     -webkit-transform: translate(-50%, -50%) rotate(-90deg);
     transform: translate(-50%, -50%) rotate(-90deg);
   }
   */

    .header .menu > .menu-item > .sub-menu > .menu-item > a:hover {
      color: $primary;
    }

    .header .menu > .menu-item > .sub-menu {
      position: absolute;
      top: 100%;
      left: -1rem;
      width: 13rem;
      height: auto;
      padding: 0.75rem 0;
      border: none;
      outline: none;
      opacity: 0;
      visibility: hidden;
      border-top: 3px solid $primary;
      background: white;
      -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      -webkit-transform: translateY(1rem);
      transform: translateY(1rem);
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    .header .menu > .menu-item > .sub-menu > .menu-item {
      display: block;
    }

    .header .menu > .menu-item > .sub-menu > .menu-item > a {
      display: block;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      line-height: inherit;
      padding: 0.5rem 1.25rem;
      color: black;
      text-transform: capitalize;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    .header .burger {
      position: relative;
      cursor: pointer;
      display: none;
      width: 1.75rem;
      height: 1rem;
      margin-top: -0.25rem;
      outline: none;
      opacity: 0;
      visibility: hidden;
      background: none;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    .header .burger-line {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      left: 0;
      border: none;
      outline: none;
      opacity: 1;
      border-radius: 0.25rem;
      background: black;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
    }

    .header .burger-line:nth-child(1) {
      top: 0;
    }

    .header .burger-line:nth-child(2), .header .burger-line:nth-child(3) {
      top: 0.5rem;
    }

    .header .burger-line:nth-child(4) {
      top: 1rem;
    }

    .header .overlay {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 100;
      opacity: 0;
      visibility: hidden;
      background: rgba(0, 0, 0, 0.65);
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    @media only screen and (min-width: 993px) {
      .header .menu > .menu-item-child:hover > .sub-menu {
        display: block;
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      .header .menu > .menu-item-child:hover > a .expand::after {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
    @media only screen and (max-width: 992px) {
      .header .overlay.active {
        display: block;
        opacity: 1;
        visibility: visible;
      }
      .header .navbar {
        position: fixed;
        top: 0;
        left: -100%;
        width: 75%;
        height: 100%;
        z-index: 999;
        opacity: 0;
        overflow-y: auto;
        visibility: hidden;
        background: white;
        -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
      .header .navbar.active {
        left: 0rem;
        opacity: 1;
        visibility: visible;
      }
      .header .menu {
        width: 100%;
        height: auto;
        margin: 1rem 0;
        margin-right: 10px;

        @media only screen and (max-width: 992px) {
          margin-right: 0;
        }
      }
      .header .menu > .menu-item {
        display: block;
        margin: 0;
      }
      .header .menu > .menu-item-child > a {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .header .menu > .menu-item > a {
        padding: 0.625rem 1.25rem;
        color: black;

        @media only screen and (max-width: 992px) {
          padding: 0.625rem 2rem;
        }

      }
      /*.header .menu > .menu-item > a .expand::before, .header .menu > .menu-item > a .expand::after {*/
      /*  background: black;*/
      /*}*/
      .header .menu > .menu-item-child.active > a .expand:after {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
      }
      .header .menu > .menu-item > .sub-menu {
        position: relative;
        top: auto;
        left: auto;
        width: 100%;
        max-height: 0;
        padding: 0px;
        border: none;
        outline: none;
        opacity: 1;
        overflow: hidden;
        visibility: visible;
        background: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);

        @media only screen and (max-width: 992px) {
          padding-left: 16px;
        }
      }
      .header .menu > .menu-item > .sub-menu > .menu-item > a {
        padding: 0.625rem 2rem;
        color: black;
      }
      .header .burger {
        display: block;
        opacity: 1;
        visibility: visible;
      }
    }

    // Button
    .btn_primary {
      margin: 0;

      @media only screen and (max-width: 992px) {
        display: none;
      }
    }

    .btn-red{
      border-color: $primary!important;
      color: $primary!important;
    }

    .login-profile{
      display: block!important;

      @media only screen and (max-width: 992px) {
        display: none!important;
      }
    }

    .login-profile-mobile {
      @media only screen and (max-width: 992px) {
        position: absolute;
        bottom: 10px;
        right: 25px;
      }

      @media only screen and (max-width: 520px) {
        position: absolute;
        bottom: 60px;
        left: 23px;
      }

      .login-profile{
        display: none!important;

        @media only screen and (max-width: 992px) {
          display: block!important;
        }
      }
    }

    // Phone
    .header-city {
      position: relative;
      width: 102px;
      color: $secondary;
      margin-bottom: 0;
      margin-right: 10px;
      color: $secondary;
      font-size: 20px;

      @media only screen and (max-width: 992px) {
        width: auto;
      }

      &:hover {
        color: $primary;
      }

      &:before {
        content: "";
        position: absolute;
        top: 5px;
        left: -17px;
        height: 13px;
        width: 13px;
        background-image: url("~assets/img/marker.png");
      }

      /*@media only screen and (max-width: 992px) {*/
      /*  font-size: 0.9rem;*/
      /*}*/
    }

    // Social menu header
    .header-social {
      display: flex;
      align-items: center;

      @media only screen and (max-width: 992px) {
        display: none;
      }

      a {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }

    .header-social-mobile {
      @media only screen and (max-width: 992px) {
        position: absolute;
        left: 30px;
        bottom: 16px;
      }

      .header-social{
        display: none!important;

        @media only screen and (max-width: 992px) {
          display: block!important;
        }
      }
    }

  }

  .header-city-item {
    font-size: 20px;

    &:hover {
      color: $primary !important;
      cursor: pointer !important;
    }
  }
</style>
