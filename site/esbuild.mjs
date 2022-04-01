import {build} from "esbuild";
import {table} from "table";
import {wasmLoader} from 'esbuild-plugin-wasm';

const config = {
    border: {
        topBody: `─`,
        topJoin: `┬`,
        topLeft: `┌`,
        topRight: `┐`,
        bottomBody: `─`,
        bottomJoin: `┴`,
        bottomLeft: `└`,
        bottomRight: `┘`,
        bodyLeft: `│`,
        bodyRight: `│`,
        bodyJoin: `│`,
        joinBody: `─`,
        joinLeft: `├`,
        joinRight: `┤`,
        joinJoin: `┼`
    },
    drawHorizontalLine: (lineIndex, rowCount) => {
        return lineIndex === 0 || lineIndex === 1 || lineIndex === rowCount;
    }
};

async function main() {

    const entries = {
        "index.js": "out.js"
    }

    let options = {
        bundle: true,
        format: "esm",
        platform: "node",
        preserveSymlinks: true,
        entryPoints: [],
        outfile: "",
        minify: false,
        plugins: [
            wasmLoader()
        ]
    };

    let buildResult = [["entry", "output"]];

    for (const entry of Object.keys(entries)) {
        // console.log(`entry file: ${entry}, outfile: ${entries[entry]}`);
        options.entryPoints = [entry];
        options.outfile = entries[entry];
        await build(options);
        buildResult.push([entry, entries[entry]]);
    }
    console.log(table(buildResult, config));
}

main().then(r => {
    console.log("Build completed.");
});
