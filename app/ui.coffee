class UI

    constructor: () ->
        @tabs = $('#tabs')
        @sex = $('#sex')
        @age_slider = $('#age_slider')
        @age_value = $('#age_value')
        
    build: ->
        @init_tabs()
        @init_sex()
        @init_age()
        
    fill: (data) ->
        @fill_sex(data.sex)
        @fill_age(data.age)
    
    init_tabs: ->
        @tabs.tabs()
        
    init_sex: ->
        @sex.buttonset()
        
    fill_sex: (sex) ->

    init_age: ->
        @age_slider.slider(
            min: 1
            max: 100
            value: 19
            slide: (event, s) ->
                $('#amount').val s.value
            )
        $('#amount').val $('#age_slider').slider 'value'
    
    fill_age: (age) ->
    