window.BENCHMARK_DATA = {
  "lastUpdate": 1615413513976,
  "repoUrl": "https://github.com/aethanyc/icu4x",
  "entries": {
    "Heap – ubuntu-latest": [
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3be597cdf89432e493e7777bb4dec54854a47f97",
          "message": "Update string type recommendations in style_guide.md (#490)",
          "timestamp": "2021-02-12T14:07:12-06:00",
          "tree_id": "3516e2db54f25c315b8e63f51df7cb8fc3f4de38",
          "url": "https://github.com/aethanyc/icu4x/commit/3be597cdf89432e493e7777bb4dec54854a47f97"
        },
        "date": 1613543433414,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16155,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9607,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 514,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 305,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1223,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 12721,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8981,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 13779,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9066,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdd3a0b4773388f2df8cdc3c6cb5bf4230ac79cf",
          "message": "Add litemap crate (TupleVecMap) (#496)\n\n* Add terrain crate\r\n\r\n* Add doctests\r\n\r\n* Add license header, Cargo manifest keys\r\n\r\n* More review fixes\r\n\r\n* Run rustfmt\r\n\r\n* Add simple readme\r\n\r\n* Rename to litemap\r\n\r\n* VecMap -> LiteMap\r\n\r\n* Add K: Borrow<Q>",
          "timestamp": "2021-02-22T16:59:24-08:00",
          "tree_id": "31fa9eb6d25b32050bf2d6b629f45179818d8261",
          "url": "https://github.com/aethanyc/icu4x/commit/fdd3a0b4773388f2df8cdc3c6cb5bf4230ac79cf"
        },
        "date": 1614277364289,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16155,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9607,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 514,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 305,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1223,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 12721,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8981,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 13779,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9066,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d6664a376df209f86d4af47f0a686b91b8172e0",
          "message": "Move DTF to only store DateSymbols and a single pattern. (#518)",
          "timestamp": "2021-03-05T07:40:03-08:00",
          "tree_id": "c6e88347fda54bd0e73aba4c94510803800e4025",
          "url": "https://github.com/aethanyc/icu4x/commit/2d6664a376df209f86d4af47f0a686b91b8172e0"
        },
        "date": 1615413356840,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16155,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9607,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 514,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 305,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1223,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 12721,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8981,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 13779,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9066,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d6664a376df209f86d4af47f0a686b91b8172e0",
          "message": "Move DTF to only store DateSymbols and a single pattern. (#518)",
          "timestamp": "2021-03-05T07:40:03-08:00",
          "tree_id": "c6e88347fda54bd0e73aba4c94510803800e4025",
          "url": "https://github.com/aethanyc/icu4x/commit/2d6664a376df209f86d4af47f0a686b91b8172e0"
        },
        "date": 1615413513465,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16155,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9607,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 514,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 305,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1223,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 12721,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8981,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 13779,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9066,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}