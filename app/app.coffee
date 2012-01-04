class App extends Singleton
    
    init: ->
        super "App"
        @data = new Data()
        @ui   = new UI()

    run: ->
        console.log "App.run()"
        @ui.build()
        @ui.fill(@data)
    
    clearData: ->
        @data.clear()
    
    setData: (data) ->
        @data = data
        @data.store()
    
    getData: ->
        @data.retrieve()
        return @data
    