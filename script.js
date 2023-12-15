function shakeMagic8Ball() {
    const question = prompt('Ak the Magic 8-Ball a question')
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#bad/broken/fix' //fix image
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8)
    let image, answer, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes"
            image = "yes-image.jpg" // chnage this
            color = "text-success"
            break
        case 1:
            answer = "no"
            image = "no-image.jpg" // chnage this
            color = "text-danger"
            break
        case 2:
            answer = "Maybe"
            image = "maybe-image.jpg" // chnage this
            color = "text-warning"
            break
        case 3:
            answer = "ask again later"
            image = "later-image.jpg" // chnage this
            color = "text-success"
            break
        case 4:
            answer = "It is Certain"
            image = "certain-image.jpg" // chnage this
            color = "text-success"
            break
        case 5:
            answer = "Do not count on it"
            image = "count-image.jpg" // chnage this
            color = "text-success"
            break
        case 6:
            answer = "outloook is good"
            image = "good-image.jpg" // chnage this
            color = "text-success"
            break
        case 7:
            answer = "My sources say no"
            image = "srcno-image.jpg" // chnage this
            color = "text-success"
            break
    }
    const responseText =document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = image






}
