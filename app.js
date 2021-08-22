const inputEl=document.getElementById('inputel')

const btnEl=document.getElementById('btnel')

const outputEl=document.getElementById('outputel')

const url='https://api.funtranslations.com/translate/minion.json'







function getDataFromServer(){
    
    let inputValue=inputEl.value
    //console.log(inputValue)
    const updatedUrl=url+'?'+'text='+inputValue
    //console.log(updatedUrl)

    fetch(updatedUrl)
    .then(function(response){
        return response.json()
    }).then(function(parsedData){
        
        outputEl.value='okkkkkk'
    })


}



btnEl.addEventListener('click',getDataFromServer)