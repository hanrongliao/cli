#! /usr/bin/env node

const program = require('commander')
const path = require('path')
const download = require('download-git-repo')
const ora = require('ora')
const { exec } = require('child_process')


const templateUri = 'github:hanrongliao/templates'
const directory = path.resolve('./')
const templateDirectory = `${directory}/.fast_templates/`

// 下载项目模版
async function downloadTemplate() {
  return new Promise((resolve, reject) => {
    download(templateUri, templateDirectory, {}, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

program.version(require('../package').version)

console.log('start...')
program.command('create')
  .description('create a new project')
  .action(async () => {
    const templates = ['admin', 'screen', 'mobile']
    const args = program.args
    const action = args[0]
    const template = args[1]

    if (action !== 'create') {
      console.log('无效命令，目前支持create')
      return
    }
    if (!templates.includes(template)) {
      console.log('模版当前只支持：', templates.join('，'))
      return
    }

    try {
      const spinner = ora('Loading template\n').start()
      await downloadTemplate()

      console.log('Loading finished\n')
      spinner.stop()
      console.log(`Generate ${template} template\n`)

      exec(`cp -rf ${templateDirectory}${template}/. ${directory}/`, {}, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(`Generate template success\n`)
          console.log('Clear cache...\n')

          exec(`rm -r ${templateDirectory}`, {}, (err) => {
            if (err) {
              console.log('Clear cache error, please rm the temporary directory: ', templateDirectory, '\n')
            } else {
              console.log('Start install dependence...\n')
              spinner.start('Loading dependence...\n')
              exec('npm install', {}, (err) => {
                if (err) {
                  console.log(err.message)
                } else {
                  spinner.stop()
                  console.log('Dependence install finished!!')
                }
              })
            }
          })
        }
      })
    } catch (e) {
      console.log(e)
    }
  })

program.parse(process.argv)

