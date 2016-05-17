/**
 * 拷贝文件
 */
module.exports = {
	main: {
		files: [
			{
				cwd: 'src',
				src: ['widgets/kissymini/build/mini-min.js', 'config.js','widgets/**/*.css'],
				dest: 'build',
				expand: true
			}
		]
	}
};
