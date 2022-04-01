import("./node_modules/examples-rust-wasm/examples_rust_wasm.js").then((js) => {
    js.greet_console("WebAssembly with NPM");
    document.getElementById("click").onclick = function () {
        js.greet_alert("Ha ha ha, Wa ha ha!");
    }
});
// import hello_wasm from "./node_modules/hello-wasm/hello_wasm";


