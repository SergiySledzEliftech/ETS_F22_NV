export const state = () => ({
  view: 'grid',
  page: 1,
  perPage: 6,
  perPageArray: [6, 12, 24, 48, 96],
  totalPages: 1,
  loading: false,
  data: [],
  user: {
    firstName: '',
    lastName: '',
    nickname: '',
    passHash: '',
    about: '',
    email: '',
    phone: '',
    optionalPhone: '',
    location: ''
  }
  //   {
  //     id: 1,
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     nickname: 'GloMaRe',
  //     password: '12345678',
  //     about: 'I use a creative approach to problem solve.',
  //     avatar: 'https://avatars.githubusercontent.com/u/17836236',
  //     email: 'JohnDoe@glomail.com',
  //     phone: '0987773377',
  //     optionalPhone: '0677773377',
  //     location: {
  //       address: 'Ukraine, Kyiv, Bohdana Khmelnytskogo St., 3',
  //       locationX: '50.44469383287712',
  //       locationY: '30.52002110354918'
  //     },
  //     rating: 10
  //   },
  //   {
  //     id: 2,
  //     firstName: 'Jane',
  //     lastName: 'Doe',
  //     nickname: 'GloBale',
  //     password: '12345678',
  //     about: 'I am always energetic and eager to learn new skills.',
  //     avatar: 'https://avatars.githubusercontent.com/u/1783623',
  //     email: 'JohnDoe@glomail.com',
  //     phone: '0987773377',
  //     optionalPhone: '0677773377',
  //     location: {
  //       address: 'Ukraine, Kyiv, Bohdana Khmelnytskogo St., 3',
  //       locationX: '50.44469383287712',
  //       locationY: '30.52002110354918'
  //     },
  //     rating: 10
  //   },
  //   {
  //     id: 3,
  //     firstName: 'Jone',
  //     lastName: 'Doe',
  //     nickname: 'GloMaLe',
  //     password: '12345678',
  //     about: 'I have experience working as part of a team and individually.',
  //     avatar: 'https://avatars.githubusercontent.com/u/17836262',
  //     email: 'JohnDoe@glomail.com',
  //     phone: '0987773377',
  //     optionalPhone: '0677773377',
  //     location: {
  //       address: 'Ukraine, Kyiv, Bohdana Khmelnytskogo St., 3',
  //       locationX: '50.44469383287712',
  //       locationY: '30.52002110354918'
  //     },
  //     rating: 10
  //   }
});

export const actions = {
  deleteElem ({ commit }, id) {
    commit('deleteItem', id);
  },
  calculateTotalPages ({ commit }, list) {
    commit('setTotalPages', list);
  },
  calcPage ({ commit }, num) {
    commit('setPage', num);
  },

  async getUser ({ state, commit }, id) {
    try {
      const res = await this.$axios.get('http://localhost:3001/users/' + id);
      commit('setUserData', res);
    } catch (error) {
      this.error = error.message;
      // eslint-disable-next-line no-console
      console.log('in profile ' + error.message);
    }
  },

  async updateUser ({ state, commit }, id) {
    try {
      await this.$axios.put('http://localhost:3001/users/' + id, state.user);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error update');
    }
  },
  setLoad ({ commit }, val) {
    commit('setLoading', val);
  },
  async getProducts ({ commit }) {
    try {
      const { products } = await this.$axios.$get('https://dummyjson.com/products?limit=100');
      commit('setData', products);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('data ' + error.message);
    }
  }
};

export const mutations = {
  setData (state, array) {
    state.data = array;
  },
  changeView (state) {
    state.view = state.view === 'grid' ? 'list' : 'grid';
  },
  setLoading (state, val) {
    state.loading = val;
  },
  deleteItem (state, id) {
    state.dataAds = state.dataAds.filter(item => item.id !== id);
  },
  setTotalPages (state, list) {
    state.totalPages = Math.ceil(list.length / state.perPage);
  },
  setPerPage (state, num) {
    state.perPage = num;
    state.page = 1;
  },
  setPage (state, num) {
    state.page = num;
  },
  setUserData (state, user) {
    state.user = user.data;
  },
  updateFirstName (state, value) {
    state.user.firstName = value;
  },
  updateLastName (state, value) {
    state.user.lastName = value;
  },
  updateNickname (state, value) {
    state.user.nickname = value;
  },
  updateEmail (state, value) {
    state.user.email = value;
  },
  updatePhone (state, value) {
    state.user.phone = value;
  },
  updateOptionalPhone (state, value) {
    state.user.optionalPhone = value;
  },
  updateAbout (state, value) {
    state.user.about = value;
  },
  updateLocation (state, value) {
    state.user.location = value;
  }
};

// {
//   id: 1,
//   title: 'Some useful title 1',
//   price: 300,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000'],
//   term: 5,
//   user: {
//     userId: 123,
//     avatar: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
//     firstName: 'Some',
//     lastName: 'Guy'
//   },
//   rating: 4,
//   expired: '13.07.2022 12:30'
// },
// {
//   id: 2,
//   title: 'Some useful title 2',
//   price: 400,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='],
//   term: 3,
//   user: {
//     userId: 12,
//     avatar: 'https://tinypng.com/images/social/website.jpg',
//     firstName: 'Some',
//     lastName: 'Another User'
//   },
//   rating: 4.5,
//   expired: '13.07.2022 14:30'
// },
// {
//   id: 3,
//   title: 'Some useful title 2',
//   price: 400,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg'],
//   term: 3,
//   user: {
//     userId: 12,
//     avatar: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
//     firstName: 'Some',
//     lastName: 'Another User'
//   },
//   rating: 4.5,
//   expired: '13.07.2022 12:30'
// },
// {
//   id: 4,
//   title: 'Some useful title 1',
//   price: 300,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='],
//   term: 5,
//   user: {
//     userId: 123,
//     avatar: 'https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif',
//     firstName: 'Some',
//     lastName: 'User'
//   },
//   rating: 4,
//   expired: '13.07.2022 12:30'

