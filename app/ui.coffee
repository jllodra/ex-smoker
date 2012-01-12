class UI

    constructor: ->
        @data = null
        @tabs = $('#tabs')
        @sex = $('#sex')
        @age_slider = $('#age_slider')
        @age_value = $('#age_value')
        
    build: (data) ->
        @data = data
        @init_tabs()
        @init_sex()
        @init_age()
        @fill_sex(@data.sex)
        @fill_age(@data.age)
    
    init_tabs: ->
        @tabs.tabs()
        randomIndex = Math.floor Math.random()*Disease::DISEASES.length
        randomDisease = Disease::DISEASES[randomIndex]
        $('#disease').html randomDisease
        
    init_sex: ->
        @sex.buttonset()
        
    fill_sex: (sex) ->

    init_age: ->
        @age_slider.slider(
            min: 1
            max: 100
            value: @data.getAge()
            slide: (event, s) =>
                $('#amount').val s.value
                @data.setAge(s.value)
                @data.store()
            )
        $('#amount').val $('#age_slider').slider 'value'
    
    fill_age: (age) ->
    