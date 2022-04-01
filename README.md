# Compiling from Rust to WebAssembly
en-US
https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm
zh-CN
https://developer.mozilla.org/zh-CN/docs/WebAssembly/Rust_to_wasm

## 开发环境

更新 rustup, rustup 是 Rust 编程语言的工具链, 包括编译器和包管理器(`Cargo`)
```shell
rustup self update
cargo install wasm-pack
```

`wasm-bindgen` 用作 `Rust` 和 `Javascript` 之间的胶水, 通过它, 可以:

- 在 `Javascript` 中调用 `Rust` 代码
- 在 `Rust` 中调用 `Javascript` 代码

在 Rust 中, 程序库被称作 `crates`.

- `#[ ]` 意味属性

编译步骤说明

- Rust 代码编译为 WebAssembly
- 在生成的 Webassembly 上运行 `wasm-bindgen`, 生成 Javascript 文件来包赚 WebAssenbly 为浏览器能够理解的模块
- 创建 `pkg`目录并移动 Javascript 文件和 WebAssembly 文件到这个目录
- 读取`Cargo.toml`文件生成对应的`package.json`文件
- 复制 `README.md`(如果有的话) 文件到 `pkg` 中

`pkg` 目录的结构和一个 npm 包的结构相同, 可以通过下面的命令链接

```shell
cd pkg
npm link
```
现在就有了一个用 Rust 编写的, 编译为 WebAssembly 的 NPM 包, 
现在就可以这边在 Javascript 里面使用了, 但不要求用户安装 Rust;
包含的代码为 WebAssembly 代码而非 Rust 源代码

## 构建

```shell
wasm-pack build --target bundler          # build in project root
cd pkg && npm link                        # cd to npm link to local repo
cd ../site && npm link examples-rust-wasm # cd to site link the npm package
```

测试

```shell
node esbuild.mjs

python3 -m http.server 3000      # Python 3
python -m SimpleHTTPServer 3000  # python 2 

open http://127.0.0.1:3000
```


