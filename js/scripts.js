$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();
    const type1 = $("input:radio[name=type1]:checked").val();
    const type2 = $("input:radio[name=type2]:checked").val();
    const type3 = $("input:radio[name=type3]:checked").val();
    const type4 = $("input:radio[name=type4]:checked").val();
    const type5 = $("input:radio[name=type5]:checked").val();

    let result;
    if (type1 === "qs1answer1" && type2 === ("qs2answer1" || "qs2answer2") && type3 === "qs3answer2" && type4 === "qs4answer1" && 50000 <= type5 <= 70000) {
      result = "JavaScript"

    } else if (type1 === "qs1answer2" && type2 === "qs2answer1" && type3 === "qs3answer1" && type4 === "qs4answer2" && 70000 < type5 || type5 <= 120000) {
      result = "Python"
      if (type5 = 130000)
        result = "Wrong answer, try again."



    } else if (type1 === "qs1answer1" && type2 === "qs2answer1" && type3 === ("qs3answer1" || "qs3answer2") && type4 === ("qs4answer1" || "qs4answer2") && 30000 <= type5 < 50000) {
      result = "Swift"
    }

    $("#output").text(result);
    $("#result").toggle();


  });
});
