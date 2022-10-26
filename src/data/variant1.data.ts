import { Data } from "../typegen";

export const data: Data = {
  postsCustoms: {
    variant: "variant1",
    posts: {
      items: [
        {
          id: "1",
          title: "Denouncing pleasure and praising pain",
          link: "post1.com",
          content: "what up bro !",
          createDate: "24-9-1998",
          slug: "Hot",
          image: {
            small: {
              src: '../img/Rectangle 1.png',
              height: 96,
              width: 96,
            },

            medium: {
              src: '../img/Rectangle 1.png',
              height: 96,
              width: 96,
            },

            large: {
              src: '../img/Rectangle 1.png',
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
              name: 'ABSTRACT'
            },
            {
              link: "google.com",
              count: 2,
              name: 'ABSTRACT'
            },
          ]
        },
        {
          id: "1",
          title: "We denounce with right indignation",
          link: "post1.com",
          content: "what up bro !",
          slug: "Hot",
          image: {
            small: {
              src: '../img/Rectangle 2.png',
              height: 96,
              width: 96,
            },

            medium: {
              src: '../img/Rectangle 2.png',
              height: 96,
              width: 96,
            },

            large: {
              src: '../img/Rectangle 2.png',
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
              name: 'PAINTING'
            },
            {
              link: "google.com",
              count: 2,
              name: 'PAINTING'
            },
          ]
        },
        {
          id: "1",
          title: "Nam libero tempore, cum soluta nobis est",
          link: "post1.com",
          content: "what up bro !",
          slug: "Hot",
          image: {
            small: {
              src: '../img/Rectangle 3.png',
              height: 96,
              width: 96,
            },

            medium: {
              src: '../img/Rectangle 3.png',
              height: 96,
              width: 96,
            },

            large: {
              src: '../img/Rectangle 3.png',
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
              name: 'DECORATE'
            },
            {
              link: "google.com",
              count: 2,
              name: 'DECORATE'
            },
          ]
        },
        {
          id: "1",
          title: "Free Philippine Real Estate Ads",
          link: "post1.com",
          content: "what up bro !",
          slug: "Hot",
          image: {
            small: {
              src: '../img/Rectangle 4.png',
              height: 96,
              width: 96,
            },

            medium: {
              src: '../img/Rectangle 4.png',
              height: 96,
              width: 96,
            },

            large: {
              src: '../img/Rectangle 4.png',
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
              name: 'CREATIVE'
            },
            {
              link: "google.com",
              count: 2,
              name: 'CREATIVE'
            },
          ]
        },
      ],
    }
    ,
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
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
    gapLg: 77,
    gapMd: 77,
    gapSm: 77,
    gapXs: 77,
  },
  carousel: {
    enable: true,
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
