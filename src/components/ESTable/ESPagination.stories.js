/*
 * @Date        : 2022-10-19 17:10:55
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-19 17:30:04
 * @Description :
 */
import ESPagination from './ESPagination.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/ESPagination',
  component: ESPagination,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   // background: { control: 'color' },
  //   pageSize: {
  //     control: { type: 'number' },
  //     //   options: ['small', 'medium', 'large'],
  //   },
  //   // total: {},
  // },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ESPagination },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ESPagination v-bind="args" />',
})

export const Simple = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Simple.args = {
  background: true,
  pageSize: 20,
  total: 100,
  currentPage: 3,
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }
