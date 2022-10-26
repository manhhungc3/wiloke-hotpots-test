import { Data } from "../typegen";

export const data: Data = {
  postsCustoms: {
    variant: "variant2",
    posts: {
      items: [
        {
          id: "1",
          title: "Denouncing pleasure and praising pain",
          link: "post1.com",
          content: "what up bro !",
          createDate: "12-2-2022",
          slug: "Hot",
          image: {
            small: {
              src: '../img/Rectangle 5.png',
              height: 96,
              width: 96,
            },

            medium: {
              src: '../img/Rectangle 5.png',
              height: 96,
              width: 96,
            },

            large: {
              src: '../img/Rectangle 5.png',
              height: 96,
              width: 96,
            }
          },
          comments: [
            {
              content: "post 1",
              authorName: "Manh Hung 1",
              createDate: "22-22-2222",
            }
          ],
          author: {
            id: "1",
            avatar: "https://recmiennam.com/wp-content/uploads/2018/04/hinh-anh-dep-ve-bien-4.jpg",
            authorName: "Manh Hung 1",
            authorUrl: "manhhungc3.com",
            authorEmail: "manhhungc3@gmail.com"
          },
          categories: [
            {
              link: "google.com",
              count: 1,
              name: 'Travel'
            },
            {
              link: "google.com",
              count: 2,
              name: 'Travel'
            },
          ]
        },
        {
          id: "1",
          title: "Free Philippine Real Estate Ads",
          link: "post1.com",
          content: "what up bro !",
          createDate: "20-9-2021",
          slug: "Hot",
          image: {
            small: {
              src: '../img/Rectangle 6.png',
              height: 96,
              width: 96,
            },

            medium: {
              src: '../img/Rectangle 6.png',
              height: 96,
              width: 96,
            },

            large: {
              src: '../img/Rectangle 6.png',
              height: 96,
              width: 96,
            }
          },
          comments: [
            {
              content: "post 1",
              authorName: "Manh Hung 1",
              createDate: "22-22-2222",
            }
          ],
          author: {
            id: "1",
            avatar: "https://recmiennam.com/wp-content/uploads/2018/04/hinh-anh-dep-ve-bien-4.jpg",
            authorName: "Manh Hung 1",
            authorUrl: "manhhungc3.com",
            authorEmail: "manhhungc3@gmail.com"
          },
          categories: [
            {
              link: "google.com",
              count: 1,
              name: 'Surf'
            },
            {
              link: "google.com",
              count: 2,
              name: 'Surf'
            },
          ]
        },
        {
          id: "1",
          title: "We denounce with right indignation",
          link: "post1.com",
          createDate: "15-9-2021",
          content: "what up bro !",
          slug: "Hot",
          image: {
            small: {
              src: '../img/Rectangle 7.png',
              height: 96,
              width: 96,
            },

            medium: {
              src: '../img/Rectangle 7.png',
              height: 96,
              width: 96,
            },

            large: {
              src: '../img/Rectangle 7.png',
              height: 96,
              width: 96,
            }
          },
          comments: [
            {
              content: "post 1",
              authorName: "Manh Hung 1",
              createDate: "22-22-2222",
            }
          ],
          author: {
            id: "1",
            avatar: "https://recmiennam.com/wp-content/uploads/2018/04/hinh-anh-dep-ve-bien-4.jpg",
            authorName: "Manh Hung 1",
            authorUrl: "manhhungc3.com",
            authorEmail: "manhhungc3@gmail.com"
          },
          categories: [
            {
              link: "google.com",
              count: 1,
              name: 'Fashion'
            },
            {
              link: "google.com",
              count: 2,
              name: 'Fashion'
            },
          ]
        },
      ],
    },
    height: 100,

  },
  typography: {
    yearTypo: '',
    titleTypo: '',
    categoryTypo: '',
    commentTypo: '',
    dateTypo: '',
  },
  border: {
    enableBorder: false,
    borderItemWidth: 0,
    borderItemColor: '',
    borderItemStyle: '',
    borderItemRadius: 0,

  },
  responsive: {
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1,
    gapLg: 30,
    gapMd: 30,
    gapSm: 30,
    gapXs: 30,
  },
  carousel: {
    enable: false,
    buttonEnable: true,
    paginationEnable: true,
    buttonColor: "#000",
  },
  colors: {
    backgroundColor: "",
    primary: "",
    secondary: "",
    gray7: "",
    gray8: "",
    gray9: "#000000",
    rating: "#FEAA01 ",
  },
  translates: {
    readMoreText: "Read More"
  },
  customCSS: {
    code: "",
  }


};
