// sketch.js
//                           wookay.noh at gmail.com

function get_page(name) {
  for (idx=0; idx < doc.pages().count(); idx++) {
    page = doc.pages().objectAtIndex(idx)
    if (page.name() == name) {
      return page
    }
  }
  return null
}

function get_layer(page, name) {
  for (idx=0; idx < page.layers().count(); idx++) {
    layer = page.layers().objectAtIndex(idx)
    if (layer.name() == name) {
      return layer
    }
  }
  return null
}
