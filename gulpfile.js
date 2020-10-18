const { series } = require('gulp')
const download = require('download-git-repo')
const path = require('path')
const { exec } = require('child_process')
const fs = require('fs-extra')

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

async function clonePluginsRepos(){
	await fs.rmdir(path.join(__dirname, 'repos'), { recursive: true })
	await fs.mkdir(path.join(__dirname, 'repos'))
	
	return new Promise( async (res) => {
		const { list } = require(path.join(__dirname, 'store_repo', 'dist', 'data'))
		await Promise.all(list.map( async ({ id, repository }) => {
			return new Promise(resolve => {
				exec(`git clone ${repository} ${id}`, {
					cwd: path.join(__dirname, 'repos')
				}, (err) => {
					if(err) console.log(err)
					resolve()
				})
			})
		}))
		res()
	})
}

exports.default = series(cloneStoreApi, installDeps, buildsPlugins, clonePluginsRepos)
