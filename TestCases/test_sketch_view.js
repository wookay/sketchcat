// test_sketch_view.js
//                           wookay.noh at gmail.com

view = context.document.currentView()
assert_equal(NSMakeRect(0,0,851,709).description(), view.frame().description())
assert_equal(0, view.frame().origin.x)
