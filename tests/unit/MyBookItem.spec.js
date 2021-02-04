import { shallowMount } from "@vue/test-utils";
import MyBookItem from "@/components/MyBookItem.vue";
import server from "@/tests/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("MyBookItem.vue", () => {
  it("Visualizza i dati del libro", () => {
    const book = {
      isbn: "123456789",
      title: "Titolo",
      subtitle: "Sottotitolo",
      author: "Autore",
      published: "2021-02-03T00:00:00.000Z",
      description: "Descrizione"
    };

    const options = {
      props: { book }
    };

    const wrapper = shallowMount(MyBookItem, options);
    expect(wrapper.text()).toContain(book.title);
    expect(wrapper.text()).toContain(book.subtitle);
    expect(wrapper.text()).toContain(book.author);
    expect(wrapper.text()).toContain(book.description);
    expect(wrapper.text()).toContain('2021-02-03');
  });
});
