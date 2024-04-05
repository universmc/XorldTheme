@Airdeuniversmc XorldTheme % tree -I node_modules
.
── custom-template.php
── data
   └── plugins
       ├── ai-engine
       │   ├── ai-engine.php
       │   ├── app
       │   │   ├── chatbot.js
       │   │   ├── i18n.js
       │   │   ├── index.js
       │   │   └── vendor.js
       │   ├── blueprint.json
       │   ├── classes
       │   │   ├── admin.php
       │   │   ├── api.php
       │   │   ├── core.php
       │   │   ├── engines
       │   │   │   ├── anthropic.php
       │   │   │   ├── core.php
       │   │   │   ├── factory.php
       │   │   │   ├── google.php
       │   │   │   ├── huggingface.php
       │   │   │   ├── openai.php
       │   │   │   └── openrouter.php
       │   │   ├── init.php
       │   │   ├── modules
       │   │   │   ├── chatbot.php
       │   │   │   ├── discussions.php
       │   │   │   ├── files.php
       │   │   │   ├── security.php
       │   │   │   ├── tasks.php
       │   │   │   └── utilities.php
       │   │   ├── queries
       │   │   │   ├── assistant.php
       │   │   │   ├── base.php
       │   │   │   ├── embed.php
       │   │   │   ├── function.php
       │   │   │   ├── image.php
       │   │   │   ├── parameter.php
       │   │   │   ├── text.php
       │   │   │   └── transcribe.php
       │   │   ├── reply.php
       │   │   └── rest.php
       │   ├── common
       │   │   ├── admin.php
       │   │   ├── helpers.php
       │   │   ├── issues.php
       │   │   ├── news.php
       │   │   ├── ratings.php
       │   │   ├── releases.txt
       │   │   └── rest.php
       │   ├── constants
       │   │   ├── init.php
       │   │   └── models.php
       │   ├── images
       │   │   ├── avatar-ai.svg
       │   │   ├── avatar-user.svg
       │   │   ├── chat-color-blue.svg
       │   │   ├── chat-color-green.svg
       │   │   ├── chat-color-red.svg
       │   │   ├── chat-green.svg
       │   │   ├── chat-openai.svg
       │   │   ├── chat-robot-1.svg
       │   │   ├── chat-robot-2.svg
       │   │   ├── chat-robot-3.svg
       │   │   ├── chat-robot-4.svg
       │   │   ├── chat-robot-5.svg
       │   │   ├── chat-robot-6.svg
       │   │   ├── chat-traditional-1.svg
       │   │   ├── chat-traditional-2.svg
       │   │   ├── chat-traditional-3.svg
       │   │   └── wand.png
       │   ├── languages
       │   ├── readme.txt
       │   ├── themes
       │   │   ├── ChatGPT.module.css
       │   │   ├── ChatGPT.module.scss
       │   │   ├── Messages.module.css
       │   │   ├── Messages.module.scss
       │   │   ├── _codeDark.scss
       │   │   ├── _codeLight.scss
       │   │   ├── _common.scss
       │   │   └── _copybutton.scss
       │   ├── uninstall.php
       │   └── vendor
       │       ├── autoload.php
       │       ├── bin
       │       ├── composer
       │       │   ├── ClassLoader.php
       │       │   ├── InstalledVersions.php
       │       │   ├── LICENSE
       │       │   ├── autoload_classmap.php
       │       │   ├── autoload_namespaces.php
       │       │   ├── autoload_psr4.php
       │       │   ├── autoload_real.php
       │       │   ├── autoload_static.php
       │       │   ├── installed.json
       │       │   └── installed.php
       │       ├── erusev
       │       │   └── parsedown
       │       │       ├── LICENSE.txt
       │       │       ├── Parsedown.php
       │       │       ├── README.md
       │       │       └── composer.json
       │       ├── highlightjs
       │       │   ├── highlight.min.js
       │       │   └── stackoverflow-dark.min.css
       │       └── typewriterjs
       │           └── typewriter.min.js
       └── template
           ├── comments.json
           ├── footer.php
           ├── header.php
           ├── index.php
           ├── page.php
           ├── script.js
           ├── script.json
           ├── sidebar.php
           └── single.txt
── docs
── footer.php
── functions.php
── header.php
── index.php
── main.php
── models
   ├── page-templates
   │   ├── template-contact.php
   │   ├── template-fullwidth.php
   │   └── template-howto.php
   └── templates
       ├── comments.json
       ├── footer.php
       ├── header.php
       ├── index.php
       ├── page.php
       ├── script.js
       ├── script.json
       ├── sidebar.php
       └── single.txt
