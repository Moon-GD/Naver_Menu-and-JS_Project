;(()=> {
    'use strict';

    let goal_list = []
    let limit = 10
    let trial = 0
    let end = false
    let strike = 0, ball = 0

    while(goal_list.length<4)
    {
        let num = parseInt(Math.random() * 10)

        if(goal_list.indexOf(num) == -1)
        {
            goal_list.push(num)
        }
    }
    
    let goal = goal_list[0] * 1000 + goal_list[1] * 100 + goal_list[2] * 10 + goal_list[3]
    console.log(goal)
    let form_area = document.querySelector('form')
    let input = document.querySelector('input')


    form_area.addEventListener('submit', ()=> {
        if(end != true)
        {
            isCheck()
        }
    })


    function isCheck() {
        event.preventDefault()
        let value = input.value
    
        // 중복인 경우
        if(isDuplicate(value) == -1) {

        }
        // 중복이 아닌 경우
        else {
            trial++
            if(isCorrect(value) == 0)
            {
                return
            }
            else
            {

            }
        }

        if(trial>=limit) {
            alert('10회 이상 틀리셨습니다! 게임을 종료합니다')
            gameover()
            end=true
        }
    }


    function isDuplicate(input) {
        let input_set = new Set(input)
        if(input_set.size < 4)
        {
            alert('중복되어서는 안됩니다!')
            return -1
        }
        else
        {
            return 0
        }
    }

    function isCorrect(value) {
        if(goal == parseInt(value))
        {
            alert(`정답입니다!! 시도 : ${trial}회`)
            gameover()
            return 0
        }
        else {
            getStrike(value)
            getBall(value)
            let result_area = document.querySelector('div.result-area')
            console.log(result_area)
            let div = document.createElement('div')
            let text = document.createTextNode(`
                ${trial}차 시도 : ${value} STRIKE: ${strike}, BALL:${ball}
            `)
            div.appendChild(text)
            result_area.appendChild(
                div
            )
            return 1
        }
    }

    function getStrike(value) {
        let count = 0
        for(let i=0;i<4;i++)
        {
            if(goal_list[i] == value[i])
            {
                count++
            }
        }
        strike = count
    }

    function getBall(value) {
        let count = 0
        for(let i=0;i<4;i++)
        {
            let c = goal_list[i]
            if(value.includes(c) == true) {
                count++
            }
        }

        ball = count - strike
    }

    function gameover() {
        end = true

        let button = document.querySelector('button')
        button.innerText = '다시 시작'
    }
}) ()