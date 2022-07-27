export const state = () => ({
  borrowed: [
    {
      id: 2,
      title: 'Some useful title 2',
      price: 400,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      img: 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=',
      term: 3,
      user: {
        userId: 12,
        avatar: 'https://tinypng.com/images/social/website.jpg',
        firstName: 'Some',
        lastName: 'Another User'
      },
      rating: 4.5,
      expired: '12.07.2022 19:30'
    },
    {
      id: 1,
      title: 'Some useful title 1',
      price: 300,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      img: 'https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000',
      term: 5,
      user: {
        userId: 123,
        avatar: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        firstName: 'Some',
        lastName: 'User'
      },
      rating: 4,
      expired: '12.07.2022 19:30'

    }
  ],
  lent: [
    {
      id: 5,
      title: 'Some useful title 1',
      price: 300,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      img: 'https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000',
      term: 5,
      user: {
        userId: 123,
        avatar: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        firstName: 'Some',
        lastName: 'Guy'
      },
      rating: 4,
      expired: '13.07.2022 12:30'

    },
    {
      id: 4,
      title: 'Some useful title 2',
      price: 400,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      img: 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=',
      term: 3,
      user: {
        userId: 12,
        avatar: 'https://tinypng.com/images/social/website.jpg',
        firstName: 'Some',
        lastName: 'Another User'
      },
      rating: 4.5,
      expired: '13.07.2022 14:30'
    },
    {
      id: 2,
      title: 'Some useful title 2',
      price: 400,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      img: 'https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg',
      term: 3,
      user: {
        userId: 12,
        avatar: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
        firstName: 'Some',
        lastName: 'Another User'
      },
      rating: 4.5,
      expired: '13.07.2022 12:30'

    },
    {
      id: 1,
      title: 'Some useful title 1',
      price: 300,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      img: 'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=',
      term: 5,
      user: {
        userId: 123,
        avatar: 'https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif',
        firstName: 'Some',
        lastName: 'User'
      },
      rating: 4,
      expired: '13.07.2022 12:30'

    },
    {
      id: 3,
      title: 'Some useful title 1',
      price: 300,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      img: 'https://freerangestock.com/thumbnail/137610/lonely-man-under-night-sky--starry-sky-over-the-horizon--conte.jpg',
      term: 5,
      user: {
        userId: 123,
        avatar: 'https://www.whoa.in/download/mobile-wallpapers-hd-images-background-wallpapers-5-mobile-wallpaper',
        firstName: 'Some',
        lastName: 'User'
      },
      rating: 4,
      expired: '13.07.2022 12:30'

    }
  ],
  view: 'grid'
});

export const mutations = {
  changeView (state) {
    const v = state.view === 'grid' ? 'list' : 'grid';
    state.view = v;
  }
};
