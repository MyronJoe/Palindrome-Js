var inp1 = document.querySelector('#input1')
var out1 = document.querySelector('#output1')
var btn = document.querySelector('#btnConvert')
var result = document.querySelector('#result')

btn.addEventListener('click', function(){

    if(inp1.value === ''){

        result.textContent = 'Input a word'
        result.classList.add('color-red')
    }
    else{
        input = inp1.value

        function palindrome(str){
            return str.split('').reverse().join('')
        }

        out1.value = palindrome(input)

        if(out1.value === inp1.value){
            result.textContent = 'This is a palindrom'
            result.classList.add('color-green') 
        }
        else{
            result.textContent = 'This is not a palindrom'
            result.classList.add('color-red')
        }
        
    }
  
})