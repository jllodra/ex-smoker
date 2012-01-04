class Singleton

    instance = null    

    # Static singleton retriever/loader
    @get: ->
        if not instance?
            instance = new @
            instance.init()
        return instance

    init: (name = "unknown") ->
        console.log "#{name} initialized"