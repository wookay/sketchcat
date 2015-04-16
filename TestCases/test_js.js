// test_js.js
//                           wookay.noh at gmail.com

assert_equal( 1          , 1                              );
assert_equal( 1          , "1"                            );
assert_equal( 3          , 1+2                            );
assert_equal( "1+2"      , "1+2"                          );
assert_equal( "a"        , "a"                            );
assert_equal( true       , 1==1                           );
assert_equal( "a2"       , "a"+2                          );
assert_equal( 3          , "123".length                   );
assert_equal( "1"        , [1]                            );
assert_equal( "1,2"      , [1,2]                          );
assert_equal( 1          , [1,2][0]                       );
assert_equal( 2          , [1,2].length                   );
assert_equal( 0          , (null || []).length            );
assert_equal( 0          , ([] || []).length              );
assert_equal( 1          , ([1] || []).length             );
assert_equal( "value"    , {key: "value"}.key             );
assert_equal( "value"    , {key: "value"}['key']          );
assert_equal( "ja"       , "javascript".match("ja")       );
assert_equal( "java"     , "javascript".match(/j.?.?a/)   );
assert_equal( "java"     , "javascript".match(/j.*a/)     );

assert_equal( "boolean"  , typeof true                    );
assert_equal( "boolean"  , typeof false                   );
assert_equal( "number"   , typeof 1                       );
assert_equal( "string"   , typeof ""                      );
assert_equal( "object"   , typeof []                      );
assert_equal( "object"   , typeof {}                      );
assert_equal( "object"   , typeof null                    );
assert_equal( "object"   , typeof self                    );
assert_equal( "object"   , typeof this                    );
