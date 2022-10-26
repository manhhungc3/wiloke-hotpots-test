export type Data = {
postsCustoms: {
variant: string;
posts: {
    items: {
      title: string;
      id?: string;
      image?: string;
      content?: string;
      slug?: string;
      excerpt?: string;
      createDate?: string;
      modifiedDate?: string;
      link?: string;
      categories: {
        name : string;
        count : number;
        link : string;
      }[];
      comments?: {
        content?: string;
        createDate?: string;
        modifiedDate?: string;
        authorName?: string;
        authorIP?: string;
        authorUrl?: string;
        authorEmail?: string;
      }[];
      author?: {
        id?: string;
        authorName?: string;
        authorEmail?: string;
        authorUrl?: string;
        avatar?: string;
      };
    }[];
  }
height: number;
};
responsive: {
lg: number;
md: number;
sm: number;
xs: number;
gapLg: number;
gapMd: number;
gapSm: number;
gapXs: number;
};
carousel: {
enable: boolean;
buttonEnable: boolean;
paginationEnable: boolean;
buttonColor: string;
};
translates: {
readMoreText: string;
};
colors: {
primary: string;
secondary: string;
gray7: string;
gray8: string;
gray9: string;
rating: string;
backgroundColor: string;
};
typography: {
titleTypo: string;
yearTypo: string;
dateTypo: string;
categoryTypo: string;
commentTypo: string;
};
border: {
enableBorder: boolean;
borderItemWidth: number;
borderItemStyle: string;
borderItemColor: string;
borderItemRadius: number;
};
customCSS: {
code: string;
};
};