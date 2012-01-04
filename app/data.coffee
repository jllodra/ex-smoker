class Data
    
    constructor: (@sex, @age) ->
        @sex ?= "Male"
        @age ?= "30"
        
    store: ->
        localStorage.setItem('sex', @sex)
        localStorage.setItem('age', @age)

    clear: ->
        #debuggin' purposes
        localStorage.setItem('sex', null)
        localStorage.setItem('age', null)

    retrieve: ->
        @sex = localStorage.getItem('sex') if localStorage.getItem('sex')?
        @age = localStorage.getItem('age') if localStorage.getItem('age')?