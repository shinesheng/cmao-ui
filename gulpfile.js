const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const through2 = require('through2');
const watch = require('gulp-watch');

const paths = {
    dest: {
        lib: 'lib'
    },
    styles: 'src/**/*.scss',
    scripts: ['src/**/*.{ts,tsx}'],
    images: 'src/**/*.{png,jpg}'
};

/**
 * 当前组件样式 import './index.scss' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * @param {string} content
 */
function cssInjection(content) {
    return content
        .replace(/\/style\/?'/g, "/style/css'")
        .replace(/\/style\/?"/g, '/style/css"')
        .replace(/\.scss/g, '.css');
}

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
    const { scripts } = paths;
    process.env.BABEL_ENV = babelEnv;
    return gulp
        .src(scripts)
        .pipe(babel()) // 使用gulp-babel处理
        .pipe(
            through2.obj(function z(file, encoding, next) {
                this.push(file.clone());
                // 找到目标
                if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
                    const content = file.contents.toString(encoding);
                    file.contents = Buffer.from(cssInjection(content)); // 处理文件内容
                    file.path = file.path.replace(/index\.js/, 'css.js'); // 文件重命名
                    this.push(file); // 新增该文件
                    next();
                } else {
                    next();
                }
            }),
        )
        .pipe(gulp.dest(destDir));
}


/**
 * 编译cjs
 */
function compileCJS() {
    const { dest } = paths;
    return compileScripts('cjs', dest.lib);
}

// const buildScripts = gulp.series(compileCJS);

/**
 * 拷贝图片文件
 */
function copyImage() {
    return gulp.src(paths.images).pipe(gulp.dest(paths.dest.lib));
}

/**
 * 拷贝sass文件
 */
function copySass() {
    return gulp.src(paths.styles).pipe(gulp.dest(paths.dest.lib));
}

/**
 * 生成css文件
 */
function sass2css() {
    return gulp
        .src(paths.styles)
        .pipe(sass()) // 处理sass文件
        .pipe(autoprefixer()) // 根据browserslistrc增加前缀
        .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
        .pipe(gulp.dest(paths.dest.lib));
}

//队列
const build = gulp.parallel(compileCJS, copyImage, copySass, sass2css);

gulp.task('watch', function () {
    const tsWatcher = gulp.watch(paths.scripts, compileCJS);
    tsWatcher.on('change', function (path, stats) {
        console.log(`ts ${path} was changed`);
    }).on('add', function (path, stats) {
        console.log(`ts ${path} was added`);
    }).on('unlink', function (path, stats) {
        console.log(`ts ${path} was removed`);
    });

    //图片
    const imageWatcher = gulp.watch(paths.images, copyImage);
    imageWatcher.on('change', function (path, stats) {
        console.log(`image ${path} was changed`);
    }).on('add', function (path, stats) {
        console.log(`image ${path} was added`);
    }).on('unlink', function (path, stats) {
        console.log(`image ${path} was removed`);
    });

    const cssWatcher = gulp.watch(paths.styles, gulp.series(copySass, sass2css));
    cssWatcher.on('change', function (path, stats) {
        console.log(`css ${path} was changed`);
    }).on('add', function (path, stats) {
        console.log(`css ${path} was added`);
    }).on('unlink', function (path, stats) {
        console.log(`css ${path} was removed`);
    });
});

exports.build = build;

exports.default = build;