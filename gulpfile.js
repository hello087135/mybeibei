let gulp = require("gulp");
gulp.task("watchAll", async function () {
    gulp.watch("css/*", async () => {
        gulp.src("css/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\beiBeiSite\\css"))
    })
    gulp.watch("img/*", async () => {
        gulp.src("img/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\beiBeiSite\\img"))
    })
    gulp.watch("js/*", async () => {
        gulp.src("js/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\beiBeiSite\\js"))
    })
    gulp.watch("*.html", async () => {
        gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\beiBeiSite"))
    })
    gulp.watch("*.php", async () => {
        gulp.src("*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\beiBeiSite"))
    })
    gulp.watch("font/*", async () => {
        gulp.src("font/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\beiBeiSite\\font"))
    })
})