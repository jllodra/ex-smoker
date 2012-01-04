class Data
    
    constructor: (@sex, @age) ->
        @sex ?= "Male"
        @age ?= 30
        
    store: ->
        console.log("Storing data")
        randomAge = Math.random()
        localStorage.setItem('age', randomAge)
        return randomAge
        
    retrieve: ->
        #sólo seteamos @age si getItem no es null
        @age = localStorage.getItem('age')