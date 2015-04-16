// test_sketch_image.js
//                           wookay.noh at gmail.com

page = get_page("TestImage")
assert_equal("TestImage", page.name())

dog = get_layer(page, "dog")
assert_equal("dog", dog.name())

count = page.layers().count()
gae = dog.duplicate()
assert_equal("dog", gae.name())
gae.name = "dog " + count
gae.frame().addX(count * 100)
