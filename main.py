from flask import Flask, render_template
from markupsafe import Markup
import markdown

app = Flask(__name__,
            template_folder="static/templates/",
            static_folder="static/")


def generate_markup(md_file):
    with open(f"web/{md_file}", "r") as f:
        welcome = f.read()
    welcome = Markup(markdown.markdown(welcome))

    return welcome


@app.route("/")
def root():
    welcome = generate_markup("welcome.md")

    return render_template("default.html", md=welcome)


@app.route("/blog")
def blogs():
    blog = generate_markup("blogs/blog.md")

    return render_template("default.html", md=blog, pos="| blog 📖")


@app.route("/thoughts")
def thoughts():
    thought = generate_markup("thoughts/thoughts.md")

    return render_template("default.html", md=thought, pos="| thoughts 💭")


@app.route("/snippets")
def snippets():
    snip = generate_markup("snippets/snippets.md")

    return render_template("default.html", md=snip, pos="| snippets ✂️")


@app.errorhandler(404)
def not_found(error):
    err = generate_markup("error.md")

    return render_template('default.html', md=err, pos="🙅")


def main():
    app.debug = True
    app.run()


if __name__ == "__main__":
    main()
