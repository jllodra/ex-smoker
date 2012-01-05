class App extends Singleton
    
    init: ->
        super "App"
        @data = new Data()
        @ui   = new UI()

    run: ->
        console.log "App.run()"
        @data.retrieve()
        console.log @data
        @ui.build(@data)
    
    clearData: ->
        @data.clear()
    
    setData: (data) ->
        @data = data
        @data.store()
    
    getData: ->
        @data.retrieve()
        return @data
    