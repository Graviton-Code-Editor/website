const { series } = require('gulp')
const download = require('download-git-repo')
const path = require('path')
const { exec } = require('child_process')
const fs = require('fs-extra')
const ncp = require('ncp')

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


async function cloneGraviton(){
	return new Promise(res => {
		download('Graviton-Code-Editor/Graviton-App', path.join(__dirname, 'graviton_repo'), () => {
			res()
		})
	})
}

async function installGravitonDeps(){
	return new Promise(res => {
		exec('npm i', {
			cwd: path.join(__dirname, 'graviton_repo')
		}, (err) => {
			if(err) {
				console.log(err)
				throw  err
			}
			res()
		})
	})
}

async function buildGravitonBrowser(){
	return new Promise((res, rej) => {
		exec('npm run build:experimental:browser', {
			cwd: path.join(__dirname, 'graviton_repo')
		}, (err) => {
			if(err) {
				console.log(err)
				rej()
			}
			res()
		})
	})
}

async function copyGravitonBrowserDist(){
	return new Promise(res => {
		ncp(path.join(__dirname, 'graviton_repo', 'dist_browser'), path.join(__dirname, 'public', 'graviton'), () => {
			res()
		})
	})
}

async function buildGravitonDocs(){
	return new Promise(res => {
		exec('npm run build:docs', {
			cwd: path.join(__dirname, 'graviton_repo')
		}, (err) => {
			if(err) {
				console.log(err)
			}
			res()
		})
	})
}

async function copyGravitonDocsDist(){
	return new Promise(res => {
		ncp(path.join(__dirname, 'graviton_repo', 'dist_docs'), path.join(__dirname, 'public', 'api_docs'), () => {
			res()
		})
	})
}



exports.default = series(
	cloneStoreApi, 
	installDeps, 
	buildsPlugins,
	clonePluginsRepos,
	cloneGraviton, 
	installGravitonDeps,
	buildGravitonBrowser, 
	copyGravitonBrowserDist,
	buildGravitonDocs,
	copyGravitonDocsDist
)
