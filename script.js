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
            image = "icons8-checkmark-500.png" 
            color = "text-primary"
            break
        case 1:
            answer = "no"
            image = "icons8-no-500.png" 
            color = "text-danger"
            break
        case 2:
            answer = "Maybe"
            image = "maybe.png" 
            color = "text-warning"
            break
        case 3:
            answer = "ask again later"
            image = "free-reschedule-4205752-3507274.png" 
            color = "text-success"
            break
        case 4:
            answer = "Definitly"
            image = "dedinitly.jpeg" // chnage this
            color = "text-success"
            break
        case 5:
            answer = "Do not count on it"
            image = "sorry.png" 
            color = "text-success"
            break
        case 6:
            answer = "out loook is good"
            image = "thumb.png" 
            color = "text-success"
            break
        case 7:
            answer = "My sources say no"
            image = "srno.png" 
            color = "text-success"
            break
    }
    const responseText =document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = `images/${image}`






}
