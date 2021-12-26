const { task, desc } = require('jake')
const { spawn } = require('child_process')
const { copySync, mkdir } = require('fs-extra')

// Easily run commands
const run  = (what, args, where = './') => {
    return new Promise((resolve, reject) => {
        let proc = spawn(what, args, { cwd: where, stdio: 'inherit', shell: true});
        proc.on('close', (code) => code == 0 ? resolve() : reject())
    })
}


desc('Build the graviton book');
task('build_graviton_book', async function () {
    try {
        await run('git', ['clone', 'https://github.com/Graviton-Code-Editor/Graviton-App', 'temp_graviton', '--depth=1'])
    } catch {}
    await run('mdbook', ['build'], 'temp_graviton/book')
    await copySync('temp_graviton/book/book', 'public/book')
});

