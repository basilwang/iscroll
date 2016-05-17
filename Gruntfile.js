/**
 * 本文件是 Gruntfile.js 默认模板，请根据需要和注释提示自行修改
 * 从这里获得最新版
 * http://gitlab.alibaba-inc.com/trip-tools/generator-clam/blob/master/app/templates/Gruntfile_src.js
 * 文档地址:
 * http://cnpmjs.org/package/generator-clam
 */
var path = require('path'),
	fs = require('fs'),
	exec = require('child_process').exec;

module.exports = function (grunt) {
	require('time-grunt')(grunt);

	// -------------------------------------------------------------
	// 智能载入模块
	// https://github.com/shootaroo/jit-grunt
	// -------------------------------------------------------------

	var task = grunt.task;

	// -------------------------------------------------------------
	// 任务配置
	// -------------------------------------------------------------

	grunt.initConfig({
		kmb: {
			options: {
				pkgName: 'h5-home',
				compress: false,
				comboRequire: false,
				addModuleName: true,
				depFilePath: 'build/map.js',
				// alias: 'src/config.js'
				// alias: ['src/alias.js', 'mods/abc/alias.js']
				//alias: {
				//	'iscroll': {
				//		alias:['h5-home/widgets/libs/iscroll']
				//	},
				//	'moment': {
				//		alias:['h5-home/widgets/libs/moment']
				//	}
				//},
				ext: '-min'
			},
			main: {
				files: [
					{
						cwd: '',
						src: ['**/*.js',
							'!widgets/base/**/*',
							'!**/*/Gruntfile.js',
							'!node_modules/**/*',
							'!test/**/*',
							'!grunt/**/*',
							'!demo/**/*',
							'!**/build/**/*'],
						dest: 'build/',
						expand: true
					}
				]
			}
		}
	})
	grunt.loadNpmTasks('grunt-kmb');

	grunt.registerTask('default', ['kmb']);

};