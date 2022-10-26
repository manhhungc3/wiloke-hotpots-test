import { Schema } from "elementor-php-core";

export const schema: Schema = [
  {
    type: 'section',
    name: 'postsCustoms',
    label: 'Posts',
    default: [],
    fields: [
      {
        type: 'select',
        default: 'variant1',
        name: 'variant',
        label: 'Posts Variant',
        options: {
          variant1: 'Variant 1',
          variant2: 'Variant 2',
          variant3: 'Variant 3',
          variant4: 'Variant 4',
          variant5: 'Variant 5',
        },
      },
      {
        type: 'wil_post', name: 'posts', label: "Posts", default: {
          categories: [],
          filter: 'manual',
          limit: 4,
          order: 'desc',
          orderBy: "date",
          posts: []
        }
      },
      {
        type: 'number', name: 'height', min:0, max:Infinity , label: 'Row Height(Variant 5)', default: 200, condition: { postsCustoms_variant: ['variant5'] }
      }

    ]
  },
  {
    type: 'section',
    name: 'responsive',
    label: 'Responsive',
    default: [],
    fields: [
      { type: 'number', name: 'lg', label: 'Column Large', min: 1, max: 10, default: 3, condition: { postsCustoms_variant: ['variant1', 'variant2', 'variant4', 'variant5'] } },
      { type: 'number', name: 'md', label: 'Column Medium', min: 1, max: 10, default: 3, condition: { postsCustoms_variant: ['variant1', 'variant2', 'variant4', 'variant5'] } },
      { type: 'number', name: 'sm', label: 'Column Small', min: 1, max: 10, default: 2, condition: { postsCustoms_variant: ['variant1', 'variant2', 'variant4', 'variant5'] } },
      { type: 'number', name: 'xs', label: 'Column Extra Small', min: 1, max: 10, default: 1, condition: { postsCustoms_variant: ['variant1', 'variant2', 'variant4', 'variant5'] } },
      { type: 'number', name: 'gapLg', label: 'Gap Large', min: 0, max: 60, default: 30, condition: { postsCustoms_variant: ['variant1', 'variant2', 'variant4', 'variant5'] } },
      { type: 'number', name: 'gapMd', label: 'Gap Medium', min: 0, max: 60, default: 30, condition: { postsCustoms_variant: ['variant1', 'variant2', 'variant4', 'variant5'] } },
      { type: 'number', name: 'gapSm', label: 'Gap Small', min: 0, max: 60, default: 30, condition: { postsCustoms_variant: ['variant1', 'variant2', 'variant4', 'variant5'] } },
      { type: 'number', name: 'gapXs', label: 'Gap Extra Small', min: 0, max: 60, default: 30, condition: { postsCustoms_variant: ['variant1', 'variant2', 'variant4', 'variant5'] } }
    ],
  },
  {
    type: 'section',
    name: 'carousel',
    label: 'Carousel',
    default: [],
    fields: [
      { type: 'switcher', name: 'enable', label: 'Enable', default: false },
      { type: 'switcher', name: 'buttonEnable', label: 'Button Enable', default: true, condition: { carousel_enable: true } },
      { type: 'switcher', name: 'paginationEnable', label: 'Pagination Enable', default: true, condition: { carousel_enable: true } },
      { type: 'color', name: 'buttonColor', label: 'Button Color', default: '#000', condition: { carousel_enable: true } },
    ]
  },

  {
    type: 'section',
    name: 'translates',
    label: 'Translate',
    default: [],
    fields: [
      { type: 'text', name: 'readMoreText', label: 'Read More', default: 'Read More', },
    ]
  },

  {
    type: 'section_style',
    name: 'colors',
    label: 'Colors',
    default: [],
    fields: [
      { type: 'color', name: 'primary', label: 'Primary', default: '' },
      { type: 'color', name: 'secondary', label: 'Secondary', default: '' },
      { type: 'color', name: 'gray7', label: 'Gray 7', default: '' },
      { type: 'color', name: 'gray8', label: 'Gray 8', default: '' },
      { type: 'color', name: 'gray9', label: 'Gray 9', default: '#000000' },
      { type: 'color', name: 'rating', label: 'Rating', default: '' },
      { type: 'color', default: '', name: 'backgroundColor', label: 'Background' },
    ]
  },

  {
    type: 'section_style',
    name: 'typography',
    label: 'Typography',
    default: [],
    fields: [
      {
        type: 'typography',
        label: 'Name',
        name: 'titleTypo',
        default: '',
        selector: '{{WRAPPER}} .titleTypo'
      },
      {
        type: 'typography',
        label: 'Year Typo',
        name: 'yearTypo',
        default: '',
        selector: '{{WRAPPER}} .dateTypo'
      },
      {
        type: 'typography',
        label: 'Date Typo',
        name: 'dateTypo',
        default: '',
        selector: '{{WRAPPER}} .dateTypo'
      },

      {
        type: 'typography',
        label: 'Category',
        name: 'categoryTypo',
        default: '',
        selector: '{{WRAPPER}} .categoryTypo'
      },


      {
        type: 'typography',
        label: 'Comment',
        name: 'commentTypo',
        default: '',
        selector: '{{WRAPPER}} .commentTypo'
      },
    ]
  },

  {
    type: 'section_style',
    name: 'border',
    label: 'Border',
    default: [],
    fields: [
      { type: 'switcher', default: false, name: 'enableBorder', label: 'Enable Border' },
      { type: 'number', default: 0, min: 0, max: Infinity, name: 'borderItemWidth', label: 'Border Item Width', condition: {border_enableBorder: true} },
      { type: 'select', default: 'solid', name: 'borderItemStyle', label: 'Border Item Style', options: {solid: 'solid', dotted: 'dotted', dashed: 'dashed', double: 'double', groove: 'groove'},  condition: {border_enableBorder: true} },
      { type: 'color', default: '', name: 'borderItemColor', label: 'border Item Color', condition: {border_enableBorder: true} },
      { type: 'number', default: 0, min: 0, max: Infinity, name: 'borderItemRadius', label: 'Border Item Radius', condition: {border_enableBorder: true}  },
    ]
  },

  {
    type: 'section_style',
    name: 'customCSS',
    label: 'Custom CSS',
    default: [],
    fields: [
      { type: 'code', name: 'code', label: 'Code', language: 'css',rows: 4 , default: '', },
    ],
  }
];
