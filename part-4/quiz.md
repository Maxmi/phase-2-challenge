When you run a command in the terminal, where does BASH look for that command?
- it goes into PATH, which is an environment variable where directories of all executable programs are specified.

On a UNIX computer, how do you stop a running process?
 - Ctrl + C

What packages do you have installed via homebrew?

~ $ brew list
autoconf  libgpg-error  mas   python3   trash
automake  libksba   maven   rbenv   tree
chromedriver  libtool   openssl   readline  xz
coreutils libxml2   openssl@1.1 ruby    zlib
gdbm    libxslt   pkg-config  ruby-build
hub   libyaml   postgresql  sqlite

~ $ brew cask list
cocoarestclient     iterm2              postico             spectacle
fiddler             mono-mdk            slack


On a UNIX computer, how do you find the process id of a running process?
-ps -a will show all processes and their id

In a terminal, what does control-c do?
- stops running process

In a terminal, what does control-a do?
- cursor goes to the beginning of a line

In a terminal, what does control-e do?
- cursor goes to the end of a line

What keyboard shortcut do you use to split the screen in your editor?
Cmd-K + arrow key


What keyboard shortcut do you use to split the screen in your terminal?
- terminal - Cmd D to split, Cmd Shift D - to unsplit
- in iTerm - Cmd D splits vertically, Cmd Shift D splits horizontally.


When a terminal command completes, how can you tell if it was successful or not?
- by the message it produces. If it showed what I was expecting - then it was successul, if it's showing error message or nothing at all - then it wasn't successful


What does your ~/.gitconfig have in it? (paste the whole file here)

[alias]
  co = checkout
  ci = commit
  st = status --short --branch
  l  = log --oneline --decorate --graph --relative-date --show-signature
  ls-untracked-files = !git-ls-files -o --exclude-standard
  ls-ignored-files = !git-ls-files --others -i --exclude-standard
  ls-modified-files = !git-ls-files -m
[color]
  status = auto
  diff = auto
  branch = auto
  interactive = auto
  ui = auto
  pager = true
[color "status"]
  added = green
  changed = yellow
  untracked = red

[user]
  name = Gulmira Berdalieva
  email = gulmira2410@gmail.com

[core]
  excludesfile = ~/.gitignore
  autocrlf = false
  pager = less -F -X
  whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eo
  editor = subl -w


[apply]
  whitespace = fix
[push]
  default = upstream
[branch]
  autosetuprebase = always
  autosetupmerge = true
[mergetool "diffmerge"]
  cmd = diffmerge --merge --result=$MERGED $LOCAL $BASE $REMOTE
  trustExitCode = false
[rebase]
  autosquash = true
[rerere]
  enabled = true
  autoupdate = true
[help]
  autocorrect = 50

[filter "lfs"]
  clean = git-lfs clean %f
  smudge = git-lfs smudge %f
  required = true



What is the difference between a relative and absolute path?

- Absolute path shows location of a file starting from the root directory, it starts with /
- Relative path hides all previous directories only showing the one where file is located actually, doesn't start with /


Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?

- cd .. then cd pinterest-for-dogs or directly cd ../pinterest-for-dogs

What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

- Ctrl+0

What files or folders do you want all git repositories to ignore?

- right now since we are working with Node, we need to ignore all npm-modules and log files.

What is the main difference between == and === in JavaScript?

- == is light comparison, it compares only by value, but not by data type
=== is a strict comparion, data type is also considered
