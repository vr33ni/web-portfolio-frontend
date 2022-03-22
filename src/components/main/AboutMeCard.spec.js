import { shallowMount } from "@vue/test-utils";
import AboutMeCard from "./AboutMeCard.vue"


test("has text", () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(AboutMeCard);
  const list = wrapper.find('ul')

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain(
    "About I am a software engineer with an interdisciplinary background, always eager to seek new challenges. I have a passion for web development (full stack). My programming languages of choice are Javascript and Golang. After work, you will find me in the gym (mostly standing on my hands), doing gymnastics on bars, bouldering or surfing.  Name: Verena Lechner  Location:  Munich, Germany  Occupation:  Software engineer @Infineon Technologies Contact"
  );

  expect(list.text()).toContain('Verena Lechner')
});



