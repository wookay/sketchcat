// unittest.js
//                           wookay.noh at gmail.com

STDOUT = "STDOUT"
function get_stdout(page) {
  for (idx=0; idx < page.layers().count(); idx++) {
    layer = page.layers().objectAtIndex(idx)
    if (layer.name() == STDOUT) {
      return layer
    }
  }
  return null
}

main = get_page("main")
stdout = get_stdout(main)
stdout.fontPostscriptName = "Monaco"
stdout.stringValue = "\n"

function print(message) {
  text = stdout.stringValue()
  stdout.stringValue = text + message
  stdout.isVisible = false
  stdout.isVisible = true
}

function log_info(msg) {
  print(msg + "\n")
}

function assert_equal(expected, got) {
  if (expected==got) {
    print(".") //passed: " + expected + "\n")
  } else {
    print("Assertion failed\nExpected: " + expected + "\nGot: " + got + "\n")
  }
}

function assert_approx_equal(expected, got) {
  if (Math.abs(expected - got) < 1.19209290e-7) {
    print(".") //passed: " + expected + "\n")
  } else {
    print("Assertion failed\nExpected: " + expected + "\nGot: " + got + "\n")
  }
}
