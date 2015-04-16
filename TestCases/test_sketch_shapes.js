// test_sketch_shapes.js
//                           wookay.noh at gmail.com

page = get_page("TestShape")
assert_equal("TestShape", page.name())

l = get_layer(page, "L")
assert_equal("L", l.name())
assert_equal(MSShapeGroup, l.class())
assert_approx_equal(50, l.frame().width())
assert_approx_equal(50, l.frame().height())

r = get_layer(page, "R")
assert_equal("R", r.name())
assert_equal(MSShapeGroup, r.class())
assert_equal(100, r.frame().x())
assert_equal(0, r.frame().y())
assert_equal(50, r.frame().width())
assert_equal(50, r.frame().height())
assert_equal("{{100, 0}, {50, 50}}", r.absoluteRect())

o = get_layer(page, "O")
assert_equal("O", o.name())
assert_equal(MSShapeGroup, o.class())
assert_equal("{{200, 0}, {50, 50}}", o.absoluteRect())

u = get_layer(page, "U")
assert_equal("U", u.name())
assert_equal(MSShapeGroup, u.class())
assert_equal("{{300, 0}, {50, 50}}", u.absoluteRect())
