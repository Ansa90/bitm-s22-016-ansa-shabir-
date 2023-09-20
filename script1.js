const calculate = () => {
      let PF = document.querySelector("#PF").value;
    let ICT = document.querySelector("#ICT").value;
    let maths = document.querySelector("#maths").value;
    let phy = document.querySelector("#phy").value;
    let ENG = document.querySelector("#ENG").value;
    let grades = "";
    let gpa =" ";    
    let totalgrades =  parseFloat(PF) + parseFloat(ICT) + parseFloat(maths) + parseFloat(phy) + parseFloat(ENG);
    
      let percentage = (totalgrades / 500) * 100;
    if (percentage <= 100 && percentage >= 80) {
      gpa ="4.00";
      grades = "A" ;
    } else if (percentage <= 79 && percentage >= 68) {
      gpa = "3.33";
      grades = "B";
    } else if (percentage <= 67 && percentage >= 58) {
      gpa="2.33";
      grades = "C";
    } else if (percentage <= 57 && percentage >= 50) {
      gpa="1.30";
      grades = "D";
    } else {
      gpa="0.00";
      grades = "F";
    }
    if (PF == "" || ICT == "" || maths == "" || phy == ""|| ENG == "") {
      document.querySelector("#showdata").innerHTML
           = "Please enter all the fields";
    } else {
          if (percentage >= 50) { document.querySelector("#showdata").innerHTML =  `Out of 500 your total is  ${totalgrades} 
           and percentage is ${percentage}%. <br> Your grade is ${grades}. <br> Your GPA is ${gpa}. You are Pass. `;
      } else {
        document.querySelector("#showdata").innerHTML = ` Out of 500 your total is  ${totalgrades} 
          and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Fail. `;
      }
    }
  };