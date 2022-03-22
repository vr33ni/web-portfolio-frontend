import { shallowMount } from "@vue/test-utils";
import EducationItem from "./EducationItem.vue"; // name of your Vue component


let languageGetter;

beforeEach(() => {
  languageGetter = jest.spyOn(window.navigator, 'language', 'get')
})

test("education item is default color", () => {
  languageGetter.mockReturnValue('de')
  var wrapper = shallowMount(EducationItem, {
    propsData: {
      itemTimeline: {
        data: {
          color: "rgb(45, 161, 191)",
          from: ""
        },
      },
      colorDots: "rgb(45, 161, 191)",
      dateLocale: languageGetter,
    },
  });
  expect(wrapper.find('span').wrapperElement.style._values.background).toBe("rgb(45, 161, 191)");
 });
