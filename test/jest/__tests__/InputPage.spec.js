import InputPage from 'src/pages/InputPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบหัวข้อ title', () => {
    const wrapper = shallowMount(InputPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('สุวพิชญ์ (firstname)', () => {
    const wrapper = shallowMount(InputPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
});
  it('บุญตวย (lastname)', () => {
    const wrapper = shallowMount(InputPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
});
  it('พิชญ์ (nickname)', () => {
    const wrapper = shallowMount(InputPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
});
  it('393 (studentID)', () => {
    const wrapper = shallowMount(InputPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
});
it('ตรวจสอบตัวแปร title', () => {
  const wrapper = shallowMount(InputPage, {
    data () {
      return {
        title: 'I love Vue.',
        firstname: 'สุวพิชญ์',
        lastname: 'บุญตวย',
        nickname: 'พิชญ์',
        studentID: '393'

      }
    }
  })
  let header = wrapper.find('.htmlClass h1')
  expect(header.text()).toBe('I love Vue.')
})
})