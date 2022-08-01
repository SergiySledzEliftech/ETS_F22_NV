<template>
  <div class="header-wrap container">
    <header class="header">
      <section class="header-container">
        <div class="wrapper">
          <!-- Section: Logo -->
          <a href="/" class="brand">GloMaRe</a>
          <!-- Section: Logo -->

          <!-- Section: Menu -->
          <span id="overlay" class="overlay" @click="toggleMenu" />
          <nav id="navbar" class="navbar" @click="collapseSubMenu2">
            <ul class="menu">
              <li class="menu-item menu-item-child">
                <a href="#" class="menu-link" data-toggle="sub-menu">{{ menu[0].item }}<i class="expand" /></a>
                <ul class="sub-menu">
                  <li v-for="(item, index) in subMenuCatalog" :key="index" class="menu-item">
                    <NuxtLink :to="item.to">
                      {{ item.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li class="menu-item menu-item-child">
                <a href="#" class="menu-link" data-toggle="sub-menu">{{ menu[1].item }}<i class="expand" /></a>
                <ul class="sub-menu">
                  <li v-for="item in subMenuServices" :key="item.to" class="menu-item">
                    <NuxtLink :to="{name: item.to}">
                      {{ item.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li class="menu-item menu-item-child">
                <NuxtLink :to="{name: 'Services-About'}">
                  {{ menu[2].item }}
                </NuxtLink>
              </li>
            </ul>

            <div class="header-social-mobile">
              <social-links />
            </div>

            <div class="login-profile-mobile">
              <div class="login-profile">
                <nuxt-link
                  v-if="$auth.loggedIn"
                  :to="{ path: '/'}"
                >
                  <nuxt-link :to="'/profile/' + $auth.user._id">
                    <v-icon
                      large
                      color="blue darken-2"
                    >
                      mdi-account
                    </v-icon>
                  </nuxt-link>

                  <v-btn
                    class="ma-2 btn-red menu-btn"
                    outlined
                    @click="$auth.logout()"
                  >
                    Log Out
                  </v-btn>
                </nuxt-link>
                <nuxt-link
                  v-else
                  :to="{ path: '/auth' }"
                >
                  <v-btn

                    class="ma-2 btn-red menu-btn"
                    outlined
                    color="indigo"
                  >
                    Sign in
                  </v-btn>
                </nuxt-link>
              </div>
            </div>
          </nav>
          <!-- Section: Menu -->

          <!-- Section: BTN select city -->
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
          <!-- Section: BTN select city -->

          <!-- Section: social buttons -->
          <social-links />
          <!-- Section: social buttons -->

          <!-- Section: BUTTONS profile/sign-in -->
          <div class="login-profile">
            <nuxt-link
              v-if="$auth.loggedIn"
              :to="{ path: '/'}"
            >
              <nuxt-link :to="'/profile/' + $auth.user._id">
                <v-icon
                  large
                  color="blue darken-2"
                >
                  mdi-account
                </v-icon>
              </nuxt-link>

              <v-btn
                class="ma-2 btn-red menu-btn"
                outlined
                @click="$auth.logout()"
              >
                Log Out
              </v-btn>
            </nuxt-link>
            <nuxt-link
              v-else
              :to="{ path: '/auth' }"
            >
              <v-btn
                class="ma-2 btn-red menu-btn"
                outlined
                color="indigo"
                @click="changeTab"
              >
                Sign in
              </v-btn>
            </nuxt-link>
          </div>
          <!-- Section: BUTTONS profile/sign-in -->

          <!-- Section: BTN mob menu-->
          <button id="burger" type="button" class="burger" @click="toggleMenu">
            <span class="burger-line" />
            <span class="burger-line" />
            <span class="burger-line" />
            <span class="burger-line" />
          </button>
          <!-- Section: BTN mob menu-->
        </div>
      </section>
    </header>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import SocialLinks from '../../components/global/SocialLinksComponent';

const { State, Mutation } = namespace('global');

export default @Component({
  components: { SocialLinks }
})

class HeaderComponent extends Vue {
  // Select city from VUEX store
  @State selectedCity
  @Mutation changeCity

  // For Auth
  @State isLogin
  @Mutation changeStatusAuth

  @State tab
  @Mutation changeTab

  // Button select city
  itemsCity = [
    { title: 'Kyiv' },
    { title: 'Kharkiv' },
    { title: 'Chernivtsi' },
    { title: 'Poltava' },
    { title: 'Dnipro' }
  ]

  // Main menu
  menu = [
    { item: 'Catalog' },
    { item: 'Services' },
    { item: 'About' }
  ]

  // SubMenu Catalog
  subMenuCatalog = [
    { name: 'Smartphones', to: { name: 'categories', params: { category: 'smartphones' } } },
    { name: 'Laptops', to: { name: 'categories', params: { category: 'laptops' } } },
    { name: 'Fragrances', to: { name: 'categories', params: { category: 'fragrances' } } },
    { name: 'Skincare', to: { name: 'categories', params: { category: 'skincare' } } },
    { name: 'Groceries', to: { name: 'categories', params: { category: 'groceries' } } },
    { name: 'Home decoration', to: { name: 'categories', params: { category: 'home-decoration' } } },
    { name: 'Automotive', to: { name: 'categories', params: { category: 'automotive' } } },
    { name: 'Motorcycle', to: { name: 'categories', params: { category: 'motorcycle' } } },
    { name: 'Lighting', to: { name: 'categories', params: { category: 'lighting' } } }
  ]

  // SubMenu Services
  subMenuServices = [
    { name: 'Mobile application', to: 'Services-MobileApplication' },
    { name: 'GloMaRe premium', to: 'Services-GlomarePremium' },
    { name: 'Paid services', to: 'Services-PaidServices' },
    { name: 'Gift Certificates', to: 'Services-GiftSertificates' },
    { name: 'Chat', to: 'Chat' }
  ]

  mounted () {
    // Fixed Resize Screen Function
    window.addEventListener('resize', this.resizeMenu);
  }

  // Collapse SubMenu Function
  collapseSubMenu2 (e) {
    const navbarMenu = document.getElementById('navbar');

    if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
      e.preventDefault();
      const menuItemHasChildren = e.target.parentElement;

      // If menu-item-child is Expanded, then Collapse It
      if (menuItemHasChildren.classList.contains('active')) {
        this.collapseSubMenu();
      } else {
        // Collapse the Existing Expanded menu-item-child
        if (navbarMenu.querySelector('.menu-item-child.active')) {
          this.collapseSubMenu();
        }
        // Expanded the New menu-item-child
        menuItemHasChildren.classList.add('active');
        const subMenu = menuItemHasChildren.querySelector('.sub-menu');
        subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
      }
    }
    // for close mob menu when choose link
    if (!e.target.classList.contains('menu-link')) {
      this.toggleMenu();
    }
  }

  resizeMenu () {
    const navbarMenu = document.getElementById('navbar');

    if (this.innerWidth > 992) {
      // If navbarMenu is Open, then Close It
      if (navbarMenu.classList.contains('active')) {
        this.toggleMenu();
      }

      // If menu-item-child is Expanded, then Collapse It
      if (navbarMenu.querySelector('.menu-item-child.active')) {
        this.collapseSubMenu();
      }
    }
  }

  toggleMenu () {
    const navbarMenu = document.getElementById('navbar');
    const overlayMenu = document.getElementById('overlay');

    navbarMenu.classList.toggle('active');
    overlayMenu.classList.toggle('active');
  }

  collapseSubMenu () {
    const navbarMenu = document.getElementById('navbar');

    navbarMenu.querySelector('.menu-item-child.active .sub-menu').removeAttribute('style');
    navbarMenu.querySelector('.menu-item-child.active').classList.remove('active');
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
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
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
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .header .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      box-sizing: inherit;
      content: "";
      top: 50%;
      left: 50%;
      width: 10px;
      height: 4px;
      background-image: url("~assets/img/arrow-dark.png");
      transform: translate(-50%, -50%);
      transition: all 0.2s ease;
    }

    .header .menu > .menu-item:hover > a {
      color: $primary;
    }

    .header .menu > .menu-item:hover > a .expand::before, .header .menu > .menu-item:hover > a .expand::after {
      color: $primary;
      background-image: url("~assets/img/arrow-red.png");
   }

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
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transform: translateY(1rem);
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
      transform: rotate(0deg);
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
      transform: rotate(0deg);
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
      transition: all 0.2s ease;
    }

    @media only screen and (min-width: 993px) {
      .header .menu > .menu-item-child:hover > .sub-menu {
        display: block;
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      .header .menu > .menu-item-child:hover > a .expand::after {
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
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
        justify-content: space-between;
        align-items: center;
      }
      .header .menu > .menu-item > a {
        padding: 0.625rem 1.25rem;
        color: black;

        @media only screen and (max-width: 992px) {
          padding: 0.625rem 2rem;
        }
      }

      .header .menu > .menu-item-child.active > a .expand:after {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      .header .menu > .menu-item > .sub-menu {
        position: relative;
        top: auto;
        left: auto;
        width: 100%;
        max-height: 0;
        padding: 0;
        border: none;
        outline: none;
        opacity: 1;
        overflow: hidden;
        visibility: visible;
        background: transparent;
        box-shadow: none;
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

  .v-application{
    .menu-btn{
      margin-right: 0 !important;
    }
  }

</style>
