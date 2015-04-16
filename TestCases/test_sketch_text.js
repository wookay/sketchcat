// test_sketch_text.js
//                           wookay.noh at gmail.com

page = get_page("TestText")
assert_equal("TestText", page.name())

hello = get_layer(page, "hello")
assert_equal("hello", hello.name())
assert_equal("Hello", hello.stringValue())
assert_equal(5, hello.stringValue().length())
