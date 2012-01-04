class UI

    constructor: (@tabsid = '#tabs', @sexid = '#sex') ->
        @tabs = $('#tabs')
        @sex = $('#sex')
        
    build: ->
        @tabs.tabs()
        @sex.buttonset()