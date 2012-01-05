class Data
    
    constructor: (@sex, @age) ->
        @sex ?= "Male"
        @age ?= "30"
    
    getSex: ->
        @sex

    setSex: (sex) ->
        @sex = sex
    
    getAge: ->
        @age

    setAge: (age) ->
        @age = age

    store: ->
        localStorage.setItem('sex', @sex)
        localStorage.setItem('age', @age)

    clear: ->
        #debuggin' purposes
        localStorage.clear()

    retrieve: ->
        @sex = localStorage.getItem('sex') if localStorage.getItem('sex')?
        @age = localStorage.getItem('age') if localStorage.getItem('age')?