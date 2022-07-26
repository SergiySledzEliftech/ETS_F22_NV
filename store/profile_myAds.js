export const state = () => ({
  itemsData: [
    {
      id: 1,
      title: 'Some useful title 1',
      price: 300,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      img: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      term: 5,
      user: {
        userId: 123,
        avatar: 'https://th.bing.com/th/id/OIP.boU0VLtfyLfKIbp_1YIWJgHaFj?pid=ImgDet&rs=1',
        firstName: 'Some',
        lastName: 'User'
      },
      rating: 4
    },
    {
      id: 2,
      title: 'Some useful title 2',
      price: 400,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      img: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
      term: 3,
      user: {
        userId: 12,
        avatar: 'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        firstName: 'Some',
        lastName: 'Another User'
      },
      rating: 4.5
    },
    {
      id: 3,
      title: 'Some useful title 3',
      price: 600,
      location: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      term: 2,
      user: {
        userId: 12,
        avatar: 'https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg',
        firstName: 'Some',
        lastName: 'Unknown User'
      },
      rating: 4.7
    }
  ],
  view: 'grid'
});

export const mutations = {
  deleteItem (state, id) {
    state.itemsData = state.itemsData.filter(el => el.id !== id);
  },
  changeView (state) {
    const v = state.view === 'grid' ? 'list' : 'grid';
    state.view = v;
  }
};
