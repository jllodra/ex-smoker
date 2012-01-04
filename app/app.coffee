class App extends Singleton

    @data = null;

    init: ->
        super "App"
        @data = new Data()

    run: ->
        console.log "Running"

        console.log @data.retrieve()
        #console.log @data.store()

        @buildUI()
    
    buildUI: ->
        $('#tabs').tabs()
        $('#sex').buttonset()