const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const resultContainer = document.getElementById("result-container");

const translation = [
  {value: 1000, numeral: "M"},
  {value: 900, numeral: "CM"},
  {value: 500, numeral: "D"},
  {value: 400, numeral: "CD"},
  {value: 100, numeral: "C"},
  {value: 90, numeral: "XC"},
  {value: 50, numeral: "L"},
  {value: 40, numeral: "XL"},
  {value: 10, numeral: "X"},
  {value: 9, numeral: "IX"},
  {value: 5, numeral: "V"},
  {value: 4, numeral: "IV"},
  {value: 1, numeral: "I"}
]

const valid = ()=> {
  let inputs = parseInt(input.value)
  if(!inputs){
     resultContainer.classList.add("error");
    return result.innerText = "Please enter a valid number"
  }else if(inputs < 1 ){
     resultContainer.classList.add("error");
     return result.innerText = "Please enter a number greater than or equal to 1"
  }else if(inputs >= 4000){
     resultContainer.classList.add("error");
     return result.innerText = "Please enter a number less than or equal to 3999"
  }else{
     resultContainer.classList.remove("error");
     resultContainer.classList.add("output");
    conversion(inputs)
  }
}

const conversion = (number)=>{
  let roman = ""

  translation.forEach((item)=>{
    while(number >= item.value){
      roman += item.numeral
      number = number - item.value
    }
  })
  result.innerText = roman
  console.log(roman)
}

btn.addEventListener("click", valid);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    valid();
  }
});
