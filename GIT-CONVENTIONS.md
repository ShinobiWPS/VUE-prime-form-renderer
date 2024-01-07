## Git commit Message conventions

Branching strategy: Github Flow

Emoji usage: ✅

(
🍎Mac="CTRL + CMD + SPACE",
🪟Windows="WINDOWS + . "
)

Sample of a great commit message:

> ✨Add the "close" button to the modal
>
> - Not everyone expects to click outside the modal to exit

- Limit the commit subject to 72 characters (most systems will cut off any exceding character).

- **The body of the commit message must explain the "why" of the change.**

- Write the commit message in imperative mood so it can continue this sentence:
  \
  "This commit will... Add the "close" button to the modal"
  or
  "It will...Add the "close" button to the modal"

- 🚫Don't use the period, period.

- ⚠️It's preferable to not mention file or components names.(they could change)

- If you mention a component use the complete name of the component without the extension (App instead of App.js).

- 🚫Don't use terms like "Fix", "solved", "test" or similar, the type of the commit is made explicit by the emoji itself.

### Use the table below as reference for the correct emoji to use

    ✨(sparkles) New feature!
    📃(doc) Documentation
    ⚡(thunder)  performance improvement
    ✅(check) Test writing
    🎨(art) Linting, Format, Comments removed (only)
    🛠 (hammer) Refactor, Dead-code (possible break-change or bug)
    🔧(wrench) Changes on configurations and tools used
    🐛(bug) Bugfix - write what happened
      OR what wasn't supposed to happen
      and NOT what was the problem or how you solved it:
        ❌"lib.method() was undefined"
        ❌"fix disabled button"
        👍"Xtool did not start"
        👍"save button wasn't enabled"
        👍"financial quotes expiring too early"
        👍"not able to close the dialog"
