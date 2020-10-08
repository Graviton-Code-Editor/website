const { series } = require('gulp')
const download = require('download-git-repo')
const path = require('path')
const { exec } = require('child_process')

async function cloneStoreApi(){
	return new Promise(res => {
		download('Graviton-Code-Editor/store-api', path.join(__dirname, 'store_repo'), () => {
			res()
		})
	})
}

async function installDeps(){
	return new Promise(res => {
		exec('npm i', {
			cwd: path.join(__dirname, 'store_repo')
		}, () => {
			res()
		})
	})
}

async function buildsPlugins(){
	return new Promise(res => {
		exec('npm run build', {
			cwd: path.join(__dirname, 'store_repo')
		}, () => {
			res()
		})
	})
}

exports.default = series(cloneStoreApi, installDeps, buildsPlugins)