── package-lock.json
── package.json
── page-about.php
── page-contact.php
── page-howto.php
── page.php
── script.js
── src
   ├── css
   │   ├── bootstrap.css
   │   ├── bootstrap.css.map
   │   ├── custom.css
   │   └── custom.css.map
   ├── inc
   ├── js
   │   └── bootstrap.min.js
   ├── sass
   │   ├── _custom.scss
   │   ├── bootstrap
   │   │   └── scss
   │   │       ├── _accordion.scss
   │   │       ├── _alert.scss
   │   │       ├── _badge.scss
   │   │       ├── _breadcrumb.scss
   │   │       ├── _button-group.scss
   │   │       ├── _buttons.scss
   │   │       ├── _card.scss
   │   │       ├── _carousel.scss
   │   │       ├── _close.scss
   │   │       ├── _containers.scss
   │   │       ├── _dropdown.scss
   │   │       ├── _forms.scss
   │   │       ├── _functions.scss
   │   │       ├── _grid.scss
   │   │       ├── _helpers.scss
   │   │       ├── _images.scss
   │   │       ├── _list-group.scss
   │   │       ├── _maps.scss
   │   │       ├── _mixins.scss
   │   │       ├── _modal.scss
   │   │       ├── _nav.scss
   │   │       ├── _navbar.scss
   │   │       ├── _offcanvas.scss
   │   │       ├── _pagination.scss
   │   │       ├── _placeholders.scss
   │   │       ├── _popover.scss
   │   │       ├── _progress.scss
   │   │       ├── _reboot.scss
   │   │       ├── _root.scss
   │   │       ├── _spinners.scss
   │   │       ├── _tables.scss
   │   │       ├── _toasts.scss
   │   │       ├── _tooltip.scss
   │   │       ├── _transitions.scss
   │   │       ├── _type.scss
   │   │       ├── _utilities.scss
   │   │       ├── _variables-dark.scss
   │   │       ├── _variables.scss
   │   │       ├── bootstrap-grid.scss
   │   │       ├── bootstrap-reboot.scss
   │   │       ├── bootstrap-utilities.scss
   │   │       ├── bootstrap.scss
   │   │       ├── forms
   │   │       │   ├── _floating-labels.scss
   │   │       │   ├── _form-check.scss
   │   │       │   ├── _form-control.scss
   │   │       │   ├── _form-range.scss
   │   │       │   ├── _form-select.scss
   │   │       │   ├── _form-text.scss
   │   │       │   ├── _input-group.scss
   │   │       │   ├── _labels.scss
   │   │       │   └── _validation.scss
   │   │       ├── helpers
   │   │       │   ├── _clearfix.scss
   │   │       │   ├── _color-bg.scss
   │   │       │   ├── _colored-links.scss
   │   │       │   ├── _focus-ring.scss
   │   │       │   ├── _icon-link.scss
   │   │       │   ├── _position.scss
   │   │       │   ├── _ratio.scss
   │   │       │   ├── _stacks.scss
   │   │       │   ├── _stretched-link.scss
   │   │       │   ├── _text-truncation.scss
   │   │       │   ├── _visually-hidden.scss
   │   │       │   └── _vr.scss
   │   │       ├── mixins
   │   │       │   ├── _alert.scss
   │   │       │   ├── _backdrop.scss
   │   │       │   ├── _banner.scss
   │   │       │   ├── _border-radius.scss
   │   │       │   ├── _box-shadow.scss
   │   │       │   ├── _breakpoints.scss
   │   │       │   ├── _buttons.scss
   │   │       │   ├── _caret.scss
   │   │       │   ├── _clearfix.scss
   │   │       │   ├── _color-mode.scss
   │   │       │   ├── _color-scheme.scss
   │   │       │   ├── _container.scss
   │   │       │   ├── _deprecate.scss
   │   │       │   ├── _forms.scss
   │   │       │   ├── _gradients.scss
   │   │       │   ├── _grid.scss
   │   │       │   ├── _image.scss
   │   │       │   ├── _list-group.scss
   │   │       │   ├── _lists.scss
   │   │       │   ├── _pagination.scss
   │   │       │   ├── _reset-text.scss
   │   │       │   ├── _resize.scss
   │   │       │   ├── _table-variants.scss
   │   │       │   ├── _text-truncate.scss
   │   │       │   ├── _transition.scss
   │   │       │   ├── _utilities.scss
   │   │       │   └── _visually-hidden.scss
   │   │       ├── utilities
   │   │       │   └── _api.scss
   │   │       └── vendor
   │   │           └── _rfs.scss
   │   └── stylus.scss
   ├── svg
   └── xml
── srv
   └── json
── style.css

42 directories, 221 files