// },
// {
//   id: 5,
//   title: 'Some useful title 1',
//   price: 300,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://freerangestock.com/thumbnail/137610/lonely-man-under-night-sky--starry-sky-over-the-horizon--conte.jpg'],
//   term: 5,
//   user: {
//     userId: 123,
//     avatar: 'https://www.whoa.in/download/mobile-wallpapers-hd-images-background-wallpapers-5-mobile-wallpaper',
//     firstName: 'Some',
//     lastName: 'User'
//   },
//   rating: 4,
//   expired: '13.07.2022 12:30'

// },
// {
//   id: 6,
//   title: 'Some useful title 1',
//   price: 300,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0'],
//   term: 5,
//   user: {
//     userId: 2,
//     avatar: 'https://th.bing.com/th/id/OIP.boU0VLtfyLfKIbp_1YIWJgHaFj?pid=ImgDet&rs=1',
//     firstName: 'Some',
//     lastName: 'User'
//   },
//   rating: 4,
//   expired: '13.07.2022 12:30'
// },
// {
//   id: 7,
//   title: 'Some useful title 2',
//   price: 400,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'],
//   term: 3,
//   user: {
//     userId: 1,
//     avatar: 'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
//     firstName: 'Some',
//     lastName: 'Another User'
//   },
//   rating: 4.5,
//   expired: '13.07.2022 12:30'
// },
// {
//   id: 8,
//   title: 'Some useful title 3',
//   price: 600,
//   location: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
//   images: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'],
//   term: 2,
//   user: {
//     userId: 12,
//     avatar: 'https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg',
//     firstName: 'Some',
//     lastName: 'Unknown User'
//   },
//   rating: 4.7,
//   expired: '13.07.2022 12:30'
// },
// {
//   id: 9,
//   title: 'Some useful title 1',
//   price: 300,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000'],
//   term: 5,
//   user: {
//     userId: 123,
//     avatar: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
//     firstName: 'Some',
//     lastName: 'Guy'
//   },
//   rating: 4,
//   expired: '13.07.2022 12:30'

// },
// {
//   id: 10,
//   title: 'Some useful title 2',
//   price: 400,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='],
//   term: 3,
//   user: {
//     userId: 12,
//     avatar: 'https://tinypng.com/images/social/website.jpg',
//     firstName: 'Some',
//     lastName: 'Another User'
//   },
//   rating: 4.5,
//   expired: '13.07.2022 14:30'
// },
// {
//   id: 11,
//   title: 'Some useful title 2',
//   price: 400,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg'],
//   term: 3,
//   user: {
//     userId: 12,
//     avatar: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
//     firstName: 'Some',
//     lastName: 'Another User'
//   },
//   rating: 4.5,
//   expired: '13.07.2022 12:30'
// },
// {
//   id: 12,
//   title: 'Some useful title 1',
//   price: 300,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='],
//   term: 5,
//   user: {
//     userId: 123,
//     avatar: 'https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif',
//     firstName: 'Some',
//     lastName: 'User'
//   },
//   rating: 4,
//   expired: '13.07.2022 12:30'

// },
// {
//   id: 13,
//   title: 'Some useful title 1',
//   price: 300,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://freerangestock.com/thumbnail/137610/lonely-man-under-night-sky--starry-sky-over-the-horizon--conte.jpg'],
//   term: 5,
//   user: {
//     userId: 123,
//     avatar: 'https://www.whoa.in/download/mobile-wallpapers-hd-images-background-wallpapers-5-mobile-wallpaper',
//     firstName: 'Some',
//     lastName: 'User'
//   },
//   rating: 4,
//   expired: '13.07.2022 12:30'

// },
// {
//   id: 14,
//   title: 'Some useful title 1',
//   price: 300,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0'],
//   term: 5,
//   user: {
//     userId: 2,
//     avatar: 'https://th.bing.com/th/id/OIP.boU0VLtfyLfKIbp_1YIWJgHaFj?pid=ImgDet&rs=1',
//     firstName: 'Some',
//     lastName: 'User'
//   },
//   rating: 4,
//   expired: '13.07.2022 12:30'
// },
// {
//   id: 15,
//   title: 'Some useful title 2',
//   price: 400,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'],
//   term: 3,
//   user: {
//     userId: 1,
//     avatar: 'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
//     firstName: 'Some',
//     lastName: 'Another User'
//   },
//   rating: 4.5,
//   expired: '13.07.2022 12:30'
// },
// {
//   id: 16,
//   title: 'Some useful title 3',
//   price: 600,
//   location: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
//   images: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'],
//   term: 2,
//   user: {
//     userId: 12,
//     avatar: 'https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg',
//     firstName: 'Some',
//     lastName: 'Unknown User'
//   },
//   rating: 4.7,
//   expired: '13.07.2022 12:30'
// },
// {
//   id: 17,
//   title: 'Some useful title 2',
//   price: 400,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='],
//   term: 3,
//   user: {
//     userId: 12,
//     avatar: 'https://tinypng.com/images/social/website.jpg',
//     firstName: 'Some',
//     lastName: 'Another User'
//   },
//   rating: 4.5,
//   expired: '12.07.2022 19:30'
// },
// {
//   id: 18,
//   title: 'Some useful title 1',
//   price: 300,
//   location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
//   images: ['https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000'],
//   term: 5,
//   user: {
//     userId: 123,
//     avatar: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
//     firstName: 'Some',
//     lastName: 'User'
//   },
//   rating: 4,
//   expired: '12.07.2022 19:30'
// }
