module.exports = {
    "php": "php %s",
    "py": "python -B %s",
    "js": "node %s",
    "rb": "ruby %s",
    "lua": "lua %s",

    "java": "javac %s",
    "scala": "scala %s",
    "clj": "clojure %s",

    "go": "go run %s",

    "c": "gcc %s -o /tmp/codebox_c_build && /tmp/codebox_c_build && rm /tmp/codebox_c_build",
    "cpp": "g++ %s -o /tmp/codebox_cpp_build && /tmp/codebox_cpp_build && rm /tmp/codebox_cpp_build",

    "sh": "bash %s",

    "r": "Rscript %s",

    "d": "dmd -run %s"
};