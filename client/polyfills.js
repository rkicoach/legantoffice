import includes from 'core-js/library/fn/string/virtual/includes'

import repeat from 'core-js/library/fn/string/virtual/repeat'

import assign from 'core-js/library/fn/object/assign'



import from from 'core-js/library/fn/array/from'



console.log('Load your polyfills')



String.prototype.includes = includes

String.prototype.repeat = repeat

Object.assign = assign

Array.from = from


