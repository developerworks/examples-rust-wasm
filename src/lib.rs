use wasm_bindgen::prelude::*;

// extern 外部定义的函数, 这里是 Javascript 函数,
// wasm-bindgen 知道怎么找到这些函数
#[wasm_bindgen]
extern {
    #[wasm_bindgen]
    pub fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

#[wasm_bindgen]
pub fn greet_alert(name: &str) {
    alert(&format!("Hello, {}!", name));
}
#[wasm_bindgen]
pub fn greet_console(name: &str) {
    log(&format!("Hello, {}!", name));
}