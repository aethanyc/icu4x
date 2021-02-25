use icu_segmenter_lstm::lstm::Lstm;
use std::char::decode_utf16;

// TODO:
// json file is big, So I should use anoher binary format like npy.
// But provided npy uses tensorflow dtype.
const THAI_MODEL: &[u8; 373466] =
    include_bytes!("../../../experimental/segmenter_lstm/tests/testdata/Thai_codepoints_exclusive_model4_heavy/weights.json");

lazy_static! {
    static ref THAI_LSTM: Lstm = {
        let lstm_data = serde_json::from_slice(THAI_MODEL).expect("JSON syntax error");
        Lstm::try_new(lstm_data).unwrap()
    };
}

struct LstmSegmenterIterator {
    bies_str: String,
    pos: usize,
}

impl Iterator for LstmSegmenterIterator {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        loop {
            let ch = self.bies_str.chars().nth(self.pos)?;
            // This ch is always in bitmap.
            self.pos += 1;
            if ch == 'e' && self.bies_str.len() > self.pos {
                return Some(self.pos);
            }
        }
    }
}

impl LstmSegmenterIterator {
    pub fn new(lstm: &Lstm, input: &str) -> Self {
        let lstm_output = lstm.word_segmenter(input);
        Self {
            bies_str: lstm_output,
            pos: 0,
        }
    }
}

pub fn get_line_break_utf16(input: &[u16]) -> Option<Vec<usize>> {
    let s: String = decode_utf16(input.iter().cloned())
        .map(|r| r.unwrap())
        .collect();
    let iter = LstmSegmenterIterator::new(&*THAI_LSTM, &s);
    let result: Vec<usize> = iter.map(|i| i).collect();
    if result.is_empty() {
        return None;
    }
    Some(result)
}

mod tests {
    #[allow(unused_imports)]
    use crate::lstm::get_line_break_utf16;

    #[test]
    fn thai_word_break_utf16() {
        let text: [u16; 14] = [
            0x0e20, 0x0e32, 0x0e29, 0x0e32, 0x0e44, 0x0e17, 0x0e22, 0x0e20, 0x0e32, 0x0e29, 0x0e32,
            0x0e44, 0x0e17, 0x0e22,
        ];
        let breaks = get_line_break_utf16(&text);
        assert_eq!(breaks.unwrap(), [4, 7, 11], "Thai test");

        let text: [u16; 4] = [0x0e20, 0x0e32, 0x0e29, 0x0e32];
        let breaks = get_line_break_utf16(&text);
        assert_eq!(breaks, None, "Thai test");
    }
}
